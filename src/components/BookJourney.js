import { useLocation, useNavigate } from "react-router-dom";

const BookJourney = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { placeIn } = location.state || {};

  if (!placeIn) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold">No booking selected</h2>
          <p className="mt-2 text-gray-600">Please choose a destination to view details.</p>
        </div>
      </div>
    );
  }

  const { name, imageUrl, weatherType, approximateBudget } = placeIn;
  const { nights, price } = approximateBudget;

  return (
    <div className="min-h-[60vh] w-full flex items-start md:items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">Booking Details</h1>

        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 overflow-hidden">
          <div className="md:grid md:grid-cols-5">
            <div className="md:col-span-2 relative">
              <img
                src={imageUrl}
                alt={name}
                className="h-56 w-full md:h-full object-cover"
              />
            </div>

            <div className="md:col-span-3 p-5 sm:p-6 md:p-8">
              <div className="flex flex-wrap items-start gap-3 justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">{name}</h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {weatherType.map((w) => (
                      <span
                        key={w}
                        className="inline-flex items-center rounded-full bg-green-50 text-green-700 ring-1 ring-inset ring-green-200 px-3 py-1 text-xs font-medium"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-left md:text-right mt-4 md:mt-0">
                  <div className="text-sm text-gray-500">Starting at</div>
                  <div className="text-2xl md:text-3xl font-semibold">₹{price}</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-xs text-gray-500">Duration</div>
                  <div className="mt-1 text-base font-medium">{nights} nights</div>
                </div>

                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-xs text-gray-500">Weather</div>
                  <div className="mt-1 text-base font-medium truncate">{weatherType.join(", ")}</div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/confirm-booking", { state: { placeIn } })}
                  className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-5 py-3 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Confirm Booking
                </button>
                <button
                  onClick={() => {
                    try {
                      const raw = localStorage.getItem("tn_bookings");
                      const list = raw ? JSON.parse(raw) : [];
                      const exists = list.some((x) => x.name === name && x.imageUrl === imageUrl);
                      const next = exists ? list : [{ ...placeIn }, ...list].slice(0, 50);
                      localStorage.setItem("tn_bookings", JSON.stringify(next));
                      window.dispatchEvent(new Event("tn_bookings_updated"));
                      window.dispatchEvent(new CustomEvent("tn_toast", { detail: { message: "Saved to My bookings" } }));
                      if (window.innerWidth < 640) {
                        setTimeout(() => navigate("/bookings"), 300);
                      }
                    } catch {}
                  }}
                  className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 px-5 py-3 font-medium"
                >
                  Save for later
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
    </div>
  );
};

export default BookJourney;
