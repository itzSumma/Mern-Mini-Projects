const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-16 mt-10">

      <div className="max-w-7xl mx-auto">

        {/* BRAND */}
        <div className="mb-14 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-semibold text-white">
            Wanderlust
          </h1>

          <p className="mt-4 max-w-xl text-gray-400">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white mb-4 tracking-widest text-sm">
              NEWSLETTER
            </h3>

            <p className="mb-4 text-sm text-gray-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="flex items-center bg-white/10 border border-white/10 px-4 py-3 rounded-full">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-gray-500"
              />
              <span className="text-white text-lg cursor-pointer hover:scale-110 transition">
                ↗
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white mb-4 tracking-widest text-sm">
              QUICK LINKS
            </h3>

            <ul className="space-y-3">
              {["Home", "Destinations", "My Bookings", "Profile"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white mb-4 tracking-widest text-sm">
              SUPPORT
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer transition">
                Help Center
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white mb-4 tracking-widest text-sm">
              CONTACT
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                786 901 1622
              </li>
              <li className="hover:text-white transition cursor-pointer">
                info@wanderlust.com
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-500">
            © 2026 Wanderlust. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-white text-lg">
            <span className="cursor-pointer hover:scale-110 transition">
              X
            </span>
            <span className="cursor-pointer hover:scale-110 transition">
              in
            </span>
            <span className="cursor-pointer hover:scale-110 transition">
              ◎
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;