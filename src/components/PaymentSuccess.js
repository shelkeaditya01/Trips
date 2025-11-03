import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentId } = location.state || {};

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-10 text-center">
        <h1 className="text-3xl font-semibold">Payment Successful</h1>
        <p className="mt-2 text-gray-600">Thank you! Your booking has been confirmed.</p>
        {paymentId && (
          <div className="mt-4 text-sm text-gray-700">Transaction ID: <span className="font-mono">{paymentId}</span></div>
        )}
        <div className="mt-8 flex gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-5 py-3 font-medium shadow-sm"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex justify-center items-center rounded-xl bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 px-5 py-3 font-medium"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

