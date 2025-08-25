import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import IncomePlans from './pages/IncomePlans';
import ECommerce from './pages/ECommerce';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import MyOrders from './pages/MyOrders';
import Token from './pages/Token';
import GlobalPool from './pages/GlobalPool';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Contact from './pages/Contact';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/income-plans" element={<IncomePlans />} />
              <Route path="/ecommerce" element={<ECommerce />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/checkout/:id" element={<Checkout />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/token" element={<Token />} />
              <Route path="/global-pool" element={<GlobalPool />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;