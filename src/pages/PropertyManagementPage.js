import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const servicesIncluded = [
  {
    title: 'Tenant Sourcing & Screening',
    desc: 'Comprehensive tenant background checks, credit verification, and rental history analysis.',
    icon: '🔍'
  },
  {
    title: 'Rent Collection & Management',
    desc: 'Automated rent collection, late payment handling, and financial reporting.',
    icon: '💰'
  },
  {
    title: 'Property Maintenance',
    desc: '24/7 maintenance coordination, regular inspections, and preventive care.',
    icon: '🔧'
  },
  {
    title: 'Legal Compliance',
    desc: 'RERA compliance, contract management, and legal documentation handling.',
    icon: '⚖️'
  },
  {
    title: 'Marketing & Advertising',
    desc: 'Professional photography, virtual tours, and multi-platform property marketing.',
    icon: '📸'
  },
  {
    title: 'Financial Reporting',
    desc: 'Monthly statements, expense tracking, and tax documentation support.',
    icon: '📊'
  }
];

const landlordTestimonials = [
  {
    name: 'David Thompson',
    location: 'Dubai Marina',
    testimonial: 'Alpha Ahead has managed my properties for 3 years. Their professional service and attention to detail have maximized my rental income while minimizing stress.',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Fatima Al Rashid',
    location: 'Dubai Hills Estate',
    testimonial: 'As an overseas owner, I needed reliable property management. Alpha Ahead handles everything perfectly and keeps me updated regularly.',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Michael Chen',
    location: 'The Valley',
    testimonial: 'Excellent service from start to finish. They found quality tenants quickly and maintain my property to the highest standards.',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/men/35.jpg'
  }
];

const pricingPlans = [
  {
    name: 'Basic Management',
    price: '8%',
    features: [
      'Tenant sourcing & screening',
      'Rent collection',
      'Basic maintenance coordination',
      'Monthly reporting',
      'Legal compliance support'
    ],
    popular: false
  },
  {
    name: 'Premium Management',
    price: '10%',
    features: [
      'All Basic features',
      '24/7 maintenance support',
      'Professional marketing',
      'Financial optimization',
      'Dedicated property manager',
      'Quarterly property inspections'
    ],
    popular: true
  },
  {
    name: 'Luxury Management',
    price: '12%',
    features: [
      'All Premium features',
      'Concierge services',
      'Premium tenant screening',
      'Custom reporting',
      'Market analysis',
      'Investment advisory'
    ],
    popular: false
  }
];

function PropertyManagementPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/Emaar-south.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 drop-shadow-lg" style={{fontFamily: 'Roboto, sans-serif'}}>
              Comprehensive Property Management Services
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end property management for local and international property owners. From tenant sourcing and rent collection to maintenance and legal compliance, we ensure peace of mind and steady returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 rounded-lg bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors duration-200">
                View Services
              </a>
              <a href="#contact" className="px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-lg border-2 border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">
                Get Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section id="services" className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            Services Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesIncluded.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Owner Portal Access */}
        <section className="max-w-4xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            Owner Portal Access
          </h2>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Dashboard</h3>
                <p className="text-gray-600 mb-6">Access your property performance, financial reports, and maintenance updates anytime, anywhere.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="text-accent mr-2">✓</span>
                    <span>Monthly rent collection reports</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-accent mr-2">✓</span>
                    <span>Maintenance request tracking</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-accent mr-2">✓</span>
                    <span>Financial statements</span>
                  </li>
                </ul>
              </div>
              <div>
                <form className="space-y-4">
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-accent" />
                  <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-accent" />
                  <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200">
                    Access Portal
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials from Landlords */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            What Our Landlords Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landlordTestimonials.map((testimonial, idx) => (
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

        {/* Pricing Structure */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className={`bg-white rounded-2xl p-8 border ${plan.popular ? 'border-accent' : 'border-gray-200'} relative hover:shadow-lg transition-shadow duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.price}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-gray-600">
                      <span className="text-accent mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${plan.popular ? 'bg-accent text-white hover:bg-accent/90' : 'bg-transparent text-accent border border-accent hover:bg-accent hover:text-white'}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/Rashid Yacht & Marina.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/70 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{fontFamily: 'Roboto, sans-serif'}}>
              Ready to Maximize Your Property Returns?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our professional team handle your property management while you enjoy passive income and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 rounded-lg bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors duration-200">
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

export default PropertyManagementPage; 