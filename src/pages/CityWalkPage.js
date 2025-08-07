import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const faqs = [
  {
    q: "What makes City Walk unique?",
    a: "City Walk is a creative lifestyle space that combines international retail, gourmet restaurants, luxurious residences, and hotels in the heart of Dubai. It offers cutting-edge design with modern conveniences and easy connectivity."
  },
  {
    q: "What entertainment options are available?",
    a: "City Walk features The Green Planet bio-dome, Roxy Cinema, NoWayOut Escape Room, Brass Monkeys for bowling and games, and the 17,000 capacity Coca-Cola Arena for major events and performances."
  },
  {
    q: "What healthcare facilities are available?",
    a: "Residents have access to comprehensive medical services including paediatricians, dermatologists, dental professionals, and general clinics, all conveniently located within the community."
  },
  {
    q: "What educational opportunities are there?",
    a: "The Canadian University of Dubai (CUD) is located in the heart of City Walk, offering undergraduate and graduate degree programs with opportunities for study and work experience in Canada."
  },
  {
    q: "What retail options are available?",
    a: "City Walk offers international fashion, accessories, jewellery, shoe shops, fresh blooms, modern homeware, and an extensive array of restaurants from casual eateries to fine dining options."
  }
];

export default function CityWalkPage() {
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
          poster="/Meraas/City Walk/City Walk MD Listing Image – 1.jpg"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          onError={(e) => console.log('Video error:', e)}
        >
          <source src="/Meraas/City Walk/Citywalk-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white font-serif drop-shadow-lg">City Walk</h1>
        </div>
      </section>

      {/* Introducing Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{fontFamily: 'Roboto, sans-serif'}}>Introducing City Walk</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              City Walk is a creative lifestyle space to live, work, and play in the heart of Dubai. This upscale destination boasts a fusion of international retail offerings, gourmet restaurants, luxurious residences, and hotels, blending cutting-edge design with modern conveniences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Drawing inspiration from the vibrancy of urban living and easy connectivity, City Walk has evolved into one of the city's most distinguished and recognisable neighbourhoods.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/Meraas/City Walk/City Walk MD Listing Image – 1.jpg" 
              alt="City Walk Overview" 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Cityscape Oasis Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{fontFamily: 'Roboto, sans-serif'}}>Cityscape Oasis</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Imagine waking up in the heart of the city but opening your curtains and seeing nothing but lush greenery, with a backdrop of the magnificent Dubai skyline. This is urban living with a side of serenity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src="/Meraas/City Walk/Citywalk - TG -3 (2).jpg" 
                  alt="City Walk Boulevard" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="relative">
                <img 
                  src="/Meraas/City Walk/Citywalk - TG -4 (2).jpg" 
                  alt="City Walk Building" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button className="absolute bottom-4 right-4 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{fontFamily: 'Roboto, sans-serif'}}>Location</h2>
          <p className="text-lg text-gray-700">Find the Master Development on the Map</p>
        </div>
        
        <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1787890123456!2d55.12345678901234!3d25.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzM0LjQiTiA1NcKwMDcnMzQuNCJF!5e0!3m2!1sen!2sae!4v1234567890123&style=feature:all|element:geometry|color:0xf5f5f5&style=feature:all|element:labels.text.fill|color:0x616161&style=feature:all|element:labels.text.stroke|color:0xf5f5f5&style=feature:landscape|element:geometry|color:0xf5f5f5&style=feature:landscape.man_made|element:geometry|color:0xe0e0e0&style=feature:poi|element:geometry|color:0xeeeeee&style=feature:poi|element:labels.text.fill|color:0x757575&style=feature:road|element:geometry|color:0xffffff&style=feature:road|element:geometry.stroke|color:0xeeeeee&style=feature:road|element:labels.text.fill|color:0x757575&style=feature:road.highway|element:geometry|color:0xfafafa&style=feature:road.highway|element:geometry.stroke|color:0xeeeeee&style=feature:road.highway|element:labels.text.fill|color:0x616161&style=feature:transit|element:geometry|color:0xe5e5e5&style=feature:transit|element:labels.text.fill|color:0x9e9e9e&style=feature:water|element:geometry|color:0xc9c9c9&style=feature:water|element:labels.text.fill|color:0x9e9e9e"
            width="100%"
            height="100%"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="City Walk Location"
            className="absolute inset-0"
          ></iframe>
          
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-2">City Walk</h3>
            <p className="text-sm text-gray-700">Al Safa Street, Dubai</p>
            <p className="text-xs text-gray-500 mt-1">• 10 min to Dubai Mall</p>
            <p className="text-xs text-gray-500">• 15 min to Dubai International Airport</p>
            <p className="text-xs text-gray-500">• 5 min to Sheikh Zayed Road</p>
          </div>
        </div>
      </section>

      {/* The Destination Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{fontFamily: 'Roboto, sans-serif'}}>The Destination</h2>
        </div>
        
        {/* Retail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Retail</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A world class shopping experience awaits at City Walk. Find international fashion and accessories, jewellery, shoe shops, fresh blooms and modern homeware in an indoor-outdoor space drenched with light.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              From the best coffee shops and casual eateries in town to fine dining options, the extensive array of restaurants in City Walk brings cuisine from across the world.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/Meraas/City Walk/Retail.png" 
              alt="City Walk Retail" 
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Healthcare Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="lg:order-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Healthcare</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              City Walk residents and visitors have access to a comprehensive range of medical, healthcare, and wellbeing services. From paediatricians to dermatologists, dental professionals to general clinics.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              The care you need is on your doorstep, and just moments away in case of emergency.
            </p>
          </div>
          <div className="lg:order-1 relative">
            <img 
              src="/Meraas/City Walk/City Walk- Healthcare.jpg" 
              alt="City Walk Healthcare" 
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* University Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">University</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Located in the heart of City Walk, the Canadian University of Dubai (CUD) offers local and regional students a stunning opportunity to learn in Dubai and to gain study and work experience in Canada.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              A range of undergraduate and graduate degree programs are available.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/Meraas/City Walk/City Walk- University.jpg" 
              alt="City Walk University" 
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Entertainment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Entertainment</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              There is something for everyone at City Walk. The Green Planet is a bio-dome that invites visitors to explore our planet's fascinating flora and fauna from the tropics.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              For the young at heart, there is Roxy Cinema, NoWayOut Escape Room, plus bowling, darts and arcade games at Brass Monkeys. The highlight is the 17,000 capacity Coca-Cola Arena.
            </p>
          </div>
          <div className="lg:order-1 relative">
            <img 
              src="/Meraas/City Walk/25_Villa Aerial (1) 9.png" 
              alt="City Walk Entertainment" 
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
          <p className="text-lg text-gray-700">Explore City Walk through our stunning photography</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-lg">
            <img src="/Meraas/City Walk/City Walk MD Listing Image – 1.jpg" alt="City Walk Overview" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white font-semibold text-lg">City Walk Overview</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img src="/Meraas/City Walk/Retail.png" alt="Retail District" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white font-semibold text-lg">Retail District</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img src="/Meraas/City Walk/City Walk- Healthcare.jpg" alt="Healthcare Facilities" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white font-semibold text-lg">Healthcare Facilities</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img src="/Meraas/City Walk/City Walk- University.jpg" alt="University Campus" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white font-semibold text-lg">University Campus</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img src="/Meraas/City Walk/25_Villa Aerial (1) 9.png" alt="Entertainment" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white font-semibold text-lg">Entertainment</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img src="/Meraas/City Walk/Citywalk Residences Project Listing Image.jpg.webp" alt="Project Overview" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
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
                href="/Meraas/City Walk/CityWalk-Master-Plan_3.pdf" 
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
              src="/Meraas/City Walk/CityWalk-Master-Plan_3.jpg" 
              alt="City Walk Master Plan" 
              className="w-full h-auto"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900">City Walk Master Plan</h3>
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
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-gray-900 mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>Register Your Interest</h2>
            <p className="text-lg text-gray-700">Join the exclusive City Walk community</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First name (as per passport)*" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
              <input type="text" placeholder="Last name (as per passport)*" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            </div>
            <input type="email" placeholder="Email*" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">+971</div>
              <input type="tel" placeholder="Phone Number*" className="px-4 py-3 pl-12 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black w-full" />
            </div>
            <select className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black">
              <option value="">Select a project</option>
              <option value="city-walk-residences">City Walk Residences</option>
              <option value="city-walk-villas">City Walk Villas</option>
              <option value="city-walk-apartments">City Walk Apartments</option>
            </select>
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
            <div className="mt-6">
              <label className="flex items-start space-x-2 text-sm text-gray-700">
                <input type="checkbox" className="mt-1" />
                <span>By accepting and providing my personal information I am consenting to Meraas Privacy Policy, as well as the applicable data protection laws.*</span>
              </label>
            </div>
            <button type="submit" className="w-full mt-8 px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200">REGISTER INTEREST</button>
          </form>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="max-w-4xl mx-auto mb-20 px-4">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Why Choose City Walk?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold mb-3">Creative Lifestyle</h3>
            <p>Experience a unique blend of living, working, and playing in the heart of Dubai with cutting-edge design and modern conveniences.</p>
          </div>
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold mb-3">World-Class Amenities</h3>
            <p>Access to international retail, gourmet restaurants, healthcare facilities, educational institutions, and entertainment venues.</p>
          </div>
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold mb-3">Strategic Location</h3>
            <p>Located in the heart of Dubai with easy connectivity to major attractions, business districts, and transportation hubs.</p>
          </div>
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold mb-3">Entertainment Hub</h3>
            <p>Home to The Green Planet, Roxy Cinema, NoWayOut Escape Room, and the iconic 17,000 capacity Coca-Cola Arena.</p>
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

      {/* Footer */}
      <Footer />
    </div>
  );
} 