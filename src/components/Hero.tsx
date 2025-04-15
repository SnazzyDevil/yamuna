import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-20 md:pt-0 relative">
      <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left Side (Text) */}
        <div className="md:w-1/2 flex flex-col justify-center section-padding">
          <div className="flex flex-col gap-4 max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Quality Plumbing <span className="text-yamuna-blue">Repairs & Solutions</span> Guaranteed
            </h1>
            
            <p className="text-lg text-gray-700 mt-2 mb-6 max-w-lg">
              Fixing a leaky pipe or installing new plumbing fixtures,
              our team of skilled plumbers is here to ensure your home's plumbing works seamlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="text-yamuna-blue" size={20} />
                <span>Durban & Surrounding Areas</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="text-yamuna-blue" size={20} />
                <span>8:00am - 5:00pm</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#contact">
                <Button className="bg-yamuna-orange hover:bg-yamuna-orange/90 text-white px-8 py-6 text-lg">
                  Request a Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a
                href="tel:0640484622"
                className="flex items-center text-yamuna-blue font-bold text-xl"
              >
                <Phone className="mr-2" size={20} />
                064 048 4622
              </a>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-yamuna-blue/20 z-10"></div>
          <div className="h-[50vh] md:h-full w-full">
            <img
              src="/lovable-uploads/e0e4bd62-4be5-4efb-8feb-04e445ce90fb.png"
              alt="Water flowing from a tap"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-yamuna-blue text-white py-3 px-4 text-center">
        <p className="font-medium">
          <span className="font-bold">24/7 Emergency Service Available</span> - Call us now at{' '}
          <a href="tel:0640484622" className="underline font-bold">
            064 048 4622
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
