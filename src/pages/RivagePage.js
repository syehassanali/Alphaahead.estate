import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const amenities = [
  { name: 'Private Beach Access', icon: '🏖️' },
  { name: 'Infinity Pool', icon: '🏊‍♀️' },
  { name: 'Fitness Centre', icon: '💪' },
  { name: 'Spa & Wellness', icon: '🧘‍♀️' },
  { name: 'Fine Dining', icon: '🍽️' },
  { name: 'Concierge Service', icon: '🛎️' },
  { name: 'Private Marina', icon: '⛵' },
  { name: 'Garden Terraces', icon: '🌿' }
];

const signatureFeatures = [
  {
    title: 'Waterfront Living',
    description: 'Exclusive waterfront residences with stunning sea views',
    icon: '🌊'
  },
  {
    title: 'Luxury Interiors',
    description: 'Premium finishes and sophisticated design throughout',
    icon: '✨'
  },
  {
    title: 'Private Access',
    description: 'Direct access to private beach and marina facilities',
    icon: '🔐'
  },
  {
    title: 'Concierge Services',
    description: '24/7 concierge and personalized service',
    icon: '👨‍💼'
  },
  {
    title: 'Fine Dining',
    description: 'World-class restaurants and culinary experiences',
    icon: '🍷'
  },
  {
    title: 'Wellness Facilities',
    description: 'Spa, fitness center, and wellness programs',
    icon: '🧘‍♀️'
  }
];

const sustainabilityFeatures = [
  {
    title: 'Sustainable Design',
    description: 'Eco-friendly architecture and green building practices',
    icon: '🌱'
  },
  {
    title: 'Energy Efficient',
    description: 'Advanced systems for optimal energy consumption',
    icon: '⚡'
  },
  {
    title: 'Water Conservation',
    description: 'Smart water management and conservation systems',
    icon: '💧'
  },
  {
    title: 'Green Spaces',
    description: 'Extensive landscaping and natural environments',
    icon: '🌳'
  },
  {
    title: 'Local Materials',
    description: 'Sustainably sourced materials and local craftsmanship',
    icon: '🏗️'
  },
  {
    title: 'Community Focus',
    description: 'Designed for community wellbeing and connection',
    icon: '🤝'
  }
];

export default function RivagePage() {
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
            style={{ backgroundImage: 'url("/deyaar/Rivage/Hero-Dusk-1.jpg")' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>RIVAGE</h1>
            <h2 className="text-2xl md:text-3xl font-light text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>WATERFRONT LUXURY</h2>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Where Luxury Meets the Sea</h2>
            <h3 className="text-xl font-light text-gray-700 mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Exclusive Waterfront Living in Abu Dhabi</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Rivage offers an unparalleled waterfront lifestyle where every detail is crafted for those who demand the extraordinary. Experience the perfect blend of luxury, comfort, and natural beauty in this exclusive residential haven.
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Exclusive Waterfront Living</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Rivage represents the pinnacle of waterfront luxury living, offering residents an exceptional lifestyle with direct access to pristine beaches, private marina facilities, and world-class amenities that define sophisticated coastal living.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Location</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Abu Dhabi</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Type</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Waterfront Residential</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Units</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>1-3 Bedroom, Duplexes, Sky Villas</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Size</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>801-7810 sqft</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Start Date</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Q1 2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>End Date</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Q4 2026</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/deyaar/Rivage/Herosection.jpg"
                alt="Rivage Project"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Rivage Story Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/deyaar/Rivage/Living__Dining_Room_FINAL-1.jpg"
                alt="Rivage Living"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Rivage Story</h2>
              <h3 className="text-xl font-light text-gray-700 mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>A Symphony of Luxury and Nature</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Rivage is more than just a residential development; it's a lifestyle destination where every moment is crafted for those who appreciate the finer things in life. From the moment you arrive, you'll be enveloped in an atmosphere of refined elegance and natural beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Unique Living Experience Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Unique Living Experience</h2>
            <h3 className="text-xl font-light text-gray-700 mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Where every detail matters</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              At Rivage, we understand that true luxury lies in the details. From the carefully curated interiors to the meticulously landscaped gardens, every aspect of your home has been thoughtfully designed to create an environment of unparalleled comfort and sophistication.
            </p>
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
                Rivage residences are designed to maximize the stunning waterfront views while providing the ultimate in luxury living. Each unit features premium finishes, spacious layouts, and private balconies that seamlessly connect indoor and outdoor living spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>1-3 bedroom apartments and duplexes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Sky villas and sky palaces</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Waterfront balconies and terraces</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Premium finishes and materials</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/deyaar/Rivage/Bedroom-1.jpg"
                alt="Rivage Bedroom"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/Rivage/Kitchen-1.jpg"
                alt="Rivage Kitchen"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/Rivage/Duplex-1.jpg"
                alt="Rivage Duplex"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/Rivage/Living__Dining_Room_FINAL-1.jpg"
                alt="Rivage Living Room"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>RIVAGE GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Rivage/Hero-Dusk-1.jpg"
                alt="Rivage Hero"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Rivage Exterior</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Rivage/Herosection.jpg"
                alt="Rivage Project"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Project View</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Rivage/Living__Dining_Room_FINAL-1.jpg"
                alt="Rivage Living"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Living Space</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Rivage/Bedroom-1.jpg"
                alt="Rivage Bedroom"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Bedroom</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Rivage/Kitchen-1.jpg"
                alt="Rivage Kitchen"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Kitchen</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Rivage/Duplex-1.jpg"
                alt="Rivage Duplex"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Duplex</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>SUSTAINABILITY & INNOVATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
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
                <option value="under-1m">Under 1M AED</option>
                <option value="1m-2m">1M - 2M AED</option>
                <option value="2m-5m">2M - 5M AED</option>
                <option value="5m-10m">5M - 10M AED</option>
                <option value="10m+">10M+ AED</option>
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