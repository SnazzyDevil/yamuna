
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yamuna-orange"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Yamuna Plumbing Services provides professional plumbing solutions at competitive rates for both residential and commercial clients in Durban and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yamuna-orange">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yamuna-orange">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yamuna-orange"></span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-yamuna-orange transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yamuna-orange transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-yamuna-orange transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-yamuna-orange transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-yamuna-orange transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yamuna-orange transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yamuna-orange"></span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-yamuna-orange transition-colors">Emergency Plumbing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yamuna-orange transition-colors">Leak Detection & Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yamuna-orange transition-colors">Drain Clearing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yamuna-orange transition-colors">Geyser Installation & Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yamuna-orange transition-colors">Bathroom & Kitchen Plumbing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yamuna-orange transition-colors">Commercial Plumbing</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yamuna-orange"></span>
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <Phone className="mr-3 shrink-0 mt-1 text-yamuna-orange" size={18} />
                <div>
                  <span className="block text-white">Phone</span>
                  <a href="tel:0640484622" className="hover:text-yamuna-orange transition-colors">
                    064 048 4622
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 shrink-0 mt-1 text-yamuna-orange" size={18} />
                <div>
                  <span className="block text-white">Email</span>
                  <a href="mailto:info@yamuna.co.za" className="hover:text-yamuna-orange transition-colors">
                    info@yamuna.co.za
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 shrink-0 mt-1 text-yamuna-orange" size={18} />
                <div>
                  <span className="block text-white">Location</span>
                  <span>Durban, South Africa</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 shrink-0 mt-1 text-yamuna-orange" size={18} />
                <div>
                  <span className="block text-white">Hours</span>
                  <span>Mon-Fri: 8:00am - 5:00pm</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <div className="mb-4">
            <a href="#" className="hover:text-yamuna-orange transition-colors mx-3">Privacy Policy</a>
            <a href="#" className="hover:text-yamuna-orange transition-colors mx-3">Terms of Service</a>
          </div>
          <p>
            &copy; {currentYear} Yamuna Plumbing Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
