import React from "react";

const Toast = () => {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const onToast = (e) => {
      const id = Date.now() + Math.random();
      const toast = { id, message: e.detail?.message || "Saved", type: e.detail?.type || "success" };
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, e.detail?.duration || 2200);
    };
    window.addEventListener("tn_toast", onToast);
    return () => window.removeEventListener("tn_toast", onToast);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] flex items-start justify-center px-4 py-6 sm:items-end sm:justify-end">
      <div className="flex w-full flex-col items-center space-y-2 sm:items-end">
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-2xl ring-1 ring-emerald-200 shadow-lg bg-white">
            <div className="p-4 flex items-start gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</div>
              <div className="flex-1 text-sm text-gray-800">{t.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toast;


