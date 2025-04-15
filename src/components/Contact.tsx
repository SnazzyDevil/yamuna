
import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '../components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for contacting us!",
        description: "We've received your message and will get back to you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Us</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Need plumbing services or have questions? Reach out to Yamuna Plumbing Services today. We're here to help with all your plumbing needs in Durban and surrounding areas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Your name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="contact-input"
                >
                  <option value="">Select a service</option>
                  <option value="Emergency Plumbing">Emergency Plumbing</option>
                  <option value="Leak Detection & Repair">Leak Detection & Repair</option>
                  <option value="Drain Clearing">Drain Clearing</option>
                  <option value="Geyser Installation & Repair">Geyser Installation & Repair</option>
                  <option value="Bathroom & Kitchen Plumbing">Bathroom & Kitchen Plumbing</option>
                  <option value="Commercial Plumbing">Commercial Plumbing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="contact-input"
                  placeholder="Please provide details about your plumbing needs"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-yamuna-orange hover:bg-yamuna-orange/90 py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="bg-yamuna-blue text-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:0640484622" className="text-blue-100 hover:text-white">064 048 4622</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:info@yamuna.co.za" className="text-blue-100 hover:text-white">info@yamuna.co.za</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-4 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium mb-1">Hours of Operation</p>
                    <p className="text-blue-100">Monday - Friday: 8:00am - 5:00pm</p>
                    <p className="text-blue-100">24/7 Emergency Service Available</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium mb-1">Service Area</p>
                    <p className="text-blue-100">Durban and surrounding areas</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center">
                <a 
                  href="https://wa.me/27640484622" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Our Service Area</h3>
              <div className="rounded-lg overflow-hidden h-72 w-full">
                <iframe
                  title="Yamuna Plumbing Services Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114441.58288339806!2d30.913835923135323!3d-29.858760022406373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa0001bc61b7%3A0x13ae5ddb4c8befc5!2sDurban%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1681812345678!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
