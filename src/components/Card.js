import { useNavigate } from "react-router-dom";

const Card = ({ placeIn }) => {
  const navigate = useNavigate();
  const { name, imageUrl, weatherType, approximateBudget } = placeIn;
  const { nights, price } = approximateBudget;

  const handleBooking = () => {
    navigate("/bookJourney", { state: { placeIn } });
  };

  const handleSave = () => {
    try {
      const raw = localStorage.getItem("tn_bookings");
      const list = raw ? JSON.parse(raw) : [];
      const exists = list.some((x) => x.name === name && x.imageUrl === imageUrl);
      const next = exists ? list : [{ ...placeIn }, ...list].slice(0, 50);
      localStorage.setItem("tn_bookings", JSON.stringify(next));
      window.dispatchEvent(new Event("tn_bookings_updated"));
      window.dispatchEvent(new CustomEvent("tn_toast", { detail: { message: "Saved to My bookings" } }));
    } catch {}
  };

  return (
    <div className="group bg-white rounded-3xl shadow-sm ring-1 ring-gray-200 overflow-hidden transition hover:shadow-md hover:-translate-y-0.5">
      <div className="relative">
        <img className="w-full h-44 sm:h-48 object-cover" src={imageUrl} alt={name} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
        <div className="absolute top-3 right-3 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
          ₹{price}
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-lg leading-snug line-clamp-1">{name}</h4>
        <div className="mt-2 flex flex-wrap gap-2 min-h-[28px]">
          {weatherType.slice(0,3).map((w) => (
            <span key={w} className="inline-flex items-center rounded-full bg-green-50 text-green-700 ring-1 ring-inset ring-green-200 px-2.5 py-0.5 text-xs font-medium">{w}</span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
          <span>{nights} nights</span>
          <span className="hidden sm:inline">Per person</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={handleSave}
            className="inline-flex justify-center items-center rounded-xl bg-white text-emerald-800 ring-1 ring-inset ring-emerald-300 hover:bg-emerald-50 px-4 py-2.5 font-medium shadow-sm"
          >
            Save
          </button>
          <button
            onClick={handleBooking}
            className="inline-flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 font-medium shadow-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
