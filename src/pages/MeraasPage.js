import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const featuredCommunities = [
  { name: 'The Acres', desc: 'Villas surrounded by nature', details: 'Elegant homes nestled around swimmable lagoons, green landscapes, and tranquil parks—offering a serene and sustainable lifestyle.', img: '/Meraas/The Acres.jpg' },
  { name: 'City Walk', desc: 'Urban sophistication in Jumeirah', details: 'A vibrant destination combining high-end residences, retail, and entertainment in the heart of Dubai\'s most prestigious area.', img: '/Meraas/City Walk.jpg' },
  { name: 'Nad Al Sheba Gardens', desc: 'Private, Gated, Personal', details: 'A peaceful community designed for those seeking a quiet life within reach of the city\'s energy—offering freedom, privacy, and modern living.', img: '/Meraas/Nad Al Sheba Gardens.webp' },
  { name: 'Madinat Jumeirah Living', desc: 'Luxury living at its finest', details: 'An exclusive residential community offering premium villas and townhouses with world-class amenities and stunning views.', img: '/Meraas/MJL/MJL Intro 706x581.jpg' },
  { name: 'Bluewaters', desc: 'Beachfront lifestyle destination', details: 'A vibrant beachfront destination combining luxury residences, retail, dining, and entertainment along Dubai\'s stunning coastline.', img: '/Meraas/Bluewaters/Bluewaters Residences PART OF A BIGGER VISION.jpg' },
];

function MeraasPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero Section */}
        <section className="relative w-full flex flex-col items-center justify-center py-16 px-4 bg-white min-h-[400px] md:min-h-[520px]">
          <div className="absolute inset-0 w-full h-full object-cover z-0" style={{backgroundImage: "url('/Meraas/Hero section.webp')", backgroundSize: 'cover', backgroundPosition: 'center'}} />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-light text-white text-center font-sans tracking-tight drop-shadow-lg" style={{fontFamily: 'Roboto, sans-serif'}}>MERAAS PROPERTIES</h1>
          </div>
        </section>

        {/* New Section After Hero */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Meraas</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              At Alpha Ahead Real Estate Brokerage, we specialize in connecting discerning buyers to the finest Meraas Properties in Dubai. As a visionary developer under Dubai Holding, Meraas redefines luxury with iconic off-plan residences, commercial spaces, and leisure destinations. Let us guide you to your perfect investment—where exceptional design, prime locations, and flexible payment plans meet.
            </p>
          </div>
        </section>

        {/* Iconic Meraas Projects Section */}
        <section className="max-w-6xl mx-auto py-8 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-10 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Iconic Meraas Projects Shaping Dubai's Skyline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCommunities.map((c, idx) => (
              <div key={c.name} className="bg-white flex flex-col overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-64 object-cover filter brightness-50 contrast-125" loading="lazy" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-light text-gray-900 mb-2 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>{c.name}</h3>
                  <div className="text-gray-600 mb-2 font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{c.desc}</div>
                  <div className="text-gray-700 mb-6 text-sm font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{c.details}</div>
                  {c.name === 'The Acres' ? (
                    <Link to="/the-acres" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                  ) : c.name === 'City Walk' ? (
                    <Link to="/city-walk" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                  ) : c.name === 'Nad Al Sheba Gardens' ? (
                    <Link to="/nad-al-sheba-gardens" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                  ) : c.name === 'Madinat Jumeirah Living' ? (
                    <Link to="/madinat-jumeirah-living" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                  ) : c.name === 'Bluewaters' ? (
                    <Link to="/bluewaters" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                  ) : (
                    <a href="#contact" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Invest in Meraas Properties Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Why Invest in Meraas Properties?</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8 text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              As Dubai's trusted real estate partner, Alpha Ahead Real Estate Brokerage offers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl font-bold">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Priority Access</h3>
                  <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Off-market deals and early-bird discounts on Meraas launches.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl font-bold">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>End-to-End Service</h3>
                  <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>From selection to paperwork, we handle every detail.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl font-bold">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Local Expertise</h3>
                  <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>In-depth knowledge of Meraas' payment plans and ROI potential.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl font-bold">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Personalized Advice</h3>
                  <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Tailored investments aligned with your goals.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Meraas isn't just building homes, it's shaping Dubai's legacy. Under Sheikh Ahmed bin Saeed Al Maktoum's leadership, its projects boost the city's global stature while delivering unmatched living experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Ready to invest smartly? Contact Alpha Ahead today for a curated selection of Meraas properties—your gateway to Dubai's luxury real estate.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Get in Touch!</h2>
          <form className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
            <input type="email" placeholder="Email" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
            <input type="tel" placeholder="Phone: +971" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
            <input type="text" placeholder="City" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
            <input type="text" placeholder="What is your purpose of buying property?" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black md:col-span-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
            <input type="text" placeholder="Investment Budget?" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black md:col-span-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
            <textarea placeholder="Type your message" rows={3} className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black md:col-span-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
            <button type="submit" className="w-full md:col-span-2 bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>SEND INQUIRY</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MeraasPage; 