
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImExit, TbLogin, IoCreate } from 'react-icons/fa';
import { MdDashboard, MdContactSupport } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { useUser } from '../context/UserContext';
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { user, setUser } = useUser();
  const [menu, showMenu] = useState(false);
  const navigate = useNavigate();

  const handleOnLogout = () => {
    localStorage.removeItem("accessJWT");
    setUser({});
    showMenu(false);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
            onClick={handleClick}
          >
            <img 
              src="/bank.png" 
              alt="logo" 
              className="h-10 w-auto" 
            />
            <span className="text-lg font-semibold">Finance Tracker</span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => showMenu(!menu)}
            >
              {menu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user?._id ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  onClick={() => showMenu(false)}
                >
                  <MdDashboard /> Dashboard
                </Link>
                <Link 
                  to="/transaction"
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/90 transition-colors" 
                  onClick={() => showMenu(false)}
                >
                  <GrTransaction /> Transaction
                </Link>
                <Link 
                  to="/contact"
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  onClick={() => showMenu(false)}
                >
                  <MdContactSupport /> Contact Us
                </Link>
                <Button 
                  variant="destructive" 
                  onClick={handleOnLogout}
                  className="flex items-center gap-2"
                >
                  <ImExit /> Logout
                </Button>
              </>
            ) : (
              <>
                <Link 
                  to="/"
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  onClick={() => showMenu(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/contact"
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  onClick={() => showMenu(false)}
                >
                  Contact Us
                </Link>
                <Link to="/login">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <TbLogin /> Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="secondary" className="flex items-center gap-2">
                    <IoCreate /> Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {user?._id ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="block px-3 py-2 rounded-md hover:bg-primary/90"
                    onClick={() => showMenu(false)}
                  >
                    <MdDashboard /> Dashboard
                  </Link>
                  <Link 
                    to="/transaction"
                    className="block px-3 py-2 rounded-md hover:bg-primary/90" 
                    onClick={() => showMenu(false)}
                  >
                    <GrTransaction /> Transaction
                  </Link>
                  <Link 
                    to="/contact"
                    className="block px-3 py-2 rounded-md hover:bg-primary/90"
                    onClick={() => showMenu(false)}
                  >
                    <MdContactSupport /> Contact Us
                  </Link>
                  <Button 
                    variant="destructive" 
                    onClick={handleOnLogout}
                    className="w-full"
                  >
                    <ImExit /> Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link 
                    to="/"
                    className="block px-3 py-2 rounded-md hover:bg-primary/90"
                    onClick={() => showMenu(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/contact"
                    className="block px-3 py-2 rounded-md hover:bg-primary/90"
                    onClick={() => showMenu(false)}
                  >
                    Contact Us
                  </Link>
                  <Link to="/login">
                    <Button variant="ghost" className="w-full">
                      <TbLogin /> Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="secondary" className="w-full">
                      <IoCreate /> Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
