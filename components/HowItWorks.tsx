
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { number: '01', text: 'Check the app for the nearest station' },
    { number: '02', text: 'Withdraw your umbrella' },
    { number: '03', text: 'Protect yourself from the rain and sun' },
    { number: '04', text: 'Return it to any Rentbrella station' },
  ];

  const images = [
    'https://images.unsplash.com/photo-1517498771946-27825b45a043?q=80&w=1887&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558282717-7151045a47a1?q=80&w=1887&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1621003887962-d2c65a0b6748?q=80&w=1887&auto=format&fit=crop',
  ];

  return (
    <section className="bg-brand-dark text-white py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center tracking-wider">
          HOW IT WORKS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20 text-center lg:text-left">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-4">
              <div className="text-3xl font-bold text-brand-purple-light">{step.number}</div>
              <p className="text-lg text-gray-300 pt-1">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
                <div key={index} className="aspect-w-3 aspect-h-4">
                    <img src={src} alt={`How it works step ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
