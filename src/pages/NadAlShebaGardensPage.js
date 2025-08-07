import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    title: 'Modern Living',
    description: 'Experience contemporary living in harmony with nature at Nad Al Sheba Gardens. Each residence is thoughtfully designed to maximize comfort while embracing the surrounding natural beauty.',
    icon: '🏠'
  },
  {
    title: 'Natural Splendour',
    description: 'Immerse yourself in lush greenery and carefully landscaped gardens that create a serene environment perfect for relaxation and outdoor activities.',
    icon: '🌿'
  },
  {
    title: 'Convenient Location',
    description: 'Strategically positioned with excellent connectivity to Dubai\'s major attractions, offering the perfect balance of tranquility and accessibility.',
    icon: '📍'
  },
  {
    title: 'Designed to be Different',
    description: 'Each aspect of Nad Al Sheba Gardens is crafted with unique attention to detail, creating a community that stands apart from conventional developments.',
    icon: '✨'
  }
];

const destinations = [
  {
    title: 'Running Tracks',
    description: 'Stay active with dedicated running tracks that wind through the community, offering scenic routes for jogging and walking enthusiasts.',
    image: '/Meraas/NASG/NASG Destination- Running Tracks.jpg'
  },
  {
    title: 'Sports Facilities',
    description: 'Access world-class sports facilities including tennis courts, basketball courts, and fitness centers designed to keep residents active and healthy.',
    image: '/Meraas/NASG/NASG Destination- Sports Facilities.jpg'
  },
  {
    title: 'Wave Pools',
    description: 'Enjoy the unique experience of wave pools that provide year-round aquatic entertainment for residents of all ages.',
    image: '/Meraas/NASG/NASG Destination- Wave Pools.jpg'
  }
];

const faqs = [
  { 
    q: 'What makes Nad Al Sheba Gardens unique?', 
    a: 'Nad Al Sheba Gardens offers modern living in natural splendour, with thoughtfully designed residences surrounded by lush greenery and world-class amenities. The development is strategically located with excellent connectivity while maintaining a tranquil, nature-inspired setting.' 
  },
  { 
    q: 'What types of properties are available?', 
    a: 'Nad Al Sheba Gardens features contemporary residences including 3-bedroom townhouses and apartments, all designed to maximize comfort and embrace the surrounding natural beauty.' 
  },
  { 
    q: 'What amenities are included?', 
    a: 'The development includes running tracks, sports facilities, wave pools, lush gardens, fitness centers, and various recreational facilities designed for an active lifestyle.' 
  },
  { 
    q: 'How can I register my interest?', 
    a: 'You can register your interest through our contact form or by calling our dedicated team. We\'ll guide you through the entire process and provide detailed information about available properties.' 
  },
  { 
    q: 'What is the location like?', 
    a: 'Nad Al Sheba Gardens is strategically positioned with excellent connectivity to Dubai\'s major attractions, offering the perfect balance of tranquility and accessibility to key destinations.' 
  },
  { 
    q: 'Are there payment plans available?', 
    a: 'Yes, flexible payment plans are available for Nad Al Sheba Gardens. Our team can provide detailed information about available options and guide you through the purchasing process.' 
  },
];

