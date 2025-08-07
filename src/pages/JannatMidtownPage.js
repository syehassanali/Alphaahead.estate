import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const amenities = [
  { name: 'Aerobics & yoga', icon: '🧘‍♀️' },
  { name: 'BBQ Grill', icon: '🍖' },
  { name: 'Fitness Centre', icon: '💪' },
  { name: 'Organic Grocery', icon: '🛒' },
  { name: 'Paddle Tennis', icon: '🎾' },
  { name: 'Swimming Pools', icon: '🏊‍♀️' },
  { name: 'Terrace & Gardens', icon: '🌿' }
];

const signatureFeatures = [
  {
    title: 'Vibrant Community',
    description: 'A thriving community you call home with personal and secure spaces',
    icon: '🏘️'
  },
  {
    title: 'Modern Style',
    description: 'Blends modern style with top-notch quality and finishes',
    icon: '✨'
  },
  {
    title: 'Superior Lifestyle',
    description: 'The best ingredients for a superior lifestyle experience',
    icon: '🌟'
  },
  {
    title: 'Retail Boulevard',
    description: 'Convenience stores, restaurants, cafes, and pet care services',
    icon: '🛍️'
  },
  {
    title: 'Multi-cuisine Restaurants',
    description: 'Diverse dining options with cafes and restaurants',
    icon: '🍽️'
  },
  {
    title: 'Full-service Facilities',
    description: 'Laundry, pharmacies, supermarkets, and pet care',
    icon: '🏪'
  }
];

const sustainabilityFeatures = [
  {
    title: 'Urban Living',
    description: 'The best of urban living built around you',
    icon: '🏙️'
  },
  {
    title: 'Uncompromising Quality',
    description: 'For those who seek the best in everything',
    icon: '🏆'
  },
  {
    title: 'Life of Vitality',
    description: 'The best environment for a life of vitality',
    icon: '💪'
  },
  {
    title: 'Personal Spaces',
    description: 'Secure and personal spaces for residents',
    icon: '🏡'
  },
  {
    title: 'Discovery Opportunities',
    description: 'A whole lot to discover in your community',
    icon: '🔍'
  },
  {
    title: 'Thriving Environment',
    description: 'Vibrant and thriving community atmosphere',
    icon: '🌱'
  }
];

export default function JannatMidtownPage() {
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
            style={{ backgroundImage: 'url("/deyaar/Jannat Midtown/Jannat-scaled.jpg")' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>JANNAT MIDTOWN</h1>
            <h2 className="text-2xl md:text-3xl font-light text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>THE BEST FOR THE LAST</h2>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>The Best For The Last</h2>
            <h3 className="text-xl font-light text-gray-700 mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>The Best of Urban Living Built Around You</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              You often strive for the best – be it in your belief of living life to the fullest, a flair for making a remarkable impression on others, or an affinity for uncompromising quality.
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>The best environment for a life of vitality</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                The Midtown life is a vibrant and thriving community you call home. As a resident of Jannat, you'll not have a space that's both personal and secure, you'll also have a whole lot to discover.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Location</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Dubai Production City</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Type</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Residential</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Units</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Studio, 1, 2, 3-bedroom</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Size</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>350-1800 sqft</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Start Date</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>01/07/2023</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>End Date</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>01/06/2026</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/deyaar/Jannat Midtown/2-scaled.jpg"
                alt="Jannat Midtown Project"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Jannat Midtown Story Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/deyaar/Jannat Midtown/3.jpg"
                alt="Jannat Midtown Story"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Jannat Midtown Story</h2>
              <h3 className="text-xl font-light text-gray-700 mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>The Best Ingredients for a Superior Lifestyle</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Jannat signature residences bring forth a lifestyle for those who are constantly seeking the next. Step into a space where modern style blends with top-notch quality and finishes.
              </p>
            </div>
          </div>
        </section>

        {/* Unique Living Experience Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Unique Living Experience</h2>
            <h3 className="text-xl font-light text-gray-700 mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>The best to take care of all your needs</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              The Retail Boulevard at Midtown includes convenience stores, laundry facilities, pharmacies, supermarkets, multi-cuisine restaurants and cafes, and a full-service pet care shop.
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
                Jannat Midtown offers thoughtfully designed residences that maximize natural light and urban views. Each unit features premium finishes, spacious layouts, and private balconies that seamlessly connect indoor and outdoor living spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Studio to 3-bedroom configurations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Urban-facing balconies and terraces</span>
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
                src="/deyaar/Jannat Midtown/4.jpg"
                alt="Jannat Midtown Interior"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/Jannat Midtown/6.jpg"
                alt="Jannat Midtown Interior"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/Jannat Midtown/7.jpg"
                alt="Jannat Midtown Interior"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/Jannat Midtown/8.jpg"
                alt="Jannat Midtown Interior"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>JANNAT MIDTOWN GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Jannat Midtown/Jannat-scaled.jpg"
                alt="Jannat Midtown"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Jannat Midtown</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Jannat Midtown/2-scaled.jpg"
                alt="Jannat Midtown Project"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Project View</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Jannat Midtown/3.jpg"
                alt="Jannat Midtown Story"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Midtown Story</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Jannat Midtown/4.jpg"
                alt="Jannat Midtown Interior"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Interior</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Jannat Midtown/6.jpg"
                alt="Jannat Midtown Interior"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Living Space</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/Jannat Midtown/7.jpg"
                alt="Jannat Midtown Interior"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Interior View</h3>
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