
import { Clock, DollarSign, UserCheck, Wrench, ShieldCheck, Truck } from 'lucide-react';

const WhyChooseItem = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => {
  return (
    <div className="why-choose-item">
      <div className="text-yamuna-orange shrink-0">
        <Icon size={32} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: '24/7 Emergency Service',
      description: 'We're available around the clock for emergency plumbing issues to prevent further damage to your property.',
      icon: Clock
    },
    {
      title: 'Competitive Pricing',
      description: 'Transparent, upfront pricing with no hidden fees. We provide detailed quotes before beginning any work.',
      icon: DollarSign
    },
    {
      title: 'Experienced Professionals',
      description: 'Our licensed plumbers have years of experience handling all types of plumbing issues with expertise.',
      icon: UserCheck
    },
    {
      title: 'Quality Workmanship',
      description: 'We use only high-quality materials and industry-best practices for lasting, reliable results.',
      icon: Wrench
    },
    {
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our work with a 100% satisfaction guarantee on all services performed.',
      icon: ShieldCheck
    },
    {
      title: 'Fast Response',
      description: 'Our team responds quickly to service calls, ensuring minimal disruption to your home or business.',
      icon: Truck
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Yamuna Plumbing Services is committed to providing outstanding service that exceeds expectations. Here's why customers throughout Durban trust us with their plumbing needs:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <WhyChooseItem
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
