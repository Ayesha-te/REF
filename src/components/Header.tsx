import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Zap, User, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Income Plans', path: '/income-plans' },
    { name: 'E-Commerce', path: '/ecommerce' },
    { name: 'Token', path: '/token' },
    { name: 'Global Pool', path: '/global-pool' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-800/20 bg-slate-900/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="h-8 w-8 text-cyan-400" />
              <div className="absolute inset-0 h-8 w-8 bg-cyan-400/20 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              BizChain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/my-orders')}
              className="border-purple-600 text-purple-300 hover:bg-purple-600/20"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Orders
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/dashboard')}
              className="border-cyan-600 text-cyan-300 hover:bg-cyan-600/20"
            >
              <User className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button
              size="sm"
              onClick={() => navigate('/auth')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-slate-900 border-purple-800/20">
              <div className="flex flex-col space-y-6 pt-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-6">
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigate('/my-orders');
                      setIsOpen(false);
                    }}
                    className="border-purple-600 text-purple-300 hover:bg-purple-600/20 justify-start"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    My Orders
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigate('/dashboard');
                      setIsOpen(false);
                    }}
                    className="border-cyan-600 text-cyan-300 hover:bg-cyan-600/20 justify-start"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button
                    onClick={() => {
                      navigate('/auth');
                      setIsOpen(false);
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;