import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const coreServices = [
  {
    title: 'Luxury Residential Properties',
    description: 'Explore an exclusive portfolio of premium villas, apartments, and townhouses in Dubai\'s most prestigious communities.',
    icon: '🏠',
    image: '/images/pexels-alexazabache-3254725.jpg'
  },
  {
    title: 'Off-Plan Investments',
    description: 'Gain early access to exciting off-plan developments with flexible payment plans and high ROI potential.',
    icon: '📈',
    image: '/images/pexels-mo-ismail-2130628-3763190.jpg'
  },
  {
    title: 'Sales & Leasing',
    description: 'Our comprehensive property services include expert sales and leasing solutions, as well as professional property management to protect and grow your assets.',
    icon: '🏢',
    image: '/images/pexels-amar-saleem-15661-70441.jpg'
  },
  {
    title: 'Investment Consulting',
    description: 'Receive expert guidance on market trends, in-depth ROI analysis, and strategic investment planning to make informed decisions that align with your financial objectives.',
    icon: '💼',
    image: '/images/pexels-pranjalsrivastava9-2403251.jpg'
  }
];

const faqs = [
  {
    q: 'What types of properties does Alpha Ahead Estate specialize in?',
    a: 'We specialize in a wide range of properties, including luxury residential properties, off-plan developments, and commercial real estate across Dubai\'s most desirable communities.'
  },
  {
    q: 'How can Alpha Ahead Estate help me with off-plan investments?',
    a: 'We provide exclusive access to new and upcoming projects from top developers. Our team will guide you through the process, from selecting the right project to understanding payment plans and assessing the potential for high ROI.'
  },
  {
    q: 'Do you offer services for international clients?',
    a: 'Yes, we have extensive experience working with international clients. We can assist with all aspects of the process, including legal procedures, financial advice, and property management, making your investment in Dubai simple and secure.'
  },
  {
    q: 'What is the process for selling my property with Alpha Ahead Estate?',
    a: 'Our sales process is transparent and efficient. We start with a professional valuation of your property, followed by a targeted marketing strategy to attract qualified buyers, and expert negotiation to secure the best possible price.'
  },
  {
    q: 'How do you help clients with investment consulting?',
    a: 'Our investment consulting services are data-driven and personalized. We analyze market trends, conduct detailed ROI analysis, and provide strategic advice to help you build a profitable real estate portfolio that meets your financial goals.'
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
    <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero Section with Image Background */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Image Background */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: 'url("/Aboutus/Hero Section.jpg")' }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
          
          {/* Content */}
          <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>About Us</h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Discover the story behind Alpha Ahead Real Estate Brokerage
            </p>
          </div>
        </section>

        {/* About Section with Image */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Alpha Ahead Real Estate Brokerage</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Alpha Ahead Real Estate Brokerage is a team of dedicated professionals with a passion for connecting clients with their ideal properties in Dubai.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                We have a deep understanding of the city's dynamic real estate landscape and are committed to providing personalized, data-driven solutions tailored to your unique goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Whether you are a first-time buyer, a seasoned investor, or looking for your dream home, we are here to guide you every step of the way. Our commitment to excellence has earned us recognition, and we pride ourselves on a client-first approach, expert advice, and comprehensive services that ensure a seamless and rewarding experience.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/Aboutus/pexels-maxavans-5087055.jpg" 
                alt="Dubai Real Estate" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Core Services Section with Images */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Our Core Services</h2>
            <p className="text-lg text-gray-700 mb-8 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              We offer a full suite of services designed to meet all your real estate needs in Dubai:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => {
              // Use different images from Aboutus folder for each service
              const serviceImages = [
                '/Aboutus/pexels-maxavans-5087055.jpg', // Luxury Residential Properties
                '/Aboutus/pexels-apasaric-1497417.jpg', // Off-Plan Investments
                '/Aboutus/pexels-kirandeepsingh-9897408.jpg', // Sales & Leasing
                '/Aboutus/pexels-maxavans-5075081.jpg' // Investment Consulting
              ];
              
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={serviceImages[index]} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                  <div className="p-8">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-light text-gray-900 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Awards Section with Image */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>We were honored to receive</h2>
                <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Emaar Q1 Broker Awards 2024</h3>
                  <p className="text-xl font-medium text-gray-700 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Top 20 Agency Recognition</p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  This achievement is a testament to our core values: a Client-First Approach, a team of Expert Agents, and Full-Service Coverage that ensures all your needs are met under one roof.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/Aboutus/pexels-apasaric-1497417.jpg" 
                  alt="Emaar Awards" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Our Team</h2>
            <p className="text-lg text-gray-700 mb-8 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Meet the dedicated professionals behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/Aboutus/pexels-maxavans-5075081.jpg" 
                  alt="Real Estate Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-light text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Expert Agents</h3>
                <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Our team of certified professionals brings years of experience and deep market knowledge to every transaction.</p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/Aboutus/pexels-kirandeepsingh-9897408.jpg" 
                  alt="Investment Consultant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-light text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Investment Specialists</h3>
                <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Strategic advisors who help you make informed decisions for maximum returns on your real estate investments.</p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/Aboutus/pexels-maxavans-5087055.jpg" 
                  alt="Property Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-light text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Property Managers</h3>
                <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Dedicated professionals who ensure your properties are well-maintained and profitable year-round.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Frequently Asked Questions (FAQs)</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => {
                    const faqElement = document.getElementById(`faq-${index}`);
                    if (faqElement) {
                      faqElement.classList.toggle('hidden');
                    }
                  }}
                >
                  <h3 className="text-lg font-medium text-gray-900 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{faq.q}</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div id={`faq-${index}`} className="hidden px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
  </div>
);
}