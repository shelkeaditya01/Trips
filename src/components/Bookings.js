import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem("tn_bookings");
      setBookings(raw ? JSON.parse(raw) : []);
    } catch {
      setBookings([]);
    }
  }, []);

  const removeBooking = (idx) => {
    const next = bookings.filter((_, i) => i !== idx);
    setBookings(next);
    localStorage.setItem("tn_bookings", JSON.stringify(next));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">My bookings</h1>
          <p className="mt-1 text-sm text-gray-600">Saved trips you can revisit anytime.</p>
        </div>
        {bookings.length > 0 && (
          <button onClick={() => navigate('/')} className="hidden sm:inline-flex rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-medium shadow-sm">Explore more</button>
        )}
      </div>

      <div className="mt-6 border-b border-gray-200">
        <nav className="-mb-px flex gap-6" aria-label="Tabs">
          <span className="whitespace-nowrap border-b-2 border-emerald-600 px-1 pb-2 text-sm font-medium text-emerald-700">Saved ({bookings.length})</span>
        </nav>
      </div>

      {bookings.length === 0 && (
        <div className="mt-10 flex items-center justify-center">
          <div className="text-center bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm p-8 max-w-md">
            <div className="mx-auto h-28 w-28">
              <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <circle cx="60" cy="60" r="56" fill="#ecfdf5" stroke="#a7f3d0" />
                <path d="M40 80c8-10 18-16 22-18l18-8-8 18c-2 4-8 14-18 22-7 6-18 4-24-2s-8-17 2-24z" fill="#10b981" opacity="0.9"/>
                <circle cx="75" cy="42" r="8" fill="#34d399" />
              </svg>
            </div>
            <div className="mt-4 text-2xl font-semibold">No saved bookings</div>
            <div className="mt-2 text-gray-600 text-sm">Save a destination and it will show up here.</div>
            <button onClick={() => navigate('/')} className="mt-5 inline-flex justify-center items-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-sm font-medium shadow-sm">Find trips</button>
          </div>
        </div>
      )}

      {bookings.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((b, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
              <img src={b.imageUrl} alt={b.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold line-clamp-1">{b.name}</div>
                    <div className="mt-1 text-sm text-gray-600">{b.approximateBudget?.nights} nights · ₹{b.approximateBudget?.price}</div>
                  </div>
                  <button onClick={() => removeBooking(idx)} className="text-xs rounded-lg px-2 py-1 ring-1 ring-red-200 text-red-700 hover:bg-red-50">Remove</button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(b.weatherType || []).slice(0,3).map((w) => (
                    <span key={w} className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200 px-2.5 py-0.5 text-xs font-medium">{w}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;


