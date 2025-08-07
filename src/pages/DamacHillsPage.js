import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DamacHillsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    whatsappUpdates: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="/damac/Damac Hills/DAMAC_Hills-Homepage_Hero_16x9.jpg"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onError={(e) => console.log('Video error:', e)}
          >
            <source src="/damac/Damac Hills/Damac_Hills_Hero_video__16X9_.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>DAMAC HILLS</h1>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>ABOUT DAMAC HILLS</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Surrounded by lush parkland and a championship golf course, residents enjoy world-class retail, dining, and branded residences like the prestigious Trump Estates and Hollywood-inspired homes. Families thrive here with endless experiences, where each day unveils something new, and every moment becomes a testament to refined living and cherished memories.
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏘️</div>
              <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>MASTER COMMUNITY</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>42 million sq.ft.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>VILLAS & TOWNHOUSES</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>3,386</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>RESIDENTIAL APARTMENTS</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>7,128</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">⛳</div>
              <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>TRUMP GOLF CLUB</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Championship Course</p>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>A WORLD OF AMENITIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-00.jpg" alt="Trump Golf Club" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Trump International Golf Club Dubai</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Complementing the magnificent golf course, the 30,000 sq.ft luxury clubhouse offers an infinity pool, upscale dining, and state-of-the-art facilities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-01.jpg" alt="Swimming Pool" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Swimming Pool</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Dive into our stunning pool for a refreshing splash, perfect for relaxation, fun, and leisure anytime, day or night.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Damac Hills/DAMAC-Hills-Amenities-3-Malibu-Bay-4x3.jpg" alt="Malibu Bay" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Malibu Bay</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Bringing the essence of California cool, this hotspot features a trendy wave pool, beach vibes, and ocean-like waves, perfect for fun or relaxing under the sun.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-02.jpg" alt="Tennis Courts" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Tennis Courts</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Serve up some fun on our top-notch tennis courts, ideal for players of all levels to enjoy a match in a beautiful setting.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-00.jpg" alt="Stables" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Stables</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Immerse yourself in the equestrian lifestyle with our stables. Discover a tranquil setting with easy access to scenic trails and riding adventures.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-01.jpg" alt="Fishing Lake" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Fishing Lake</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Find your peaceful escape by the water, where you can relax, cast a line, and create memories with loved ones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>WHERE COMMUNITY THRIVES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-00.jpg" alt="Skate Park" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Skate Park</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Designed with ramps, rails, and bowls for skaters of all levels, the skate park offers endless fun and challenges for everyone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-01.jpg" alt="Golf Course" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Golf Course</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Tee off on our world-class golf course with lush fairways, breath-taking views, and top-tier facilities for an unforgettable round every time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-02.jpg" alt="Community Centre" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>DAMAC Hills Community Centre</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Discover the heart of the community, a lively hub where families can shop, dine, and play, offering a vibrant space for connection and shared moments.</p>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>FIND YOUR HOME PORT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-00.jpg" alt="BelAir at The Trump Estates" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>BelAir at The Trump Estates</h3>
                <p className="text-gray-600 font-sans mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>Dubailand, Dubai</p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>EXPLORE</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-01.jpg" alt="Kiara at DAMAC Hills" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Kiara at DAMAC Hills</h3>
                <p className="text-gray-600 font-sans mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>Dubailand, Dubai</p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>EXPLORE</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Damac Hills/DAMAC_Hills-Gallery-02.jpg" alt="Utopia" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Utopia</h3>
                <p className="text-gray-600 font-sans mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>Dubailand, Dubai</p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>EXPLORE</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Where is the location of DAMAC HILLS Community?</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>DAMAC Hills is located in Dubailand, Dubai, offering easy access to major highways and key destinations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>What unit types are offered in DAMAC HILLS Community?</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>DAMAC Hills offers a variety of residential options including villas, townhouses, and apartments ranging from 1 to 4+ bedrooms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>What is DAMAC HILLS Community status?</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>DAMAC Hills is a fully developed master community with ongoing phases and new projects being launched regularly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>What is the nearest airport?</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Dubai International Airport (DXB) is approximately 25 minutes away, while Al Maktoum International Airport (DWC) is about 15 minutes away.</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Get in touch</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name *" 
              className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans" 
              style={{fontFamily: 'Roboto, sans-serif'}} 
              required
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email *" 
              className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans" 
              style={{fontFamily: 'Roboto, sans-serif'}} 
              required
            />
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number *" 
              className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans" 
              style={{fontFamily: 'Roboto, sans-serif'}} 
              required
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message" 
              rows={3} 
              className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black md:col-span-2 font-sans" 
              style={{fontFamily: 'Roboto, sans-serif'}} 
            />
            <div className="md:col-span-2 flex items-center">
              <input 
                type="checkbox" 
                name="whatsappUpdates"
                checked={formData.whatsappUpdates}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-sm text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                I agree to receive updates on WhatsApp
              </label>
            </div>
            <button 
              type="submit" 
              className="w-full md:col-span-2 bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors duration-200 font-sans" 
              style={{fontFamily: 'Roboto, sans-serif'}}
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
} 