import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const features = [
  {
    title: 'Arrival Garden',
    description: 'Walk into The Acres, where palm tree-lined boulevards extend the warmest of welcomes. Here, you\'ll find the forest theatre, where nature and art meet, and the mosque plaza that sets the tone of peace. Each step in the Arrival Garden offers a calming glimpse into the greater environment that awaits within The Acres.',
    icon: '🌳'
  },
  {
    title: 'Village Garden',
    description: 'Immerse yourself in the bustling ripe markets, discovering the fresh, flavourful treats. Soothe your senses by the waterfront seating and meander along the retail promenade. In the Village Garden, every corner tells a tale of community, recreation, and natural charm.',
    icon: '🏘️'
  },
  {
    title: 'Lagoon Garden',
    description: 'In the singular calmness of The Acres\' lagoons, water becomes a canvas for both leisure and play. Nestled within this aquatic playground are swimmable lagoons and floating decks inviting you for a refreshing dip all year round.',
    icon: '🏊'
  },
  {
    title: 'Nature Garden',
    description: 'Step into a scene of conservation, where the wetlands and natural ponds offer nature\'s finer treasures. Relax in the wellness garden and take leisurely strolls along the dry wadi trails and wetland parks.',
    icon: '🌿'
  }
];

const faqs = [
  { q: 'What makes The Acres unique?', a: 'The Acres by Meraas offers bespoke villas surrounded by swimmable lagoons, lush greenery, and thoughtfully designed natural parks. It\'s a neighborhood unlike any other in Dubai, conveniently connected to a host of amenities for a completely luxurious living experience.' },
  { q: 'What types of properties are available?', a: 'The Acres features bespoke villas designed to blend seamlessly with the natural environment, offering luxury living with nature-inspired amenities.' },
  { q: 'What amenities are included?', a: 'The development includes swimmable lagoons, natural parks, retail promenades, wellness gardens, forest theatre, mosque plaza, and various recreational facilities.' },
  { q: 'How can I register my interest?', a: 'You can register your interest through our contact form or by calling our dedicated team. We\'ll guide you through the entire process.' },
  { q: 'What is the location like?', a: 'The Acres is strategically located with excellent connectivity to Dubai\'s major attractions and amenities, offering the perfect balance of tranquility and convenience.' },
  { q: 'Are there payment plans available?', a: 'Yes, Meraas offers flexible payment plans for The Acres. Our team can provide detailed information about available options.' },
];

