
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "Men's Fashion", path: "/men" },
        { name: "Women's Fashion", path: "/women" },
        { name: "Kids Collection", path: "/children" },
        { name: "Seasonal Wear", path: "/seasonal" },
        { name: "Occasion Wear", path: "/occasions" },
        { name: "New Arrivals", path: "/new-arrivals" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Virtual Try-On", path: "/virtual-try-on" },
        { name: "Custom Design", path: "/custom-design" },
        { name: "Size Guide", path: "/size-guide" },
        { name: "Personal Styling", path: "/personal-styling" },
        { name: "Bulk Orders", path: "/bulk-orders" },
        { name: "Gift Cards", path: "/gift-cards" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Shipping Info", path: "/shipping" },
        { name: "Returns", path: "/returns" },
        { name: "Size Exchange", path: "/size-exchange" },
        { name: "FAQs", path: "/faqs" },
        { name: "Track Order", path: "/track-order" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "Press", path: "/press" },
        { name: "Partnerships", path: "/partnerships" },
        { name: "Blog", path: "/blog" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-white to-slate-300 bg-clip-text text-transparent mb-4">
              SRK Styles
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Revolutionizing fashion with virtual try-on technology and custom design studio. 
              Fashion for every season, every occasion, every you.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">i</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-slate-700 to-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">y</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay in Style</h4>
              <p className="text-gray-300 text-sm">
                Get the latest fashion trends, exclusive offers, and styling tips delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-slate-600 hover:from-blue-600 hover:to-slate-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 SRK Styles. All rights reserved. | Revolutionizing Fashion Technology
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

        {/* Special Features Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600/20 to-slate-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-500/30">
            <span className="text-2xl">✨</span>
            <span className="text-sm font-medium">Powered by AI Virtual Try-On Technology</span>
            <span className="text-2xl">🎨</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
