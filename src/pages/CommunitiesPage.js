import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const communities = [
  {
    name: 'Dubai Hills Estate',
    slogan: 'The Green Heart of Dubai',
    desc: 'A lush, master-planned neighborhood with golf courses, parks, and luxury villas. Ideal for families seeking upscale suburban living.',
    types: 'Apartments | Townhouses | Villas',
    img: '/Dubai Hills Estate.jpeg',
  },
  {
    name: 'Dubai Creek Harbour',
    slogan: 'Views to Live For',
    desc: 'Located along the historic creek, this futuristic waterfront community offers stunning skyline views and modern amenities.',
    types: 'Waterfront Apartments | Retail Promenade | Marina',
    img: '/Dubai Creek Harbour.jpeg',
  },
  {
    name: 'Emaar South',
    slogan: 'Local Community with a Global Gateway',
    desc: 'A peaceful, family-focused neighborhood near Al Maktoum Airport with excellent connectivity and affordable villas.',
    types: '3 & 4-Bedroom Townhouses | Near Expo City',
    img: '/Emaar-south.jpg',
  },
  {
    name: 'Rashid Yachts & Marina',
    slogan: 'Where Heritage Meets the Future',
    desc: 'A heritage-inspired coastal community combining old-world charm with modern luxury, ideal for seafront living.',
    types: '1–3 Bedroom Apartments | Marina Access',
    img: '/Rashid Yacht & Marina.jpg',
  },
  {
    name: 'The Oasis by Emaar',
    slogan: 'Immerse in Pure Luxury',
    desc: 'An ultra-premium residential destination with mansions and villas surrounded by water lagoons, parks, and exclusive amenities.',
    types: 'Luxury Villas | Waterfront Living | Private Pools',
    img: '/the-oasis.jpg',
  },
  {
    name: 'The Valley',
    slogan: 'Dreams Begin Here',
    desc: 'An affordable master community designed for growing families, with schools, sports areas, and a town center.',
    types: '3–4 Bedroom Villas & Townhouses',
    img: '/pexels-thelazyartist-1642125.jpg',
  },
];

export default function CommunitiesPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero/Intro Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center mb-16 px-4 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/videos/v3.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
  
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 max-w-3xl mx-auto text-center py-24 md:py-32 flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white font-serif drop-shadow-lg">Explore Dubai’s Most Desirable Communities</h1>
            <p className="text-lg text-white/90 mb-6 drop-shadow">Welcome to the Communities page of Alpha Ahead Real Estate — your gateway to the most luxurious, family-friendly, and investment-worthy neighborhoods across Dubai.<br /><br />Whether you're seeking serene golf-side villas, waterfront high-rises, or vibrant urban hubs, Dubai offers a wide range of master-planned communities to suit every lifestyle and budget.</p>
          </div>
        </section>

        {/* Communities Grid */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            Explore Our Communities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {communities.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-0 flex flex-col hover:shadow-2xl transition-shadow duration-200 overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-48 object-cover" loading="lazy" width="400" height="192" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{c.name}</h3>
                  <div className="text-accent font-semibold mb-2">{c.slogan}</div>
                  <p className="text-gray-300 mb-2 text-sm">{c.desc}</p>
                  <div className="text-gray-400 text-xs mb-4">{c.types}</div>
                  <a href="#" className="mt-auto px-6 py-2 rounded-lg bg-transparent text-primary font-semibold shadow border border-primary hover:bg-primary hover:text-white transition-colors duration-200">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose These Communities */}
        <section className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center font-serif">Why Choose These Communities?</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
            <li>✔️ Developer-Backed Quality – Built by top names like Emaar, DAMAC, and Meraas.</li>
            <li>✔️ High ROI Potential – Strong capital appreciation and rental demand.</li>
            <li>✔️ Lifestyle Amenities – Schools, retail, hospitals, golf, beach, and parks.</li>
            <li>✔️ Family-Friendly Planning – Safe, green, and community-driven environments.</li>
            <li>✔️ Connectivity – Proximity to Downtown, Business Bay, Expo City, and airports.</li>
          </ul>
          <div className="bg-accent/10 rounded-xl p-6 border border-accent/20 text-center">
            <h3 className="text-xl font-bold text-accent mb-2">Need Help Choosing the Right Community?</h3>
            <p className="mb-4 text-primary/80">Let our property experts guide you based on your budget, investment goals, lifestyle preferences, and more.</p>
            <a href="mailto:info@alphaahead.com" className="inline-block px-8 py-3 rounded-full bg-accent text-primary font-semibold shadow hover:bg-primary hover:text-accent border-2 border-accent transition">Talk to an Advisor</a>
          </div>
        </section>

        {/* Map & Gallery Placeholders */}
        <section className="max-w-6xl mx-auto mb-20 px-4">
          <div className="mb-8 text-center text-primary/70">[Map integration and community gallery coming soon]</div>
        </section>

        {/* Contact CTA */}
        <section className="max-w-3xl mx-auto mb-20 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-serif">Let’s Find Your Perfect Community</h2>
          <p className="mb-4 text-primary/80">Contact Alpha Ahead Real Estate today to schedule a consultation or private tour.</p>
          <div className="mb-2 text-primary/90"><b>Email:</b> info@alphaahead.com</div>
          <div className="mb-2 text-primary/90"><b>Phone:</b> +971 50 560 6877</div>
          <a href="mailto:info@alphaahead.com" className="inline-block mt-4 px-8 py-3 rounded-full bg-yellow-400 text-primary font-bold shadow hover:bg-yellow-500 transition">Contact Us</a>
        </section>
      </main>
    </div>
  );
} 