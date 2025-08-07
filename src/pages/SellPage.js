import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const recentSoldProperties = [
  { 
    id: 1, 
    title: 'Luxury Villa in Dubai Hills Estate', 
    soldPrice: 'AED 4,500,000', 
    originalPrice: 'AED 4,200,000',
    location: 'Dubai Hills Estate',
    daysOnMarket: 45,
    img: '/Dubai Hills Estate.jpeg',
    type: 'Villa'
  },
  { 
    id: 2, 
    title: 'Waterfront Apartment in Dubai Marina', 
    soldPrice: 'AED 3,200,000', 
    originalPrice: 'AED 2,900,000',
    location: 'Dubai Marina',
    daysOnMarket: 32,
    img: '/property1.jpg',
    type: 'Apartment'
  },
  { 
    id: 3, 
    title: 'Townhouse in The Valley', 
    soldPrice: 'AED 3,800,000', 
    originalPrice: 'AED 3,500,000',
    location: 'The Valley',
    daysOnMarket: 28,
    img: '/pexels-thelazyartist-1642125.jpg',
    type: 'Townhouse'
  }
];

const sellerTestimonials = [
  {
    name: 'Ahmed Al Mansouri',
    location: 'Dubai Hills Estate',
    testimonial: 'Alpha Ahead sold my villa in just 45 days for 7% above asking price. Their marketing strategy and professional approach exceeded my expectations.',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Sarah Johnson',
    location: 'Dubai Marina',
    testimonial: 'The team handled everything professionally from valuation to closing. I received multiple offers within the first week of listing.',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Mohammed Rahman',
    location: 'The Valley',
    testimonial: 'Excellent service and transparent communication throughout the process. They maximized my property value and made the sale seamless.',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/men/35.jpg'
  }
];

const sellingSteps = [
  {
    step: 1,
    title: 'Free Valuation',
    desc: 'Get an accurate market valuation backed by comprehensive data analysis.',
    icon: '📊'
  },
  {
    step: 2,
    title: 'Marketing Strategy',
    desc: 'Professional photography, virtual tours, and multi-platform marketing.',
    icon: '📸'
  },
  {
    step: 3,
    title: 'Showings & Offers',
    desc: 'Organized viewings and negotiation support for the best offers.',
    icon: '🤝'
  },
  {
    step: 4,
    title: 'Closing Support',
    desc: 'Complete transaction management from offer acceptance to handover.',
    icon: '✅'
  }
];

function SellPage() {
  const [valuationForm, setValuationForm] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    location: '',
    bedrooms: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setValuationForm({
      ...valuationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Valuation form submitted:', valuationForm);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/property2.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 drop-shadow-lg tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
              Maximize Your Property's Value
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow max-w-3xl mx-auto leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Selling your property in Dubai? Our expert team provides accurate market valuations, strategic marketing, and wide exposure across top portals. From listing to closing, we handle everything—professionally and transparently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#valuation" className="px-8 py-4 rounded-lg bg-accent text-white font-medium text-lg hover:bg-accent/90 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Get Free Valuation
              </a>
              <a href="#contact" className="px-8 py-4 rounded-lg bg-transparent text-white font-medium text-lg border-2 border-white/40 hover:bg-white hover:text-primary transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Speak to Expert
              </a>
            </div>
          </div>
        </section>

        {/* Free Valuation CTA */}
        <section id="valuation" className="max-w-4xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
            Get Your Free Property Valuation
          </h2>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Accurate Market Value</h3>
                <p className="text-gray-600 mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Get a comprehensive property valuation based on current market trends, comparable sales, and expert analysis.</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Market analysis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Comparable sales</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Expert consultation</span>
                  </li>
                </ul>
              </div>
              <div>
                <form className="space-y-4">
                  <input type="text" placeholder="Property Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-accent font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-accent font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-accent font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-accent font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
                  <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                    Get Free Valuation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Sold Properties */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
            Recently Sold Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentSoldProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={property.img} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Sold
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <p className="text-accent font-bold text-lg mb-2">{property.soldPrice}</p>
                  <p className="text-gray-500 text-sm">Sold in {property.daysOnMarket} days</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seller Testimonials */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            What Our Sellers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellerTestimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How Selling Works */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            How Selling Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellingSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/Dubai Hills Estate.jpeg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/70 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{fontFamily: 'Roboto, sans-serif'}}>
              Ready to Sell Your Property?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied sellers who have maximized their property value with Alpha Ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#valuation" className="px-8 py-4 rounded-lg bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors duration-200">
                Get Started Today
              </a>
              <a href="tel:+971505606877" className="px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-lg border-2 border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">
                Call for Consultation
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

export default SellPage; 