import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const holidayStays = [
  { 
    id: 1, 
    title: 'Luxury Marina Penthouse', 
    price: 'AED 1,200/night', 
    location: 'Dubai Marina',
    beds: 3,
    baths: 3,
    guests: 6,
    rating: 4.9,
    reviews: 127,
    img: '/property1.jpg',
    type: 'Penthouse',
    featured: true
  },
  { 
    id: 2, 
    title: 'Beachfront Villa', 
    price: 'AED 2,500/night', 
    location: 'Palm Jumeirah',
    beds: 4,
    baths: 4,
    guests: 8,
    rating: 4.8,
    reviews: 89,
    img: '/property2.jpg',
    type: 'Villa',
    featured: true
  },
  { 
    id: 3, 
    title: 'Downtown Luxury Apartment', 
    price: 'AED 800/night', 
    location: 'Downtown Dubai',
    beds: 2,
    baths: 2,
    guests: 4,
    rating: 4.7,
    reviews: 156,
    img: '/Dubai Creek Harbour.jpeg',
    type: 'Apartment',
    featured: false
  },
  { 
    id: 4, 
    title: 'Hills Estate Family Villa', 
    price: 'AED 1,800/night', 
    location: 'Dubai Hills Estate',
    beds: 5,
    baths: 5,
    guests: 10,
    rating: 4.9,
    reviews: 73,
    img: '/Dubai Hills Estate.jpeg',
    type: 'Villa',
    featured: false
  }
];

const whyListWithUs = [
  {
    title: 'Maximum Exposure',
    desc: 'List on Airbnb, Booking.com, VRBO, and our exclusive network.',
    icon: '🌐'
  },
  {
    title: 'Professional Management',
    desc: 'Full-service management including cleaning, maintenance, and guest support.',
    icon: '🏠'
  },
  {
    title: 'Higher Revenue',
    desc: 'Optimized pricing strategies and premium positioning for better returns.',
    icon: '📈'
  },
  {
    title: 'Peace of Mind',
    desc: '24/7 support, insurance coverage, and hassle-free operations.',
    icon: '🛡️'
  }
];

const platformExposure = [
  { name: 'Airbnb', logo: '🏠', desc: 'Global short-term rental leader' },
  { name: 'Booking.com', logo: '📅', desc: 'Worldwide accommodation platform' },
  { name: 'VRBO', logo: '🏖️', desc: 'Vacation rental specialist' },
  { name: 'Expedia', logo: '✈️', desc: 'Travel booking giant' },
  { name: 'Alpha Ahead', logo: '⭐', desc: 'Exclusive luxury network' }
];

const holidayFaqs = [
  {
    q: 'How do I list my property for holiday rentals?',
    a: 'Contact us for a free consultation. We\'ll assess your property, provide market analysis, and handle all listing and management aspects.'
  },
  {
    q: 'What services are included in holiday home management?',
    a: 'We handle guest communication, check-ins, cleaning, maintenance, pricing optimization, and 24/7 support.'
  },
  {
    q: 'How much can I earn from holiday rentals?',
    a: 'Earnings vary by location and property type. We provide detailed market analysis and revenue projections.'
  },
  {
    q: 'What are the booking requirements for guests?',
    a: 'We verify all guests, require security deposits, and ensure compliance with Dubai tourism regulations.'
  },
  {
    q: 'How do you handle property maintenance?',
    a: 'Our team conducts regular inspections and coordinates with trusted contractors for any maintenance needs.'
  }
];

function HolidayHomePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('guests');

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/the-oasis.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 drop-shadow-lg" style={{fontFamily: 'Roboto, sans-serif'}}>
              Short-Term Rentals with a Luxury Touch
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow max-w-3xl mx-auto leading-relaxed">
              List your property or book a stay with Alpha Ahead's Holiday Home service. We specialize in fully-managed, short-term luxury rentals in Dubai—with professional cleaning, guest support, and maximum visibility on major platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#stays" className="px-8 py-4 rounded-lg bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors duration-200">
                Explore Stays
              </a>
              <a href="#list" className="px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-lg border-2 border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">
                List Your Property
              </a>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex justify-center mb-8">
            <div className="bg-card rounded-xl p-1 border border-dark-600">
              <button
                onClick={() => setActiveTab('guests')}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  activeTab === 'guests' 
                    ? 'bg-accent text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                For Guests
              </button>
              <button
                onClick={() => setActiveTab('owners')}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  activeTab === 'owners' 
                    ? 'bg-accent text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                For Owners
              </button>
            </div>
          </div>

          {/* For Guests Content */}
          {activeTab === 'guests' && (
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Explore Our Luxury Stays
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {holidayStays.map((stay) => (
                    <div key={stay.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative h-64">
                        <img 
                          src={stay.img} 
                          alt={stay.title} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {stay.featured && (
                          <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </div>
                        )}
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {stay.price}
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                          {stay.rating} ⭐ ({stay.reviews} reviews)
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{stay.title}</h3>
                        <p className="text-gray-600 mb-4">{stay.location}</p>
                        <div className="flex justify-between text-gray-500 text-sm mb-4">
                          <span>{stay.beds} Beds</span>
                          <span>{stay.baths} Baths</span>
                          <span>{stay.guests} Guests</span>
                        </div>
                        <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* For Owners Content */}
          {activeTab === 'owners' && (
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Why List With Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {whyListWithUs.map((reason, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
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
              </div>

              {/* Platform Exposure */}
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Platform Exposure
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                  {platformExposure.map((platform, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                      <div className="text-3xl mb-3">{platform.logo}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                      <p className="text-gray-600 text-sm">{platform.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Booking Guide */}
        <section className="max-w-4xl mx-auto py-20 px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
              Booking Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Stay</h3>
                <p className="text-gray-600 text-sm">Browse our curated collection of luxury properties across Dubai's most desirable locations.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book & Confirm</h3>
                <p className="text-gray-600 text-sm">Secure your booking with instant confirmation and flexible cancellation options.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enjoy Your Stay</h3>
                <p className="text-gray-600 text-sm">Arrive to a perfectly prepared property with 24/7 support throughout your stay.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            FAQs & Booking Guide
          </h2>
          <div className="space-y-4">
            {holidayFaqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl bg-white shadow-sm">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-gray-900 text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <svg className={openFaq === idx ? 'w-6 h-6 rotate-180 transition' : 'w-6 h-6 transition'} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-gray-600 text-base animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/Dubai Hills Estate2.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/70 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{fontFamily: 'Roboto, sans-serif'}}>
              Ready to Experience Luxury Short-Term Rentals?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to book a stay or list your property, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#stays" className="px-8 py-4 rounded-lg bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors duration-200">
                Book a Stay
              </a>
              <a href="#list" className="px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-lg border-2 border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">
                List Your Property
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

export default HolidayHomePage; 