export default function TheAcresPage() {
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
            poster="/Meraas/The Acres.jpg"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onError={(e) => console.log('Video error:', e)}
          >
            <source src="/Meraas/The Acres Hero Section.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white font-serif drop-shadow-lg">The Acres</h1>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-sm font-bold text-gray-600 mb-2">INTRODUCING</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Acres</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Immerse yourself in the beauty of nature at The Acres by Meraas, where bespoke villas are surrounded by swimmable lagoons, lush greenery, and thoughtfully designed natural parks. A neighborhood unlike any other in Dubai, The Acres is conveniently connected to a host of amenities for a completely luxurious living experience.
              </p>
              <button className="mt-8 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">Visit Microsite</button>
            </div>
            <div className="relative">
              <img src="/Meraas/The Acres.jpg" alt="The Acres Villa" className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* Surrounded by Nature Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Surrounded by Nature</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Strategically designed to surround the main park, The Acres has an expansive green network fostering natural beauty and recreation. Residents can stroll through the greenery woven throughout the community and be always connected to nature.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/Meraas/The Acres - LAGOON GARDEN.jpg" alt="The Acres Lagoon" className="w-full h-64 object-cover rounded-lg" />
              <img src="/Meraas/The Acres - NATURE GARDEN.jpg" alt="The Acres Community" className="w-full h-64 object-cover rounded-lg" />
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
                title="The Acres Location"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <h3 className="font-semibold text-gray-900 mb-2">The Acres</h3>
                <p className="text-sm text-gray-600 mb-2">Master Development</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>📍 Near Sheikh Zayed bin Hamdan Al Nahyan St</p>
                  <p>📍 Close to Emirates Rd</p>
                  <p>📍 Adjacent to Arabian Ranches</p>
                  <p>📍 Near Dubai Studio City</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Distance to Dubai Mall</h4>
                <p className="text-gray-600">~25 minutes</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Distance to Airport</h4>
                <p className="text-gray-600">~30 minutes</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Distance to Beach</h4>
                <p className="text-gray-600">~20 minutes</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Destination Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Destination</h2>
          </div>
          
          {/* Arrival Garden - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img src="/Meraas/The Acres - ARRIVAL GARDEN.jpg" alt="Arrival Garden" className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Arrival Garden</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Walk into The Acres, where palm tree-lined boulevards extend the warmest of welcomes. Here, you'll find the forest theatre, where nature and art meet, and the mosque plaza that sets the tone of peace. Each step in the Arrival Garden offers a calming glimpse into the greater environment that awaits within The Acres.
              </p>
            </div>
          </div>

          {/* Village Garden - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Village Garden</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Immerse yourself in the bustling ripe markets, discovering the fresh, flavourful treats. Soothe your senses by the waterfront seating and meander along the retail promenade. In the Village Garden, every corner tells a tale of community, recreation, and natural charm.
              </p>
            </div>
            <div className="relative">
              <img src="/Meraas/The Acres Project Page Listing Image.jpg.webp" alt="Village Garden" className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>

          {/* Lagoon Garden - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img src="/Meraas/The Acres - LAGOON GARDEN.jpg" alt="Lagoon Garden" className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lagoon Garden</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                In the singular calmness of The Acres' lagoons, water becomes a canvas for both leisure and play. Nestled within this aquatic playground are swimmable lagoons and floating decks inviting you for a refreshing dip all year round.
              </p>
            </div>
          </div>

          {/* Nature Garden - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nature Garden</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Step into a scene of conservation, where the wetlands and natural ponds offer nature's finer treasures. Relax in the wellness garden and take leisurely strolls along the dry wadi trails and wetland parks.
              </p>
            </div>
            <div className="relative">
              <img src="/Meraas/The Acres - NATURE GARDEN.jpg" alt="Nature Garden" className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
            <p className="text-lg text-gray-700">Explore The Acres through our stunning photography</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/The Acres.jpg" alt="The Acres Overview" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">The Acres Overview</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/The Acres - ARRIVAL GARDEN.jpg" alt="Arrival Garden" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Arrival Garden</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/The Acres - LAGOON GARDEN.jpg" alt="Lagoon Garden" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Lagoon Garden</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/The Acres - NATURE GARDEN.jpg" alt="Nature Garden" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Nature Garden</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/The Acres Project Page Listing Image.jpg.webp" alt="Project Listing" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Project Overview</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/Listing Image 768x432px.jpg.webp" alt="Listing Image" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Development View</h3>
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
                href="/Meraas/The Acres Master-Plan_compressed_0 (3).pdf" 
                download
                className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Masterplan PDF</span>
              </a>
            </div>
          </div>
          
          <div className="bg-white">
            <div className="relative">
              <img 
                src="/Meraas/The-Acres-Phases-Master-Plan_0.jpg" 
                alt="The Acres Master Plan" 
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900">The Acres Master Plan</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Register your interest for The Acres</h2>
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
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Why Choose The Acres?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Natural Living</h3>
              <p>Experience luxury living in harmony with nature, surrounded by swimmable lagoons and lush greenery.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Bespoke Villas</h3>
              <p>Custom-designed villas that blend seamlessly with the natural environment and offer premium finishes.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Community Amenities</h3>
              <p>Access to world-class amenities including retail promenades, wellness gardens, and recreational facilities.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Strategic Location</h3>
              <p>Conveniently connected to Dubai's major attractions while maintaining a tranquil, nature-inspired setting.</p>
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
    </div>
  );
} 