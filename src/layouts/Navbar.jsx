import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsScrolled(currentScrollY > 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

 
  
  return (
    <nav
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? "top-0" : "-top-[130.18px]"
      } ${
        isScrolled
          ? "h-[70px] bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md shadow-md"
          : "h-[98.18px]"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 h-full flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img
            src={Logo}
            alt="Paul Smith Initiative"
            className={`transition-all duration-300 ${
              isScrolled ? "h-[40px] pt-0" : "h-[66px] lg:h-[98.18px] pt-2"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:pr-[1.8rem] 2xl:pr-[5rem]">
          <Link
            to="/what-we-do"
            className="text-secondary py-[8px] px-[24px] leading-[24px] bg-regular rounded-[90px] text-[12px] hover:text-white hover:bg-primary font-bold transition-all duration-100"
          >
            What We Do
          </Link>
          <Link
            to="/our-initiative"
            className="text-secondary py-[8px] px-[24px] leading-[24px] bg-regular rounded-[90px] text-[12px] hover:text-white hover:bg-primary font-bold transition-all duration-100"
          >
            Our Initiative
          </Link>
          <Link
            to="/community"
            className="text-secondary py-[8px] px-[24px] leading-[24px] bg-regular rounded-[90px] text-[12px] hover:text-white hover:bg-primary font-bold transition-all duration-100"
          >
            Community
          </Link>
          <Link
            to="/donate"
            className="py-[11px] px-[24px] leading-[24px] bg-primary rounded-[90px] text-[12px] font-bold text-sm hover:bg-regular text-white transition-all duration-100"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu from the Left */}
      <div
  className={`md:hidden fixed top-0 left-0 h-screen w-3/4 z-[60] bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md shadow-md transform transition-transform duration-300 ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
<Link to="/" className="text-2xl font-bold flex justify-center items-center">
          <img
            src={Logo}
            alt="Paul Smith Initiative"
            className={`transition-all my-5 pduration-300 ${
              isScrolled ? "h-[40px] pt-0" : "h-[66px] lg:h-[98.18px] pt-2"
            }`}
          />
        </Link>

        <div className="flex flex-col items-center gap-6 py-10">
          <Link
            to="/what-we-do"
            className="text-secondary py-[8px] px-[24px] leading-[24px] bg-regular rounded-[90px] text-[12px] hover:text-white hover:bg-primary font-bold transition-all duration-100"
            onClick={() => setMenuOpen(false)}
          >
            What We Do
          </Link>
          <Link
            to="/our-initiative"
            className="text-secondary py-[8px] px-[24px] leading-[24px] bg-regular rounded-[90px] text-[12px] hover:text-white hover:bg-primary font-bold transition-all duration-100"
            onClick={() => setMenuOpen(false)}
          >
            Our Initiative
          </Link>
          <Link
            to="/community"
            className="text-secondary py-[8px] px-[24px] leading-[24px] bg-regular rounded-[90px] text-[12px] hover:text-white hover:bg-primary font-bold transition-all duration-100"
            onClick={() => setMenuOpen(false)}
          >
            Community
          </Link>
          <Link
            to="/donate"
            className="py-[11px] px-[34px] leading-[24px] bg-primary rounded-[90px] text-[12px] font-bold text-sm hover:bg-regular text-white transition-all duration-100"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
