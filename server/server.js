import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from "crypto";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, PORT = 5000 } = process.env;

if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
  console.warn("[warn] Missing RAZORPAY_KEY_ID/RAZORPAY_KEY_SECRET in env");
}

const razorpay = new Razorpay({ key_id: RAZORPAY_KEY_ID, key_secret: RAZORPAY_KEY_SECRET });

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.post("/api/create-order", async (req, res) => {
  try {
    const { amountInPaise, currency = "INR", receipt = `rcpt_${Date.now()}` } = req.body || {};
    if (!amountInPaise || Number.isNaN(Number(amountInPaise))) {
      return res.status(400).json({ error: "amountInPaise required" });
    }
    const order = await razorpay.orders.create({ amount: Number(amountInPaise), currency, receipt });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/verify-payment", (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");
    const isValid = expectedSignature === razorpay_signature;
    if (!isValid) return res.status(400).json({ valid: false });
    res.json({ valid: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Razorpay server running on http://localhost:${PORT}`);
});


