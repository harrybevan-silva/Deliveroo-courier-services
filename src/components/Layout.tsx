import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Package, MapPin, Truck, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/src/lib/utils";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "For Business", href: "/business" },
    { name: "Become a Rider", href: "/rider" },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Package className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Deliveroo<span className="text-primary-600">.ke</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  location.pathname === item.href
                    ? "text-primary-600"
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/track">
              <Button variant="ghost" className="text-sm font-medium">Track Order</Button>
            </Link>
            <Link to="/book">
              <Button>Book Delivery</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6 text-gray-900" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 text-gray-900" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-gray-100 bg-white absolute w-full px-4 pt-2 pb-6 shadow-lg">
            <div className="space-y-1 pb-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium",
                    location.pathname === item.href
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
               <Link to="/track" onClick={closeMenu}>
                <Button variant="outline" className="w-full justify-center">Track Order</Button>
              </Link>
              <Link to="/book" onClick={closeMenu}>
                <Button className="w-full justify-center">Book Delivery</Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <Package className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Deliveroo<span className="text-primary-600">.ke</span>
                </span>
              </Link>
              <p className="border-l-2 border-primary-600 pl-4 text-sm text-gray-400">
                Fast, reliable, and affordable delivery across Nairobi. Send packages, food, and goods in minutes.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li><Link to="/about" className="text-sm hover:text-white">About Us</Link></li>
                    <li><Link to="/contact" className="text-sm hover:text-white">Contact</Link></li>
                    <li><Link to="/faq" className="text-sm hover:text-white">FAQ</Link></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white">Services</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li><Link to="/book" className="text-sm hover:text-white">Same-day Delivery</Link></li>
                    <li><Link to="/business" className="text-sm hover:text-white">For Business</Link></li>
                    <li><Link to="/rider" className="text-sm hover:text-white">Become a Rider</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Deliveroo Courier and Services Kenya. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-xs">Privacy Policy</Link>
              <Link to="#" className="text-gray-400 hover:text-white text-xs">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
