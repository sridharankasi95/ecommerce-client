const Footer = () => {
  return (
    <footer className="bg-primary-hover text-white mt-10">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-6">
              We provide high quality products with the best price and fast delivery.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">Shop</li>
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">Email: support@example.com</p>
            <p className="text-sm">Phone: +91 9876543210</p>
          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20 text-center py-4 text-sm">
        © {new Date().getFullYear()} YourStore. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
