import { Link } from 'react-router-dom';
import { Zap, Mail, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-purple-800/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BizChain
              </span>
            </Link>
            <p className="text-slate-400 text-sm">
              Next Generation Technology – Earn Daily, Refer Globally. Join the future of decentralized network marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Income Plans', 'E-Commerce', 'Token'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Platform</h3>
            <ul className="space-y-2">
              {['Dashboard', 'Global Pool', 'My Orders', 'Join Now'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:support@bizchain.com"
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>support@bizchain.com</span>
              </a>
              <a
                href="https://t.me/bizchain"
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Telegram</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-800/20 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 BizChain. All rights reserved. | Built on blockchain technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;