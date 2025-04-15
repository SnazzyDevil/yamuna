import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <div className="text-2xl font-bold text-yamuna-blue">
            <span className="text-yamuna-blue">Yamuna</span> 
            <span className="text-yamuna-blue-light">Plumbing</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link text-yamuna-orange"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a 
            href="tel:0640484622" 
            className="flex items-center gap-2 text-yamuna-blue font-semibold mr-6"
          >
            <Phone size={20} />
            064 048 4622
          </a>
          <a href="#contact">
            <Button className="bg-yamuna-orange hover:bg-yamuna-orange/90">
              Get a Quote
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yamuna-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md py-4 px-4 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-yamuna-orange hover:text-yamuna-orange/80 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:0640484622" 
              className="flex items-center gap-2 text-yamuna-blue font-semibold py-2"
            >
              <Phone size={20} />
              064 048 4622
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}

      {/* Floating Call Button (Mobile) */}
      <a
        href="tel:0640484622"
        className="md:hidden fixed bottom-6 right-6 bg-yamuna-orange text-white p-4 rounded-full shadow-lg z-50 animate-pulse-slow"
      >
        <Phone />
      </a>
    </header>
  );
};

export default Navbar;
