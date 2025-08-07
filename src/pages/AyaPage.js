import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const amenities = [
  { name: 'Cinema room', icon: '🎬' },
  { name: 'Club Room', icon: '🏛️' },
  { name: 'Fitness Centre', icon: '💪' },
  { name: 'Kids Splash Pad', icon: '🏊‍♂️' },
  { name: 'Pool & Jacuzzi', icon: '🏊‍♀️' },
  { name: 'Residents Lounge', icon: '🛋️' },
  { name: 'Rooftop Pool', icon: '🏊‍♂️' },
  { name: 'Rooftop Seating Area', icon: '☕' },
  { name: 'State-of-the-art gym', icon: '🏋️‍♂️' },
  { name: 'Steam & Sauna Rooms', icon: '🧖‍♀️' },
  { name: 'Sun Deck', icon: '☀️' },
  { name: 'Yoga Studio', icon: '🧘‍♀️' }
];

const signatureFeatures = [
  {
    title: 'Floor-to-ceiling windows',
    description: 'Maximizing natural light throughout all residences',
    icon: '🌅'
  },
  {
    title: 'Smart home technology',
    description: 'Advanced automation systems throughout',
    icon: '🏠'
  },
  {
    title: 'Premium fixtures and finishes',
    description: 'High-end materials and craftsmanship',
    icon: '✨'
  },
  {
    title: 'Fitted kitchens',
    description: 'High-end appliances and modern design',
    icon: '🍳'
  },
  {
    title: 'Generous storage solutions',
    description: 'Ample storage space for modern living',
    icon: '📦'
  },
  {
    title: 'Acoustic panels',
    description: 'Advanced sound insulation for privacy',
    icon: '🔇'
  }
];

const sustainabilityFeatures = [
  {
    title: 'Daylight integration',
    description: 'Architectural design maximizing natural light'
  },
  {
    title: 'Environmentally friendly materials',
    description: 'Locally sourced sustainable materials'
  },
  {
    title: 'High-efficiency AC units',
    description: 'Optimized HVAC systems for energy efficiency'
  },
  {
    title: 'Energy-efficient LED lighting',
    description: 'Throughout all common areas and residences'
  },
  {
    title: 'Energy recovery ventilation',
    description: 'Meeting latest ASHRAE regulations'
  },
  {
    title: 'Zero asbestos materials',
    description: 'Safe and sustainable building materials'
  }
];

export default function AyaPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    interest: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: 'url("/deyaar/AYA/AYA-V01-SEMI-AERIAL-R02.png")' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>AYA</h1>
            <h2 className="text-2xl md:text-3xl font-light text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>RARE BY NATURE</h2>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-3">{amenity.icon}</div>
                <h3 className="text-lg font-light text-gray-900 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{amenity.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* The Project Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>AYA BEACHFRONT RESIDENCES</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Designed to reflect its surroundings, Aya is an architectural expression of light, water, and innovation. Set within a flourishing coastal community, it is more than a residence—it is a landmark of sophisticated living where every detail enhances life by the sea.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Location</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Umm Al Quwain</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Type</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Residential</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Units</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>1-4 Bedroom</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Size</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>680-7500 sqft</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/deyaar/AYA/AYA-V05-LIVING-ROOM.png"
                alt="AYA Living Room"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/deyaar/AYA/AYA-V01-SEMI-AERIAL-R02.png"
                alt="AYA Location"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>PRIME LOCATION</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                AYA is strategically located in Umm Al Quwain, offering residents the perfect blend of tranquility and accessibility. The development is positioned to provide breathtaking views of the Arabian Gulf and easy access to major transportation networks.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Strategic Location</h4>
                    <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Umm Al Quwain, UAE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Easy Access</h4>
                    <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Major highways and transportation networks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Waterfront Views</h4>
                    <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Arabian Gulf and Al Khor mangroves</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle & Amenities Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>LIFESTYLE & AMENITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-light text-gray-900 mb-3 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>{feature.title}</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Residences & Interiors Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>RESIDENCES & INTERIORS</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                AYA offers thoughtfully designed residences that maximize natural light and sea views. Each unit features premium finishes, spacious layouts, and private balconies or terraces that seamlessly connect indoor and outdoor living spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>1-4 Bedroom configurations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Sea-facing balconies and terraces</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Premium finishes and materials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Maximized natural light</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/deyaar/AYA/AYA-V07-BEDROOM-VIEW-R00.png"
                alt="AYA Bedroom"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/AYA/AYA-V04-Kids-play-area_005.png"
                alt="AYA Kids Play Area"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/AYA/AYA-V02-Residents-lounge_009.png"
                alt="AYA Residents Lounge"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/AYA/AYA-V09-Sports-lounge_002.png"
                alt="AYA Sports Lounge"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>SUSTAINABILITY & INNOVATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-light text-gray-900 mb-3 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>{feature.title}</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-4xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Get in Touch</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-200 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans"
                style={{fontFamily: 'Roboto, sans-serif'}}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans"
                style={{fontFamily: 'Roboto, sans-serif'}}
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans"
                style={{fontFamily: 'Roboto, sans-serif'}}
                required
              />
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Nationality"
                className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans"
                style={{fontFamily: 'Roboto, sans-serif'}}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans"
                style={{fontFamily: 'Roboto, sans-serif'}}
                required
              >
                <option value="">Select Interest</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
                <option value="investment">Investment</option>
                <option value="consultation">Consultation</option>
              </select>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black font-sans"
                style={{fontFamily: 'Roboto, sans-serif'}}
                required
              >
                <option value="">Select Budget</option>
                <option value="under-500k">Under 500K AED</option>
                <option value="500k-1m">500K - 1M AED</option>
                <option value="1m-2m">1M - 2M AED</option>
                <option value="2m-5m">2M - 5M AED</option>
                <option value="5m+">5M+ AED</option>
              </select>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Message (Optional)"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black mb-6 font-sans"
              style={{fontFamily: 'Roboto, sans-serif'}}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors duration-200 font-sans"
              style={{fontFamily: 'Roboto, sans-serif'}}
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
} 