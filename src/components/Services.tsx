
import { Wrench, Droplet, SearchCheck, PlugZap, Bath, Building, ScanLine, Pipeline, ShowerHead } from 'lucide-react';
import { Button } from './ui/button';

const ServiceCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => {
  return (
    <div className="service-card group">
      <div className="mb-4 text-yamuna-blue group-hover:text-yamuna-orange transition-colors duration-300">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Emergency Plumbing',
      description: 'Available 24/7 for urgent plumbing issues to prevent property damage and restore services quickly.',
      icon: Wrench
    },
    {
      title: 'Leak Detection & Repair',
      description: 'Advanced techniques to locate and fix hidden leaks, preventing water damage and reducing bills.',
      icon: Droplet
    },
    {
      title: 'Drain Clearing',
      description: 'Professional drain cleaning services to remove blockages and prevent future clogs.',
      icon: SearchCheck
    },
    {
      title: 'Geyser Installation & Repair',
      description: 'Expert installation, repair, and maintenance of water heaters for optimal efficiency.',
      icon: PlugZap
    },
    {
      title: 'Bathroom & Kitchen Plumbing',
      description: 'From fixture installations to repairs, we handle all your bathroom and kitchen plumbing needs.',
      icon: Bath
    },
    {
      title: 'Commercial Plumbing',
      description: 'Specialized plumbing solutions for businesses, focusing on minimal disruption and maximum reliability.',
      icon: Building
    },
    {
      title: 'Pipe Inspection',
      description: 'Camera inspections to identify issues without invasive procedures, ensuring accurate diagnosis.',
      icon: ScanLine
    },
    {
      title: 'Pipe Relining',
      description: 'Modern, trenchless pipe repair solutions that save time and prevent property damage.',
      icon: Pipeline
    },
    {
      title: 'Fixture Installations',
      description: 'Professional installation of all plumbing fixtures with attention to detail and quality workmanship.',
      icon: ShowerHead
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Our Services</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Yamuna Plumbing Services offers a comprehensive range of plumbing solutions for both residential and commercial clients throughout Durban and surrounding areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact">
            <Button className="bg-yamuna-blue hover:bg-yamuna-blue-dark text-lg">
              Request Service Quote
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
