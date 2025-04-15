
import { Award, ThumbsUp, BadgeCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                alt="Yamuna Plumbing Team"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
                <span className="text-3xl font-bold text-yamuna-blue">15+</span>
                <span className="text-gray-600">Years of<br />Experience</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About <span className="text-yamuna-blue">Yamuna Plumbing Services</span>
            </h2>
            
            <p className="text-gray-700 mb-6">
              Founded with a passion for excellence, Yamuna Plumbing Services has been providing top-quality plumbing solutions to Durban and surrounding areas for over 15 years. Our commitment to quality workmanship, reliability, and customer satisfaction has established us as a trusted name in the plumbing industry.
            </p>
            
            <p className="text-gray-700 mb-8">
              Our team consists of highly skilled, licensed plumbers with extensive experience in both residential and commercial plumbing services. We take pride in our prompt response times, transparent pricing, and the lasting quality of our work.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Award className="text-yamuna-blue mb-2" size={36} />
                <span className="font-semibold text-gray-900">Licensed & Insured</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <ThumbsUp className="text-yamuna-blue mb-2" size={36} />
                <span className="font-semibold text-gray-900">Customer Satisfaction</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <BadgeCheck className="text-yamuna-blue mb-2" size={36} />
                <span className="font-semibold text-gray-900">Quality Guaranteed</span>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-yamuna-blue pl-4 italic text-gray-600">
              "Our mission is simple: To provide reliable, high-quality plumbing services that solve our customers' problems efficiently and effectively."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
