import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const featuredCommunities = [
  {
    name: 'AYA by Deyaar',
    desc: 'Umm Al Quwain',
    details: '1-Sky Villas bedroom • 680-7500 sqft',
    img: '/deyaar/aya-thmb.png',
    path: '/aya'
  },
  {
    name: 'ELEVE by Deyaar',
    desc: 'Jabel Ali',
    details: 'Studio-3 bedroom • 409-2938 sqft',
    img: '/deyaar/Eleve.jpg',
    path: '/eleve'
  },
  {
    name: 'Jannat Midtown by Deyaar',
    desc: 'Dubai Production City',
    details: 'Studio-3 bedroom • 350-1800 sqft',
    img: '/deyaar/Jannat-Midtown.jpg',
    path: '/jannat-midtown'
  },
  {
    name: 'Rivage by Deyaar',
    desc: 'Abu Dhabi',
    details: '1-3, Duplexes, Sky Villas, and Sky Palaces bedroom • 801-7810 sqft',
    img: '/deyaar/Rivage.jpg',
    path: '/rivage'
  },
  {
    name: 'Rosalia Residences by Deyaar',
    desc: 'Al Furjan',
    details: '1-3 bedroom • 774-1743 sqft',
    img: '/deyaar/Rosalia Residences.jpg',
    path: '/rosalia'
  },
  {
    name: 'Amalia by Deyaar',
    desc: 'Al Furjan',
    details: '1-3 bedroom • 800-3000 sqft',
    img: '/deyaar/Amalia.jpg',
    path: '/amalia'
  },
  {
    name: 'Talia By Deyaar',
    desc: 'Al Furjan',
    details: 'Studio-2 Bedroom • 670-1465 Size (sqft)',
    img: '/deyaar/Talia.jpg',
    path: '/talia'
  },
  {
    name: 'Mar Casa By Deyaar',
    desc: 'Dubai Maritime Authority',
    details: 'Studio-3 Bedroom • 800-1600 Size (sqft)',
    img: '/deyaar/Mar Casa.jpg',
    path: '/mar-casa'
  },
];

const faqs = [
  {
    q: 'What is an off-plan property in Dubai?',
    a: 'Off-plan properties are purchased before construction is completed. They offer lower prices, flexible payment plans, and high appreciation potential.'
  },
  {
    q: 'How can I reserve an off-plan unit?',
    a: 'We’ll help you choose a project, submit documents, and guide you through booking with trusted developers.'
  },
  {
    q: 'Off-plan vs. ready property: pros and cons?',
    a: 'Off-plan = lower prices & payment flexibility. Ready = immediate use. We help you choose what suits you best.'
  },
  {
    q: 'ROI on Dubai investments?',
    a: 'Yields range from 6%–10% depending on location, property type, and strategy.'
  },
  {
    q: 'Top off-plan areas for 2025?',
    a: 'Emaar South, Dubai Hills, Creek Harbour, and The Valley.'
  },
  {
    q: 'Can I resell before completion?',
    a: 'Yes, subject to contract terms and market conditions.'
  },
  {
    q: 'What are service charges?',
    a: 'Fees paid to manage common areas. These vary by community and affect rental yields.'
  },
  {
    q: 'How do I know a developer is reliable?',
    a: 'We only recommend RERA-approved developers with proven records like Emaar, Sobha, Damac, and more.'
  },
];

