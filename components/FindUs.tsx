
import React from 'react';

const InnovationCard: React.FC<{imgSrc: string, text: string, source: string}> = ({imgSrc, text, source}) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
        <img src={imgSrc} alt={text} className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="font-bold text-lg mb-2 text-brand-dark">{text}</h3>
            <p className="text-gray-500 font-semibold">{source}</p>
        </div>
    </div>
);

const Innovation: React.FC = () => {
  return (
    <section className="bg-brand-beige py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
          INNOVATION GOES <span className="text-brand-purple">VIRAL</span>
        </h2>
        <p className="text-center text-brand-gray max-w-3xl mx-auto mb-16">
          The novelty of our service and the disruptive OOH proposal draws a lot of attention from major media outlets.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InnovationCard 
                imgSrc="https://images.unsplash.com/photo-1546497910-8acaa3233828?q=80&w=1892&auto=format&fit=crop"
                text="Rentbrella Keeps The Drops Off Your Head - For Free If You Return It"
                source="TechCrunch"
            />
            <InnovationCard 
                imgSrc="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2070&auto=format&fit=crop"
                text="Startup launches 'free' Citi Bike-like umbrella-sharing service"
                source="New York Post"
            />
            <InnovationCard 
                imgSrc="https://images.unsplash.com/photo-1523348835978-95a2b19280a5?q=80&w=1887&auto=format&fit=crop"
                text="You can borrow an umbrella in Manhattan for free thanks to this startup"
                source="TimeOut"
            />
        </div>
      </div>
    </section>
  );
};

export default Innovation;
