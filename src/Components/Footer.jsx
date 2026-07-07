// import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1f1a17] text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-10 py-14 grid md:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <h1 className="text-4xl font-bold text-red-500">Zaika</h1>

            <p className="mt-5 leading-7">
              Freshly cooked delicious food delivered to your doorstep with
              love.
            </p>

            <div className="flex gap-4 mt-6">{/* Social Icons */}</div>
          </div>

          {/* Explore */}

          <div>
            <h2 className="text-lg font-bold text-white mb-4">Explore</h2>

            <ul className="space-y-3">
              <li>Home</li>
              <li>Categories</li>
              <li>Popular Dishes</li>
              <li>Today's Special</li>
              <li>Track Order</li>
            </ul>
          </div>

          {/* Support */}

          <div>
            <h2 className="text-lg font-bold text-white mb-4">Support</h2>

            <ul className="space-y-3">
              <li>FAQs</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Support</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h2 className="text-lg font-bold text-white mb-4">Contact</h2>

            <div className="space-y-4">
              <p>📞 +91 98765 43210</p>

              <p>📧 support@zaikafood.in</p>

              <p>📍 Bokaro, Jharkhand</p>

              <p>🕒 10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700" />

        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-10 text-sm text-gray-400">
          <p>© 2026 Zaika. All Rights Reserved.</p>

          <p>Made with ❤️ for Food Lovers</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
