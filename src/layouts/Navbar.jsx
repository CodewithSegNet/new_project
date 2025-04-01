import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"; // Replace with your logo path
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);  // Initially visible
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    // Function to handle scroll behavior
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setShowNavbar(false);
      } else {
        // If scrolling up, show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);  // Update the last scroll position
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Dependency array includes lastScrollY to re-run effect when it changes

  return (
    <nav className={`fixed left-0 w-full z-50 mt-[1rem] h-[98.18px] transition-all duration-300 ${showNavbar ? "top-0" : "-top-[130.18px]"}`}>
      <div className="max-w-screen-2xl mx-auto px-6 h-[98.18px] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={Logo} alt="Paul Smith Initiative" className="h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:mr-[1rem] xl:mr-[1.8rem]">
          <Link to="/what-we-do" className="text-gray-700 py-[8px] px-[24px] leading-[24px] bg-[#ffffff] rounded-[90px] text-[12px] hover:text-white hover:bg-primary font-bold transition-all duration-100">
            What We Do
          </Link>
          <Link to="/our-initiative" className="text-gray-700 py-[8px] px-[24px] leading-[24px] bg-[#ffffff] rounded-[90px] text-[12px] hover:text-white hover:bg-primary font-bold transition-all duration-100">
            Our Initiative
          </Link>
          <Link to="/community" className="text-gray-700 py-[8px] px-[24px] leading-[24px] bg-[#ffffff] rounded-[90px] text-[12px] hover:text-white hover:bg-primary font-bold transition-all duration-100">
            Community
          </Link>
          <Link to="/donate" className="py-[11px] px-[24px] leading-[24px] bg-primary rounded-[90px] text-[12px] hover:text-black font-bold text-sm hover:bg-[#ffffff] text-white transition-all duration-100">
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link to="/what-we-do" className="text-gray-700 hover:text-green-600 font-medium">
              What We Do
            </Link>
            <Link to="/our-initiative" className="text-gray-700 hover:text-green-600 font-medium">
              Our Initiative
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-green-600 font-medium">
              Community
            </Link>
            <Link to="/donate" className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700">
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
