import { useLocation, useNavigate } from "react-router-dom";

async function loadRazorpayScript() {
  if (document.getElementById("razorpay-checkout-js")) return true;
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.id = "razorpay-checkout-js";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { placeIn } = location.state || {};

  if (!placeIn) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold">No booking data</h2>
          <p className="mt-2 text-gray-600">Please go back and fill the details.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 inline-flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-5 py-3 font-medium shadow-sm"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  const { name, imageUrl, approximateBudget } = placeIn;
  const { price, nights } = approximateBudget;

  const handlePayNow = async () => {
    const ok = await loadRazorpayScript();
    if (!ok) {
      alert("Unable to load payment SDK. Check your internet connection.");
      return;
    }

    const amountInPaise = Number(price) * 100;

    // Create order on backend
    let order;
    try {
      const res = await fetch("http://localhost:5000/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amountInPaise })
      });
      order = await res.json();
      if (!order?.id) throw new Error("Order creation failed");
    } catch (e) {
      alert("Failed to create payment order. Please try again.");
      return;
    }

    const options = {
      key: "rzp_test_1234567890abc", // replace with your Test Key ID
      order_id: order.id,
      currency: "INR",
      name: "Trip Booking",
      description: `${name} - ${nights} nights`,
      image: imageUrl,
      handler: async function (response) {
        // Optional: verify signature on backend
        try {
          await fetch("http://localhost:5000/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            })
          });
        } catch (e) {}
        const paymentId = response.razorpay_payment_id;
        navigate("/payment-success", { state: { paymentId } });
      },
      theme: { color: "#16a34a" },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function () {
      alert("Payment failed. Please try again.");
    });
    rzp.open();
  };

  return (
    <div className="min-h-[60vh] w-full flex items-start md:items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">Payment</h1>

        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 overflow-hidden">
          <div className="p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-4">
              <img src={imageUrl} alt={name} className="h-16 w-24 object-cover rounded-md" />
              <div>
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-sm text-gray-600">{nights} nights · ₹{price} per person</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="rounded-xl border border-gray-300 px-4 py-3 text-left hover:border-green-500 hover:bg-green-50">
                <div className="text-sm font-medium">UPI</div>
                <div className="text-xs text-gray-600">GPay, PhonePe, Paytm</div>
              </button>
              <button className="rounded-xl border border-gray-300 px-4 py-3 text-left hover:border-green-500 hover:bg-green-50">
                <div className="text-sm font-medium">Credit/Debit Card</div>
                <div className="text-xs text-gray-600">Visa, MasterCard, RuPay</div>
              </button>
              <button className="rounded-xl border border-gray-300 px-4 py-3 text-left hover:border-green-500 hover:bg-green-50">
                <div className="text-sm font-medium">Net Banking</div>
                <div className="text-xs text-gray-600">All major banks</div>
              </button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePayNow}
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-5 py-3 font-medium shadow-sm"
              >
                Pay Now
              </button>
              <button
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 px-5 py-3 font-medium"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

