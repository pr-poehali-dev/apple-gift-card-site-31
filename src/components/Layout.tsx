
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-semibold text-black">
              Apple Gift Cards
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === "/" 
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Главная
              </Link>
              <Link 
                to="/cards" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === "/cards" 
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Карты
              </Link>
              <Link 
                to="/instructions" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === "/instructions" 
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Инструкция
              </Link>
            </nav>
            <div className="md:hidden">
              {/* Mobile menu button */}
              <button className="text-gray-500 hover:text-black">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Apple Gift Cards. Все права защищены.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Apple, логотип Apple и другие торговые марки Apple являются собственностью Apple Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
