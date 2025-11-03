import { useLocation, useNavigate, Link } from "react-router-dom";

const ConfirmBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { placeIn } = location.state || {};

  if (!placeIn) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold">No booking data</h2>
          <p className="mt-2 text-gray-600">Please select a destination first.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 inline-flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-5 py-3 font-medium shadow-sm"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const { name, imageUrl, approximateBudget } = placeIn;
  const { price, nights } = approximateBudget;

  return (
    <div className="min-h-[60vh] w-full flex items-start md:items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">Traveler Details</h1>

        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 overflow-hidden">
          <div className="p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-4">
              <img src={imageUrl} alt={name} className="h-16 w-24 object-cover rounded-md" />
              <div>
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-sm text-gray-600">{nights} nights · ₹{price} per person</div>
              </div>
            </div>

            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="ex. Aditya Shelke" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="ex. adishelke10@gmail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="ex. 8007219118" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Travel date</label>
                <input type="date" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
            </form>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/payment"
                state={{ placeIn }}
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-5 py-3 font-medium shadow-sm"
              >
                Proceed to Payment
              </Link>
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

export default ConfirmBooking;