function DeyaarPage() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen font-sans bg-white">
        <main className="flex-1 pb-12 bg-white">
          {/* Hero Section */}
          <section className="relative w-full flex flex-col items-center justify-center py-16 px-4 bg-white min-h-[400px] md:min-h-[520px]">
            <div className="absolute inset-0 w-full h-full object-cover z-0" style={{backgroundImage: "url('/deyaar/Deyaar-Hero section.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center'}} />
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-light mb-4 text-white text-center font-sans tracking-tight drop-shadow-lg" style={{fontFamily: 'Roboto, sans-serif'}}>DEYAAR PROPERTY</h1>
            </div>
          </section>

          {/* Featured Communities by Deyaar */}
          <section className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-10 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>FEATURED COMMUNITIES BY DEYAAR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCommunities.map((c, idx) => (
                <div key={c.name} className="bg-white flex flex-col overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-64 object-cover" loading="lazy" />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-light text-gray-900 mb-2 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>{c.name}</h3>
                    <div className="text-gray-600 mb-2 font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{c.desc}</div>
                    <div className="text-gray-700 mb-6 text-sm font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{c.details}</div>
                    {c.name === 'AYA by Deyaar' ? (
                      <Link to="/aya" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                    ) : c.name === 'ELEVE by Deyaar' ? (
                      <Link to="/eleve" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                    ) : c.name === 'Jannat Midtown by Deyaar' ? (
                      <Link to="/jannat-midtown" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                    ) : c.name === 'Rivage by Deyaar' ? (
                      <Link to="/rivage" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                    ) : c.name === 'Rosalia Residences by Deyaar' ? (
                      <Link to="/rosalia" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                    ) : c.name === 'Talia By Deyaar' ? (
                      <Link to="/talia" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                    ) : c.name === 'Amalia by Deyaar' ? (
                      <Link to="/amalia" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                    ) : c.name === 'Mar Casa By Deyaar' ? (
                      <Link to="/mar-casa" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</Link>
                    ) : (
                      <a href="#contact" className="mt-auto px-6 py-3 bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEARN MORE</a>
                    )}
                  </div>
                </div>
              ))}
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
              <input type="text" placeholder="Purpose of buying property?" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black md:col-span-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
              <input type="text" placeholder="Investment Budget?" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black md:col-span-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
              <textarea placeholder="Message" rows={3} className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black md:col-span-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}} />
              <button type="submit" className="w-full md:col-span-2 bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>SEND MESSAGE</button>
            </form>
          </section>

          {/* Off-Plan Investment Info */}
          <section className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Discover Dubai's Finest Off-Plan Investment Opportunities</h2>
            <p className="max-w-3xl mx-auto text-center text-gray-600 mb-8 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Dubai's real estate market offers tax-free returns, high ROI, and access to world-class developments. With Alpha Ahead Real Estate, you'll receive expert guidance, exclusive project access, and a seamless buying experience.<br /><br />We connect you with premium developments like Emaar's The Oasis, Dubai Creek Harbour, and Downtown—ensuring every investment supports your financial and lifestyle goals.</p>
          </section>

          {/* FAQ Section */}
          <section className="max-w-3xl mx-auto py-12 px-4">
            <h2 className="font-sans text-3xl md:text-4xl font-light text-gray-900 mb-10 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={faq.q} className="border border-gray-200 bg-white">
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-900 text-left focus:outline-none font-sans" 
                    style={{fontFamily: 'Roboto, sans-serif'}}
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    aria-expanded={faqOpen === idx}
                  >
                    <span>{faq.q}</span>
                    <svg className={faqOpen === idx ? 'w-6 h-6 rotate-180 transition' : 'w-6 h-6 transition'} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  {faqOpen === idx && (
                    <div className="px-6 pb-4 text-gray-600 text-base animate-fadeIn font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Why Alpha Ahead for Off-Plan */}
          <section className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Why Alpha Ahead for Off-Plan?</h2>
            <ul className="max-w-2xl mx-auto text-gray-700 text-lg space-y-2 mb-8 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              <li>Exclusive Access to New Launches</li>
              <li>End-to-End Guidance from Booking to Handover</li>
              <li>Transparent Process & Market Insights</li>
              <li>Expert Investment Strategy</li>
            </ul>
          </section>

          {/* Contact Details */}
          <section className="max-w-4xl mx-auto py-12 px-4">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Contact Us</h2>
            <div className="bg-white p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Alpha Ahead Real Estate</h3>
                  <div className="space-y-3 text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                    <div>Office 1005, Business Bay, Dubai, UAE</div>
                    <div>+971 50 560 6877</div>
                    <div>info@alphaahead.ae</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Working Hours</h3>
                  <div className="space-y-2 text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                    <div>Monday – Friday: 09:00 AM – 07:00 PM</div>
                    <div>Saturday – Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default DeyaarPage;