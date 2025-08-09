
import React from 'react';

const AppleIcon = () => (
    <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19.39,14.73a3.61,3.61,0,0,0-1.46,3.33,3.59,3.59,0,0,0,1.9,3.44,4.34,4.34,0,0,0,3.42-1.8,1,1,0,0,1,1.5.85,1,1,0,0,1-.09.38,6.4,6.4,0,0,1-5,3.22,6.17,6.17,0,0,1-6.22-5.46,3.81,3.81,0,0,0-2.45-3.23,3.63,3.63,0,0,0-3.69,2.58,1,1,0,0,1-1.9.4,6.44,6.44,0,0,1,3.49-5.33,6.23,6.23,0,0,1,6-1.55,3.7,3.7,0,0,0,2.83-3.06,3.6,3.6,0,0,0-3.26-4.22,1,1,0,0,1-.76-1.15,1,1,0,0,1,.33-.58,6.44,6.44,0,0,1,5.32-1.22,6.18,6.18,0,0,1,4.2,5.29A6.2,6.2,0,0,1,19.39,14.73Zm-4-10.45a3.68,3.68,0,0,0,2.83,3.52,3.57,3.57,0,0,0,3.32-2.3,1,1,0,0,1,1.88.66,6.38,6.38,0,0,1-5.71,4.1,6.21,6.21,0,0,1-5.26-3.87,3.6,3.6,0,0,0-3.41-2.4,1,1,0,1,1,.3-2A6.4,6.4,0,0,1,15.42,4.28Z"/></svg>
);

const GooglePlayIcon = () => (
    <svg className="w-7 h-7 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M3,2v19.98L17.98,12,3,2z M12.43,12.98l-2.43,1.4v-2.8l2.43,1.4z M13.82,12l-5.43-3.14v6.28L13.82,12z" /></svg>
);


const Hero: React.FC = () => {
  return (
    <section className="bg-brand-purple text-white pt-32 pb-20 lg:pt-48 lg:pb-40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              SHARED UMBRELLAS FOR <span className="underline-yellow">SMARTER</span> CITIES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg mx-auto lg:mx-0">
              Enjoying the city on rainy days has finally become possible. We are now in São Paulo, New York City, London, and are expanding across the USA, UK, and Europe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105">
                <AppleIcon />
                <div className="text-left">
                    <p className="text-xs">Download on the</p>
                    <p className="text-xl leading-tight -mt-1">App Store</p>
                </div>
              </button>
              <button className="bg-white text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105">
                <GooglePlayIcon />
                 <div className="text-left">
                    <p className="text-xs">GET IT ON</p>
                    <p className="text-xl leading-tight -mt-1">Google Play</p>
                </div>
              </button>
            </div>
          </div>
          <div className="relative h-96 lg:h-auto lg:aspect-[1/1] -mr-8 hidden lg:block">
            <img src="https://images.unsplash.com/photo-1542326762-b98a3c3f7694?q=80&w=1887&auto=format&fit=crop" alt="Woman with blue umbrella" className="absolute top-10 left-0 w-2/3 h-2/3 rounded-lg object-cover shadow-2xl z-10 transform -rotate-3 hover:rotate-0 transition-transform"/>
            <img src="https://images.unsplash.com/photo-1596423403319-25f053531326?q=80&w=1887&auto=format&fit=crop" alt="Umbrella station" className="absolute bottom-10 right-0 w-3/5 h-3/5 rounded-lg object-cover shadow-2xl z-20 border-8 border-brand-purple transform rotate-2 hover:rotate-0 transition-transform"/>
            <img src="https://images.unsplash.com/photo-1611703442845-3e5512f455b9?q=80&w=870" alt="A blue umbrella" className="absolute top-0 right-10 w-48 h-64 rounded-lg z-0 object-cover shadow-xl transform rotate-6 hover:rotate-0 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
