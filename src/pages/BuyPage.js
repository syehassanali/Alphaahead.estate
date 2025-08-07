import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const featuredListings = [
  { 
    id: 1, 
    title: 'Luxury Villa in Dubai Hills Estate', 
    price: 'AED 4,200,000', 
    location: 'Dubai Hills Estate',
    beds: 4,
    baths: 5,
    sqft: '4,200',
    img: '/Dubai Hills Estate.jpeg',
    type: 'Villa'
  },
  { 
    id: 2, 
    title: 'Waterfront Apartment in Dubai Marina', 
    price: 'AED 2,800,000', 
    location: 'Dubai Marina',
    beds: 3,
    baths: 3,
    sqft: '2,100',
    img: '/property1.jpg',
    type: 'Apartment'
  },
  { 
    id: 3, 
    title: 'Townhouse in The Valley', 
    price: 'AED 3,500,000', 
    location: 'The Valley',
    beds: 4,
    baths: 4,
    sqft: '3,800',
    img: '/pexels-thelazyartist-1642125.jpg',
    type: 'Townhouse'
  },
  { 
    id: 4, 
    title: 'Penthouse in Downtown Dubai', 
    price: 'AED 8,900,000', 
    location: 'Downtown Dubai',
    beds: 5,
    baths: 6,
    sqft: '5,500',
    img: '/property2.jpg',
    type: 'Penthouse'
  }
];

const popularCommunities = [
  { name: 'Dubai Hills Estate', img: '/Dubai Hills Estate.jpeg', desc: 'The Green Heart of Dubai' },
  { name: 'Dubai Marina', img: '/Dubai Creek Harbour.jpeg', desc: 'Waterfront Living' },
  { name: 'The Valley', img: '/pexels-thelazyartist-1642125.jpg', desc: 'Family Community' },
  { name: 'Downtown Dubai', img: '/property2.jpg', desc: 'City Center Luxury' },
  { name: 'Emaar South', img: '/Emaar-south.jpg', desc: 'Gateway Community' },
  { name: 'Dubai Creek Harbour', img: '/Dubai Creek Harbour.jpeg', desc: 'Future Skyline' }
];

const investmentTips = [
  {
    title: 'Location Analysis',
    desc: 'Research emerging areas and infrastructure developments for long-term appreciation.',
    icon: '📍'
  },
  {
    title: 'Payment Plans',
    desc: 'Explore developer payment plans that align with your financial timeline.',
    icon: '💰'
  },
  {
    title: 'ROI Calculation',
    desc: 'Calculate potential rental yields and capital appreciation for informed decisions.',
    icon: '📊'
  },
  {
    title: 'Legal Compliance',
    desc: 'Ensure all transactions comply with Dubai real estate regulations and RERA guidelines.',
    icon: '⚖️'
  }
];

const whyBuyWithUs = [
  {
    title: 'Expert Guidance',
    desc: '15+ years of Dubai real estate expertise with deep market knowledge.',
    icon: '🎯'
  },
  {
    title: 'Exclusive Access',
    desc: 'Early access to off-plan launches and VIP developer relationships.',
    icon: '🔑'
  },
  {
    title: 'Full Service',
    desc: 'End-to-end support from property selection to handover and beyond.',
    icon: '🤝'
  },
  {
    title: 'Market Insights',
    desc: 'Data-driven recommendations backed by comprehensive market analysis.',
    icon: '📈'
  }
];

function BuyPage() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/property1.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 drop-shadow-lg tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
              Find Your Dream Home in Dubai
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow max-w-3xl mx-auto leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Explore a curated selection of luxury villas, townhouses, and apartments across Dubai's most prestigious communities. Whether you're a first-time buyer or a seasoned investor, Alpha Ahead offers handpicked properties that match your lifestyle and investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#featured" className="px-8 py-4 rounded-lg bg-accent text-white font-medium text-lg hover:bg-accent/90 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                View Properties
              </a>
              <a href="#contact" className="px-8 py-4 rounded-lg bg-transparent text-white font-medium text-lg border-2 border-white/40 hover:bg-white hover:text-primary transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Get Expert Advice
              </a>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section id="featured" className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredListings.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src={property.img} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{property.title}</h3>
                  <p className="text-gray-600 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{property.location}</p>
                  <div className="flex justify-between text-gray-500 text-sm mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} sq.ft</span>
                  </div>
                  <button className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Communities */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
            Popular Communities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {popularCommunities.map((community, idx) => (
              <div key={community.name} className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={community.img} 
                  alt={community.name} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-light text-white mb-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{community.name}</h3>
                  <p className="text-white/80 text-sm font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{community.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Tips */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            Investment Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Buy with Alpha Ahead */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            Why Buy with Alpha Ahead?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyBuyWithUs.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{reason.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/property2.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/70 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{fontFamily: 'Roboto, sans-serif'}}>
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our expert team guide you through the buying process and help you make the best investment decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 rounded-lg bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors duration-200">
                Schedule Consultation
              </a>
              <a href="tel:+971505606877" className="px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-lg border-2 border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BuyPage; 