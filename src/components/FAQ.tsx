
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
};

const FAQItem = ({ question, answer, isOpen, toggle }: FAQItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="flex justify-between items-center w-full text-left p-4 focus:outline-none"
        onClick={toggle}
      >
        <span className="font-semibold text-lg">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isOpen && (
        <div className="p-4 pt-0 text-gray-600 border-t border-gray-200">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How quickly can you respond to an emergency?',
      answer: 'We offer 24/7 emergency services and typically arrive within 1-2 hours for urgent situations in the Durban area. Our team is always ready to respond to plumbing emergencies to prevent further damage to your property.'
    },
    {
      question: 'Do you provide free quotes?',
      answer: 'Yes, we provide free, no-obligation quotes for all plumbing services. Our technician will assess the situation, explain the required work, and provide a detailed quote before any work begins.'
    },
    {
      question: 'Are your plumbers licensed and insured?',
      answer: "Absolutely. All our plumbers are fully licensed, certified, and insured. We maintain comprehensive liability insurance and workers' compensation coverage for your peace of mind."
    },
    {
      question: 'Do you offer any guarantees on your work?',
      answer: 'Yes, we stand behind our workmanship with a satisfaction guarantee. Additionally, we offer warranties on all parts and labor, with specific timeframes varying by the type of service provided.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including cash, credit/debit cards, EFT, and mobile payment options for your convenience. Payment plans may be available for larger projects.'
    },
    {
      question: 'How can I tell if I have a water leak?',
      answer: 'Signs of a water leak include unexplained increases in water bills, water meter movement when all fixtures are off, damp spots on walls or floors, mold growth, and the sound of running water when no fixtures are in use. If you suspect a leak, contact us for professional leak detection.'
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Find answers to common questions about our plumbing services. If you don't see your question here, please contact us directly.
        </p>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
