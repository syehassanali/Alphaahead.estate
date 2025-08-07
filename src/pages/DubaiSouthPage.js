import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const featuredCommunities = [
  {
    name: 'Tilal Al Ghaf',
    desc: 'Sustainable Living Redefined',
    details: 'Luxury villas and townhouses in a nature-inspired community',
    img: '/pic1.jpg',
  },
  {
    name: 'Al Zahia',
    desc: 'Modern Family Living',
    details: 'Contemporary apartments and villas with retail convenience',
    img: '/pic1.jpg',
  },
  {
    name: 'Al Zahra',
    desc: 'Exclusive Residential Community',
    details: 'Premium villas and townhouses with world-class amenities',
    img: '/pic1.jpg',
  },
  {
    name: 'Al Waha',
    desc: 'Tranquil Living Environment',
    details: 'Spacious villas in a peaceful, family-friendly setting',
    img: '/pic1.jpg',
  },
  {
    name: 'Al Salam',
    desc: 'Community-Focused Development',
    details: 'Modern residential units with integrated retail and leisure',
    img: '/pic1.jpg',
  },
  {
    name: 'Al Badia',
    desc: 'Luxury Meets Convenience',
    details: 'High-end apartments and villas with shopping and dining',
    img: '/pic1.jpg',
  },
];

const faqs = [
  { q: 'What makes Dubai South properties unique?', a: 'Dubai South combines residential living with retail, entertainment, and lifestyle amenities, creating integrated communities that offer convenience and quality of life.' },
  { q: 'Are Dubai South properties good for investment?', a: 'Yes, their properties offer strong rental yields and capital appreciation due to their prime locations and integrated community approach.' },
  { q: 'What types of properties does Dubai South offer?', a: 'They offer luxury villas, townhouses, and apartments across various master-planned communities with retail and leisure facilities.' },
  { q: 'How can I check Dubai South project status?', a: 'Our team provides regular updates on construction progress and can verify timelines with Dubai South directly.' },
  { q: 'What are the payment plans for Dubai South properties?', a: 'Dubai South offers flexible payment plans including post-handover options. We can provide detailed information.' },
  { q: 'Which Dubai South community has the best ROI?', a: 'Tilal Al Ghaf and Al Zahia typically offer the highest returns due to their integrated amenities and prime locations.' },
];

export default function MajidAlFuttaimPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero Section */}
        <section className="relative w-full flex flex-col items-center justify-center py-16 px-4 bg-white min-h-[400px] md:min-h-[520px]">
          <div className="absolute inset-0 w-full h-full object-cover z-0" style={{backgroundImage: "url('/pic1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}} />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white font-serif drop-shadow-lg">DUBAI SOUTH PROPERTIES</h1>
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
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Why Invest in Dubai South Properties?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Integrated Communities</h3>
              <p>Residential properties combined with retail, entertainment, and lifestyle amenities create desirable living environments.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Quality Construction</h3>
              <p>Known for high-quality finishes, modern architecture, and attention to detail in all their developments.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Prime Locations</h3>
              <p>Strategic positioning in high-growth areas with excellent connectivity and infrastructure.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p>Strong customer service and after-sales support ensure long-term satisfaction and value.</p>
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