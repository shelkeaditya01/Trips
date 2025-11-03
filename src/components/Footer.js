const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-gray-900 font-semibold">TripNest</div>
            <p className="mt-2 text-gray-600">Discover and book memorable journeys.</p>
          </div>
          <div>
            <div className="text-gray-900 font-semibold">Company</div>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a className="hover:text-gray-900" href="#">About</a></li>
              <li><a className="hover:text-gray-900" href="#">Careers</a></li>
              <li><a className="hover:text-gray-900" href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="text-gray-900 font-semibold">Support</div>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a className="hover:text-gray-900" href="#">Contact</a></li>
              <li><a className="hover:text-gray-900" href="#">Help Center</a></li>
              <li><a className="hover:text-gray-900" href="#">Cancellations</a></li>
            </ul>
          </div>
          <div>
            <div className="text-gray-900 font-semibold">Legal</div>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a className="hover:text-gray-900" href="#">Terms</a></li>
              <li><a className="hover:text-gray-900" href="#">Privacy</a></li>
              <li><a className="hover:text-gray-900" href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} TripNest. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex gap-4">
            <a className="hover:text-gray-700" href="#">Twitter</a>
            <a className="hover:text-gray-700" href="#">Instagram</a>
            <a className="hover:text-gray-700" href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


