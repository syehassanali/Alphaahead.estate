import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const featuredCommunities = [
  {
    name: 'Palm Jumeirah',
    desc: 'The Iconic Palm Island',
    details: 'Luxury villas and apartments with beach access',
    img: '/Nakheel.jpg',
  },
  {
    name: 'Palm Jebel Ali',
    desc: 'Future of Waterfront Living',
    details: 'Premium residential and leisure developments',
    img: '/Nakheel.jpg',
  },
  {
    name: 'Deira Islands',
    desc: 'Where Tradition Meets Modernity',
    details: 'Mixed-use development with residential towers',
    img: '/Nakheel.jpg',
  },
  {
    name: 'Jumeirah Islands',
    desc: 'Exclusive Island Living',
    details: 'Luxury villas in a serene island setting',
    img: '/Nakheel.jpg',
  },
  {
    name: 'Jumeirah Park',
    desc: 'Family-Friendly Community',
    details: 'Spacious villas and townhouses',
    img: '/Nakheel.jpg',
  },
  {
    name: 'Jumeirah Village Circle',
    desc: 'Affordable Luxury Living',
    details: 'Modern apartments and villas',
    img: '/Nakheel.jpg',
  },
];

const faqs = [
  { q: 'What makes Danube properties unique?', a: 'Danube is known for creating iconic waterfront destinations and master-planned communities with world-class amenities and excellent investment potential.' },
  { q: 'Are Danube properties good for investment?', a: 'Yes, Danube properties offer strong rental yields and capital appreciation, especially in prime locations like Palm Jumeirah.' },
  { q: 'What types of properties does Danube offer?', a: 'Danube offers luxury villas, apartments, townhouses, and branded residences across various communities.' },
  { q: 'How can I check Danube project status?', a: 'Our team provides regular updates on construction progress and can verify timelines with Danube directly.' },
  { q: 'What are the payment plans for Danube properties?', a: 'Danube offers flexible payment plans including post-handover payment options. We can provide detailed information.' },
  { q: 'Which Danube community has the best ROI?', a: 'Palm Jumeirah and Jumeirah Islands typically offer the highest returns due to their prime locations and luxury positioning.' },
];

export default function NakheelPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/Nakheel.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 drop-shadow-lg tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
              Danube Properties
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow max-w-3xl mx-auto leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Shaping Dubai's Coastline. Creators of Palm Jumeirah, Danube is renowned for delivering luxurious waterfront destinations and high-yield properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="px-8 py-4 rounded-lg bg-accent text-white font-medium text-lg hover:bg-accent/90 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                View Projects
              </a>
              <a href="#contact" className="px-8 py-4 rounded-lg bg-transparent text-white font-medium text-lg border-2 border-white/40 hover:bg-white hover:text-primary transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* About Danube */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>About Danube Properties</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Danube is a master developer creating iconic waterfront destinations and entertainment hubs. Their portfolio includes some of Dubai's most recognizable landmarks and tourist attractions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                From the iconic Palm Islands to world-class shopping destinations, Danube continues to shape Dubai's skyline with innovative and sustainable developments.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/Nakheel.jpg" 
                alt="Danube Properties" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Key Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="/Nakheel.jpg" 
                  alt="Palm Jumeirah" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Iconic
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-2 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Palm Jumeirah</h3>
                <p className="text-gray-700 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>The world's largest man-made island, featuring luxury hotels and residential properties.</p>
                <button className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="/Nakheel.jpg" 
                  alt="Deira Islands" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Waterfront
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-2 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Deira Islands</h3>
                <p className="text-gray-700 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>A vibrant waterfront destination with residential, retail, and entertainment offerings.</p>
                <button className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="/Nakheel.jpg" 
                  alt="The World Islands" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Exclusive
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-2 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>The World Islands</h3>
                <p className="text-gray-700 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Exclusive island living with private beaches and luxury amenities.</p>
                <button className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Communities */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            FEATURED COMMUNITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCommunities.map((community, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="relative">
                  <img src={community.img} alt={community.name} className="w-full h-64 object-cover filter brightness-75 contrast-110" loading="lazy" width="400" height="256" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{community.name}</h3>
                  <p className="text-gray-600 mb-2">{community.desc}</p>
                  <p className="text-sm text-gray-500 mb-4">{community.details}</p>
                  <button className="px-6 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200">LEARN MORE</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-3xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Get in Touch with Us</h2>
          <form className="bg-white p-8 grid grid-cols-1 gap-4">
            <input type="text" placeholder="Name" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            <input type="email" placeholder="Email" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            <input type="tel" placeholder="Phone" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            <textarea placeholder="Message" rows="4" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black resize-none"></textarea>
            <button type="submit" className="px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200">SEND MESSAGE</button>
          </form>
        </section>

        {/* Why Invest Section */}
        <section className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Why Invest in Danube Properties?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Iconic Developments</h3>
              <p>Danube is behind some of Dubai's most recognizable landmarks and communities, ensuring strong brand recognition and demand.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Waterfront Locations</h3>
              <p>Many Nakheel properties offer stunning waterfront views and beach access, commanding premium rental rates.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Master-Planned Communities</h3>
              <p>Comprehensive infrastructure, amenities, and lifestyle facilities create desirable living environments.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Strong Track Record</h3>
              <p>Decades of successful project delivery and customer satisfaction across various property types.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Details */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">+971 50 560 6877</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-700">info@alphaahead.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-700">Dubai, UAE</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 