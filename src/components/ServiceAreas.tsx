
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    'Durban Central',
    'Berea',
    'Morningside',
    'Musgrave',
    'Glenwood',
    'Westville',
    'Umhlanga',
    'Pinetown',
    'Ballito',
    'Phoenix',
    'Chatsworth',
    'Amanzimtoti',
    'Umdloti',
    'La Lucia',
    'Hillcrest'
  ];

  return (
    <section id="service-areas" className="section-padding bg-yamuna-blue text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Areas</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-blue-100">
          Yamuna Plumbing Services proudly serves Durban and surrounding areas. Our team of expert plumbers is ready to assist you with all your plumbing needs throughout:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <MapPin size={20} className="text-yamuna-orange mr-2" />
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Don't see your area?</h3>
          <p className="text-center">
            We serve many other areas in and around Durban. Please give us a call at{' '}
            <a href="tel:0640484622" className="font-bold underline">
              064 048 4622
            </a>{' '}
            to inquire about service availability in your specific location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
