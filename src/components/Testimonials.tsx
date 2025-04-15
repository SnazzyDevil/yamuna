
import { Star } from 'lucide-react';

type TestimonialProps = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

const TestimonialCard = ({ name, location, rating, quote }: TestimonialProps) => {
  return (
    <div className="testimonial-card">
      <div className="flex mb-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
            />
          ))}
      </div>
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div className="font-semibold">
        {name} <span className="text-gray-500 font-normal">- {location}</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Berea',
      rating: 5,
      quote: 'Yamuna Plumbing quickly resolved our water heater emergency. The plumber was professional, efficient, and explained everything clearly. Great service at a fair price!'
    },
    {
      name: 'John D.',
      location: 'Umhlanga',
      rating: 5,
      quote: 'I've used Yamuna Plumbing Services multiple times for both my home and business. Their team is always punctual, professional, and provides excellent workmanship.'
    },
    {
      name: 'Michael T.',
      location: 'Westville',
      rating: 4,
      quote: 'After struggling with a persistent leak, Yamuna Plumbing diagnosed and fixed the issue that two other companies had missed. Very impressed with their expertise.'
    },
    {
      name: 'Priya K.',
      location: 'Morningside',
      rating: 5,
      quote: 'Fantastic service! They completed a full bathroom renovation, and the quality of work exceeded our expectations. Would highly recommend for any plumbing needs.'
    },
    {
      name: 'Robert L.',
      location: 'Pinetown',
      rating: 5,
      quote: 'Called for an emergency pipe burst at 10 PM, and they arrived within an hour. Saved us from major water damage. Their emergency service is truly 24/7 and reliable.'
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Don't just take our word for it - hear from our satisfied customers throughout Durban who have experienced our quality plumbing services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
