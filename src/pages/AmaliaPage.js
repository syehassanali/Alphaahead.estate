import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const amenities = [
  { name: 'Kids Play Area', icon: '🎠' },
  { name: 'Kids Pool', icon: '🏊‍♀️' },
  { name: 'Superb Outdoor Pool', icon: '🏊‍♂️' },
  { name: 'Well Equipped Gym', icon: '💪' },
  { name: 'Sun Lounges', icon: '☀️' },
  { name: 'Leisure Deck', icon: '🌿' },
  { name: 'Luscious Gardens', icon: '🌳' },
  { name: 'Smart Home Technologies', icon: '🏠' }
];

const signatureFeatures = [
  {
    title: 'A Symbol Of Elegance',
    description: 'Explicitly designed for a modern urban lifestyle with impeccable amenities to serve the needs of all the family.',
    icon: '✨'
  },
  {
    title: 'Idyllic Location',
    description: 'Perfectly located in an upscale vibrant community in Al Furjan with excellent connectivity.',
    icon: '📍'
  },
  {
    title: 'Redefining Affordable Luxury',
    description: 'Unique lifestyle with luxury and functionality within open floor spaces.',
    icon: '🏆'
  },
  {
    title: 'State-of-the-Art Amenities',
    description: 'From state-of-the-art gymnasium to superb outdoor pool with sun lounges and leisure deck.',
    icon: '🏗️'
  },
  {
    title: 'Modern Comfort',
    description: 'Semi-furnished residences showcase opulence, elegance, and refinement highlighting modern comfort.',
    icon: '🏘️'
  },
  {
    title: 'Smart Home Technologies',
    description: 'Accessible to high-end amenities and state-of-the-art smart home technologies.',
    icon: '📱'
  }
];

const sustainabilityFeatures = [
  {
    title: 'Intricate Use of Light',
    description: 'Devised with intricate use of light that adds more brightness and space to your home contentment.',
    icon: '💡'
  },
  {
    title: 'Meticulously Designed',
    description: 'Perfectly planned to make the best use of the interiors, blending luxury and functionality.',
    icon: '🎨'
  },
  {
    title: 'Sophisticated Elements',
    description: 'Sophisticated elements featured throughout spacious living area, fitted kitchen, and deluxe bathrooms.',
    icon: '🏆'
  },
  {
    title: 'Open Floor Spaces',
    description: 'Blending luxury and functionality within the open floor spaces for unmatched living experience.',
    icon: '🏠'
  },
  {
    title: 'Family-Focused Design',
    description: 'Designed to serve the needs of all the family with comprehensive amenities.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Upscale Community',
    description: 'Located in an upscale vibrant community with access to high-end amenities.',
    icon: '🌟'
  }
];

export default function AmaliaPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    purchaseTimeline: '',
    purpose: '',
    interest: '',
    location: '',
    budget: ''
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
            style={{ backgroundImage: 'url("/deyaar/Amalia/Amalia-5-scaled.jpg")' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>AMALIA</h1>
            <h2 className="text-2xl md:text-3xl font-light text-white font-sans tracking-tight mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>BY DEYAAR</h2>
            <h3 className="text-xl md:text-2xl font-light text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>A Symbol Of Elegance</h3>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Explicitly Designed</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Designed for a modern urban lifestyle, Amalia Residences features impeccable amenities to serve the needs of all the family. From a state-of-the art gymnasium, to the superb outdoor pool complemented by sun lounges and a leisure deck to the children's play area, all packed within the luscious surrounding gardens, everyone in the family will have their needs fulfilled.
            </p>
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>A Symbol Of Elegance</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Perfectly located in an upscale vibrant community, the mid-rise residential tower has been devised with intricate use of light that adds more brightness and space to your home contentment. Amalia Residences offers meticulously designed one, two, and three-bedroom apartments.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Location</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Al Furjan</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Type</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Residential</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Units</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>1, 2, 3-bedroom apartments</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Size</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>800-3000 sqft</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Start Date</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>01/12/2022</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>End Date</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>01/03/2025</p>
                </div>
                              </div>
              </div>
            <div className="relative">
              <img
                src="/deyaar/Amalia/Rectangle-143-scaled.jpg"
                alt="Amalia Project"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Amalia Story Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Idyllic Location</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Perfectly located in an upscale vibrant community, the mid-rise residential tower has been devised with intricate use of light that adds more brightness and space to your home contentment. Amalia Residences offers meticulously designed one-bedroom and two bedrooms apartments accessible to high-end amenities and state-of-the-art smart home technologies.
                </p>
                <button className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Register Your Interest</button>
              </div>
              <div className="relative">
                <img
                  src="/deyaar/Amalia/Rectangle-15-2.jpg"
                  alt="Amalia Location"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Redefining Luxury Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/deyaar/Amalia/Residence-Mock-up-Kitchen-.jpg"
                alt="Amalia Kitchen"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Redefining Affordable Luxury</h2>
              <h3 className="text-xl font-light text-gray-700 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Unique Lifestyle</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Amalia Residences apartments are perfectly planned to make the best use of the interiors, blending luxury and functionality within the open floor spaces. The semi-furnished residences showcase opulence, elegance, and refinement highlighting modern comfort. The sophisticated elements are featured throughout the spacious living area, fitted kitchen, and deluxe bathrooms to ensure an unmatched living experience for the residents.
              </p>
              <button className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Register Your Interest</button>
            </div>
          </div>
        </section>

        {/* Signature Features Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Why Choose Amalia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {signatureFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-light text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{feature.title}</h3>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Design Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-light text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{feature.title}</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Register Your Interest</h2>
              <p className="text-lg text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Get in touch with us to learn more about this exciting project</p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-sans"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-sans"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-sans"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Phone *</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-lg">
                      +971
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-black focus:border-transparent font-sans"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>How soon are you looking to purchase the property</label>
                  <select
                    name="purchaseTimeline"
                    value={formData.purchaseTimeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-sans"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediately">Immediately</option>
                    <option value="within-3-months">Within 3 months</option>
                    <option value="within-6-months">Within 6 months</option>
                    <option value="within-1-year">Within 1 year</option>
                    <option value="just-browsing">Just browsing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>What is the purpose of purchasing the property</label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-sans"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  >
                    <option value="">Select Purpose</option>
                    <option value="investment">Investment</option>
                    <option value="own-use">Own Use</option>
                    <option value="rental">Rental</option>
                    <option value="both">Both Investment & Own Use</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Interested in</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-sans"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  >
                    <option value="">Select Interest</option>
                    <option value="1-bedroom">1 Bedroom</option>
                    <option value="2-bedroom">2 Bedroom</option>
                    <option value="3-bedroom">3 Bedroom</option>
                    <option value="all">All Types</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Location</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-sans"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  >
                    <option value="">Select Location</option>
                    <option value="al-furjan">Al Furjan</option>
                    <option value="other-dubai">Other Dubai Areas</option>
                    <option value="other-emirates">Other Emirates</option>
                    <option value="international">International</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-sans"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  >
                    <option value="">Select Budget</option>
                    <option value="500k-1m">500K - 1M AED</option>
                    <option value="1m-2m">1M - 2M AED</option>
                    <option value="2m-5m">2M - 5M AED</option>
                    <option value="5m+">5M+ AED</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  By submitting this form, you confirm your acknowledgement and understanding of our privacy policy.
                </p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 font-sans"
                  style={{fontFamily: 'Roboto, sans-serif'}}
                >
                  Register Your Interest
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 