import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const faqs = [
  {
    q: 'What is an off-plan property in Dubai?',
    a: 'An off-plan property is a property that is purchased before it is constructed or completed. Buyers benefit from lower prices, flexible payment plans, and potential capital appreciation.'
  },
  {
    q: 'What\'s the ROI on real estate investments?',
    a: 'Dubai real estate typically offers ROI between 6–10% annually, depending on location, property type, and market conditions.'
  },
  {
    q: 'How can I buy property as a non-resident?',
    a: 'Non-residents can buy property in Dubai in designated freehold areas. The process is straightforward and we guide you through every step.'
  },
  {
    q: 'Can I resell my off-plan unit before handover?',
    a: 'Yes, subject to the developer\'s terms and the payment plan progress. Many developers allow resale after a certain percentage is paid.'
  },
  {
    q: 'What are the payment plans available?',
    a: 'Developers offer flexible payment plans, often with low booking amounts and post-handover installments. We help you find the best plan for your needs.'
  },
];

function ContactPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', purpose: '', budget: '', message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('Sending...');

    const scriptURL = "https://script.google.com/macros/s/AKfycbzPXzXW47zFtb6qbRM-TsaRVlgemNQkS4EH-a7Y6Owxllm1ZMNXYTTfi52s21a-nAQq/exec";

    // Create form data with all fields including timestamp
    const formData = new FormData();
    formData.append("name", form.name || '');
    formData.append("email", form.email || '');
    formData.append("phone", form.phone || '');
    formData.append("city", form.city || '');
    formData.append("purpose", form.purpose || '');
    formData.append("budget", form.budget || '');
    formData.append("message", form.message || '');
    formData.append("timestamp", new Date().toISOString());

    // Log the data being sent for debugging
    console.log('Sending form data:', {
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      purpose: form.purpose,
      budget: form.budget,
      message: form.message,
      timestamp: new Date().toISOString()
    });

    try {
      // First attempt with FormData
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: 'no-cors',
        body: formData,
      });

      // If that fails, try with URLSearchParams
      if (!response.ok) {
        const urlParams = new URLSearchParams();
        urlParams.append("name", form.name || '');
        urlParams.append("email", form.email || '');
        urlParams.append("phone", form.phone || '');
        urlParams.append("city", form.city || '');
        urlParams.append("purpose", form.purpose || '');
        urlParams.append("budget", form.budget || '');
        urlParams.append("message", form.message || '');
        urlParams.append("timestamp", new Date().toISOString());

        await fetch(scriptURL, {
          method: "POST",
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: urlParams,
        });
      }

      setResponseMessage('✅ Message sent successfully!');
      setForm({ name: '', email: '', phone: '', city: '', purpose: '', budget: '', message: '' });
      
    } catch (err) {
      console.error("Error submitting form", err);
      setResponseMessage('⚠️ Error submitting form. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar activePage="contact" />
      {/* Hero Section */}
      <section className="relative bg-cover bg-center min-h-screen flex items-center justify-center" style={{backgroundImage: "url('/bg1.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-white text-5xl md:text-6xl font-light mb-4 text-center font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Contact Us</h1>
          <p className="text-white text-xl md:text-2xl font-light text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Let's Connect and Build Your Dream Investment Together</p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Ready to start your real estate journey? Our expert team is here to guide you through every step of your investment process.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-light mb-8 text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Alpha Ahead Estates</h3>
              
        <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Office Address</h4>
                    <p className="text-white/90 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>1005, Oxford Tower<br/>Business Bay – Dubai, UAE</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Phone Number</h4>
                    <a href="tel:+971507005884" className="text-white/90 hover:text-accent transition-colors duration-200 text-lg font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                      +971 50 700 5884
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Email Address</h4>
                    <a href="mailto:info@alphaahead.com" className="text-white/90 hover:text-accent transition-colors duration-200 text-lg font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                      info@alphaahead.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Business Hours</h4>
                    <p className="text-white/90 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Monday – Friday<br/>10:00 AM – 7:00 PM</p>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Parking</h4>
                    <p className="text-white/90 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Visitor Parking Available</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold text-lg mb-4 text-center">Follow Us</h4>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/company/alpha-ahead-estates/" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-accent transition-all duration-200 group">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/alphaaheadestates/" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-accent transition-all duration-200 group">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                    <input 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      required 
                      type="text" 
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-accent focus:bg-white transition-all duration-200 placeholder-gray-400" 
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                    <input 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      required 
                      type="email" 
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-accent focus:bg-white transition-all duration-200 placeholder-gray-400" 
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                    <input 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleChange} 
                      required 
                      type="tel" 
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-accent focus:bg-white transition-all duration-200 placeholder-gray-400" 
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">City</label>
                    <input 
                      name="city" 
                      value={form.city} 
                      onChange={handleChange} 
                      type="text" 
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-accent focus:bg-white transition-all duration-200 placeholder-gray-400" 
                      placeholder="Enter your city"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Purpose of Buying Property</label>
                    <select 
                      name="purpose" 
                      value={form.purpose} 
                      onChange={handleChange} 
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-accent focus:bg-white transition-all duration-200"
                    >
                      <option value="">Select purpose</option>
                      <option value="Investment">Investment</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Holiday Home">Holiday Home</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Investment Budget</label>
                    <select 
                      name="budget" 
                      value={form.budget} 
                      onChange={handleChange} 
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-accent focus:bg-white transition-all duration-200"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under 500K AED">Under 500K AED</option>
                      <option value="500K - 1M AED">500K - 1M AED</option>
                      <option value="1M - 2M AED">1M - 2M AED</option>
                      <option value="2M - 5M AED">2M - 5M AED</option>
                      <option value="5M+ AED">5M+ AED</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    rows={4} 
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-accent focus:bg-white transition-all duration-200 placeholder-gray-400 resize-none" 
                    placeholder="Tell us about your requirements and any specific questions you have..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-gray-800 hover:to-black transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
                
                {responseMessage && (
                  <div className={`rounded-xl p-4 text-center ${
                    responseMessage.includes('✅') 
                      ? 'bg-green-50 border border-green-200 text-green-700' 
                      : responseMessage.includes('❌') 
                      ? 'bg-red-50 border border-red-200 text-red-700'
                      : 'bg-yellow-50 border border-yellow-200 text-yellow-700'
                  }`}>
                    <div className="flex items-center justify-center space-x-2">
                      {responseMessage.includes('✅') && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      )}
                      {responseMessage.includes('❌') && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      )}
                      {responseMessage.includes('⚠️') && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                        </svg>
                      )}
                      <span className="font-semibold">{responseMessage}</span>
                    </div>
                    {responseMessage.includes('✅') && (
                      <p className="mt-2">We'll get back to you within 24 hours.</p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="w-full flex justify-center my-20">
        <div className="w-full max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Business Bay, Dubai's premier business district</p>
          </div>
          <div className="rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.010073964479!2d55.27218731501044!3d25.1840499838997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433b2e2e2e2f%3A0x2e2e2e2e2e2e2e2e!2sOxford%20Tower%2C%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alpha Ahead Estates Office Map"
            className="w-full h-[300px] md:h-[400px] object-cover object-center"
          ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about real estate investment in Dubai</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
              <button
                className="w-full flex justify-between items-center px-8 py-6 text-lg font-semibold text-gray-900 text-left focus:outline-none hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                aria-expanded={faqOpen === idx}
              >
                <span className="pr-4">{faq.q}</span>
                <svg className={`w-6 h-6 transition-transform duration-200 ${faqOpen === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {faqOpen === idx && (
                <div className="px-8 pb-6 text-gray-600 text-base leading-relaxed animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ContactPage; 