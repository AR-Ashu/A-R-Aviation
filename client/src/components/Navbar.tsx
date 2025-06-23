import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer">
            <span className="text-white font-serif text-2xl font-bold" onClick={() => window.scrollTo(0, 0)}>
              AR <span className="text-[#33ccff]">AVIATION</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-[#33ccff] font-medium transition-all">Features</a>
            <a href="#experiences" className="text-white hover:text-[#33ccff] font-medium transition-all">Experiences</a>
            <a href="#faq" className="text-white hover:text-[#33ccff] font-medium transition-all">FAQ</a>
            <a href="#contact" className="text-white hover:text-[#33ccff] font-medium transition-all">Contact</a>
            <div>
              <Button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#33ccff] hover:bg-[#33ccff]/80 text-black font-semibold"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
          
          <button 
            type="button" 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-black/90 rounded-lg mt-2 p-4 animate-in fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-white hover:text-[#33ccff] font-medium transition-all px-2 py-1">Features</a>
              <a href="#experiences" className="text-white hover:text-[#33ccff] font-medium transition-all px-2 py-1">Experiences</a>
              <a href="#faq" className="text-white hover:text-[#33ccff] font-medium transition-all px-2 py-1">FAQ</a>
              <a href="#contact" className="text-white hover:text-[#33ccff] font-medium transition-all px-2 py-1">Contact</a>
              <div>
                <Button 
                  onClick={() => {
                    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="bg-[#33ccff] hover:bg-[#33ccff]/80 text-black w-full font-semibold mt-2"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer">
            <span className="text-white font-serif text-2xl font-bold" onClick={() => window.scrollTo(0, 0)}>
              AR <span className="text-[#33ccff]">AVIATION</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-[#33ccff] font-medium transition-all">Features</a>
            <a href="#experiences" className="text-white hover:text-[#33ccff] font-medium transition-all">Experiences</a>
            <a href="#faq" className="text-white hover:text-[#33ccff] font-medium transition-all">FAQ</a>
            <a href="#contact" className="text-white hover:text-[#33ccff] font-medium transition-all">Contact</a>
            <div>
              <Button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#33ccff] hover:bg-[#33ccff]/80 text-black font-semibold"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
          
          <button 
            type="button" 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-black/90 rounded-lg mt-2 p-4 animate-in fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-white hover:text-[#33ccff] font-medium transition-all px-2 py-1">Features</a>
              <a href="#experiences" className="text-white hover:text-[#33ccff] font-medium transition-all px-2 py-1">Experiences</a>
              <a href="#faq" className="text-white hover:text-[#33ccff] font-medium transition-all px-2 py-1">FAQ</a>
              <a href="#contact" className="text-white hover:text-[#33ccff] font-medium transition-all px-2 py-1">Contact</a>
              <div>
                <Button 
                  onClick={() => {
                    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="bg-[#33ccff] hover:bg-[#33ccff]/80 text-black w-full font-semibold mt-2"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