export default function NadAlShebaGardensPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center bg-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="/Meraas/NASG/NASG Master Development Page Intro Image - 706x581.jpg"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onError={(e) => console.log('Video error:', e)}
          >
            <source src="/Meraas/NASG/NASG-1920x1080-WEB Stack Video_0.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white font-serif drop-shadow-lg">Nad Al Sheba Gardens</h1>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-sm font-bold text-gray-600 mb-2">INTRODUCING</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nad Al Sheba Gardens</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Experience modern living in natural splendour at Nad Al Sheba Gardens. This thoughtfully designed community offers contemporary residences surrounded by lush greenery and world-class amenities. Each aspect is crafted with unique attention to detail, creating a neighborhood that stands apart from conventional developments.
              </p>
              <button className="mt-8 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">Visit Microsite</button>
            </div>
            <div className="relative">
              <img src="/Meraas/NASG/NASG Master Development Page Intro Image - 706x581.jpg" alt="Nad Al Sheba Gardens" className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Designed for Modern Living</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nad Al Sheba Gardens combines contemporary design with natural beauty, creating a community where residents can enjoy the best of both worlds. With excellent connectivity and thoughtfully planned amenities, every detail is designed to enhance your lifestyle.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/Meraas/NASG/NASG Top Gallery image 1 - Modern living in natural splendour 880x860.jpg" alt="Modern Living" className="w-full h-64 object-cover rounded-lg" />
              <img src="/Meraas/NASG/NASG Top Gallery image 2 -  Convenient location 880x860.jpg" alt="Convenient Location" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-gray-600 mb-2">LOCATION</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Find the Master Development on the Map</h2>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1787890123456!2d55.12345678901234!3d25.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzM0LjQiTiA1NcKwMDcnMzQuNCJF!5e0!3m2!1sen!2sae!4v1234567890123&style=feature:all|element:geometry|color:0xf5f5f5&style=feature:all|element:labels.text.fill|color:0x616161&style=feature:all|element:labels.text.stroke|color:0xf5f5f5&style=feature:landscape|element:geometry|color:0xf5f5f5&style=feature:landscape.man_made|element:geometry|color:0xe0e0e0&style=feature:poi|element:geometry|color:0xeeeeee&style=feature:poi|element:labels.text.fill|color:0x757575&style=feature:road|element:geometry|color:0xffffff&style=feature:road|element:geometry.stroke|color:0xeeeeee&style=feature:road|element:labels.text.fill|color:0x757575&style=feature:road.highway|element:geometry|color:0xfafafa&style=feature:road.highway|element:geometry.stroke|color:0xeeeeee&style=feature:road.highway|element:labels.text.fill|color:0x616161&style=feature:transit|element:geometry|color:0xe5e5e5&style=feature:transit|element:labels.text.fill|color:0x9e9e9e&style=feature:water|element:geometry|color:0xc9c9c9&style=feature:water|element:labels.text.fill|color:0x9e9e9e"
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Nad Al Sheba Gardens Location"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <h3 className="font-semibold text-gray-900 mb-2">Nad Al Sheba Gardens</h3>
                <p className="text-sm text-gray-600 mb-2">Master Development</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>📍 Near Nad Al Sheba</p>
                  <p>📍 Close to Emirates Rd</p>
                  <p>📍 Adjacent to Meydan</p>
                  <p>📍 Near Dubai Silicon Oasis</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Distance to Dubai Mall</h4>
                <p className="text-gray-600">~20 minutes</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Distance to Airport</h4>
                <p className="text-gray-600">~25 minutes</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Distance to Beach</h4>
                <p className="text-gray-600">~15 minutes</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Destination Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Destination</h2>
          </div>
          
          {/* Running Tracks - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img src="/Meraas/NASG/NASG Destination- Running Tracks.jpg" alt="Running Tracks" className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Running Tracks</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Stay active with dedicated running tracks that wind through the community, offering scenic routes for jogging and walking enthusiasts. The tracks are designed to provide both challenging workouts and leisurely strolls through the natural surroundings.
              </p>
            </div>
          </div>

          {/* Sports Facilities - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sports Facilities</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Access world-class sports facilities including tennis courts, basketball courts, and fitness centers designed to keep residents active and healthy. The facilities are available for all skill levels and provide a perfect environment for both individual and team sports.
              </p>
            </div>
            <div className="relative">
              <img src="/Meraas/NASG/NASG Destination- Sports Facilities.jpg" alt="Sports Facilities" className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>

          {/* Wave Pools - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="/Meraas/NASG/NASG Destination- Wave Pools.jpg" alt="Wave Pools" className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wave Pools</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Enjoy the unique experience of wave pools that provide year-round aquatic entertainment for residents of all ages. The pools are designed to create a beach-like atmosphere while offering safe and enjoyable water activities.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
            <p className="text-lg text-gray-700">Explore Nad Al Sheba Gardens through our stunning photography</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/NASG/880x860-1.jpg" alt="Nad Al Sheba Gardens Overview" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Modern Living</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/NASG/880x860-2.jpg" alt="Natural Splendour" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Natural Splendour</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/NASG/880x860-3.jpg" alt="Convenient Location" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Convenient Location</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/NASG/880x860-4.jpg" alt="Designed to be Different" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Designed to be Different</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/NASG/NASG 3-Bedroom Townhouse.jpg" alt="3-Bedroom Townhouse" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">3-Bedroom Townhouse</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/NASG/NASG-Listing Image.jpg" alt="Project Overview" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Project Overview</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Masterplan Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">MASTERPLAN</h2>
            <p className="text-lg text-gray-700 mb-8">Explore the Blueprint of the Master Development</p>
                         <div className="flex justify-center mb-8">
               <a 
                 href="/Meraas/NASG/NASG-Phase-10-Master-Plan-D_0.jpg" 
                 download
                 className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors duration-200 inline-flex items-center space-x-2"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 <span>Download Masterplan Image</span>
               </a>
             </div>
          </div>
          
          <div className="bg-white">
            <div className="relative">
              <img 
                src="/Meraas/NASG/NASG-Phase-10-Master-Plan-D_0.jpg" 
                alt="Nad Al Sheba Gardens Master Plan" 
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900">Nad Al Sheba Gardens Master Plan</h3>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="bg-gray-50 p-4 text-xs text-gray-600">
              <p>
                **Disclaimer: The interior and exterior finishes displayed in this tool are for illustrative purposes only. The actual finishes may vary significantly from what is shown here. All furniture used is also for illustration only. Refer to the project's photos and videos available on our website for a more realistic representation of the finishes of the units.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="max-w-4xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Register your interest for Nad Al Sheba Gardens</h2>
          </div>
          <form className="bg-white p-8 border border-gray-200 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First name (as per passport)*" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
              <input type="text" placeholder="Last name (as per passport)*" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
              <input type="email" placeholder="Email*" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">+971</div>
                <input type="tel" placeholder="Phone Number*" className="px-4 py-3 pl-12 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black w-full" />
              </div>
              <select className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black">
                <option value="">What's the purpose of buying?*</option>
                <option value="investment">Investment</option>
                <option value="residence">Residence</option>
                <option value="rental">Rental</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black">
                <option value="">How soon are you looking to buy?*</option>
                <option value="immediately">Immediately</option>
                <option value="3-months">Within 3 months</option>
                <option value="6-months">Within 6 months</option>
                <option value="1-year">Within 1 year</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black">
                <option value="">Number of bedrooms*</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5+">5+ Bedrooms</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black">
                <option value="">Are you assisted by a broker?*</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mt-6">
              <label className="flex items-start space-x-2 text-sm text-gray-700">
                <input type="checkbox" className="mt-1" />
                <span>By accepting and providing my personal information I am consenting to Meraas Privacy Policy, as well as the applicable data protection laws.*</span>
              </label>
            </div>
            <button type="submit" className="w-full mt-8 px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200">REGISTER INTEREST</button>
          </form>
        </section>

        {/* Why Invest Section */}
        <section className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Why Choose Nad Al Sheba Gardens?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Modern Living</h3>
              <p>Experience contemporary living in harmony with nature, with thoughtfully designed residences that maximize comfort and embrace the surrounding natural beauty.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Natural Splendour</h3>
              <p>Immerse yourself in lush greenery and carefully landscaped gardens that create a serene environment perfect for relaxation and outdoor activities.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Convenient Location</h3>
              <p>Strategically positioned with excellent connectivity to Dubai's major attractions, offering the perfect balance of tranquility and accessibility.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Designed to be Different</h3>
              <p>Each aspect of Nad Al Sheba Gardens is crafted with unique attention to detail, creating a community that stands apart from conventional developments.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Frequently Asked Questions</h2>
          <div className="space-y-4">
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
                  <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div id={`faq-${index}`} className="hidden px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
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