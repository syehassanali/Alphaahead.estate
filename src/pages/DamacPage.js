import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const featuredCommunities = [
  { name: 'DAMAC Lagoons', desc: 'Lagoon Living Like Never Before', details: 'Elegant villas and townhouses surrounded by crystal blue lagoons.', img: '/damac/DAMAC Lagoons.jpg' },
  { name: 'DAMAC Hills', desc: 'Luxury Living in a Golf Community', details: 'A self-contained development with villas, apartments, and a luxury hotel.', img: '/damac/DAMAC Hills 1.webp' },
  { name: 'DAMAC Hills 2', desc: 'Affordable Luxury in Nature-Inspired Clusters', details: 'Thoughtfully designed townhouses, villas, and apartments in green zones.', img: '/damac/DAMAC Hills 2.jpg' },
  { name: 'DAMAC Sun City', desc: 'Live Bright in Dubailand', details: 'Vibrant townhouse community in one of Dubai\'s fastest-growing regions.', img: '/damac/Sun_City.webp' },
  { name: 'DAMAC Riverside', desc: 'Luxury Waterfront Lifestyle', details: '4 & 5 Bedroom townhouses and apartments with river-inspired views.', img: '/damac/DAMAC Riverside.webp' },
  { name: 'DAMAC Islands', desc: 'Elite Waterfront Collection', details: 'Premium villas, semi-detached villas, and townhouses on private islands.', img: '/damac/DAMAC Islands.jpg' },
];

function DamacPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="/damac/Damac Hero section.jpg"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onError={(e) => console.log('Video error:', e)}
          >
            <source src="/damac/Damac hero section video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>DAMAC</h1>
            <h2 className="text-2xl md:text-3xl font-light text-white font-sans tracking-tight mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>PROPERTIES</h2>
          </div>
        </section>

        {/* Iconic DAMAC Projects Section */}
        <section className="max-w-6xl mx-auto py-8 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-10 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Iconic DAMAC Projects Shaping Dubai's Skyline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCommunities.map((c, idx) => (
              <div key={c.name} className="bg-white flex flex-col overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-64 object-cover filter brightness-50 contrast-125" loading="lazy" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-light text-gray-900 mb-2 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>{c.name}</h3>
                  <div className="text-gray-600 mb-2 font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{c.desc}</div>
                  <div className="text-gray-700 mb-6 text-sm font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{c.details}</div>
                  {c.name === 'DAMAC Lagoons' ? (
                    <Link to="/damac-lagoons" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                  ) : c.name === 'DAMAC Hills' ? (
                    <Link to="/damac-hills" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                  ) : (
                    <a href="#contact" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Invest in DAMAC Properties Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Why Invest in DAMAC Properties?</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8 text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              As Dubai's trusted real estate partner, Alpha Ahead Real Estate Brokerage offers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl font-bold">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Priority Access</h3>
                  <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Off-market deals and early-bird discounts on DAMAC launches.</p>
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
                  <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>In-depth knowledge of DAMAC's payment plans and ROI potential.</p>
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
                DAMAC isn't just building homes, it's shaping Dubai's legacy. With a commitment to luxury and innovation, its projects boost the city's global stature while delivering unmatched living experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Ready to invest smartly? Contact Alpha Ahead today for a curated selection of DAMAC properties—your gateway to Dubai's luxury real estate.
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

export default DamacPage; 