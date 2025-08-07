import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const amenities = [
  { name: 'Club Room', icon: '🏛️' },
  { name: 'Ground Floor Retail Area', icon: '🛍️' },
  { name: 'Gym', icon: '💪' },
  { name: 'Kids Pool', icon: '🏊‍♂️' },
  { name: 'Outdoor eating & BBQ', icon: '🍖' },
  { name: 'Parking & Service Areas', icon: '🚗' },
  { name: 'Residents Lounge', icon: '🛋️' },
  { name: 'Swimming Pool', icon: '🏊‍♀️' }
];

const signatureFeatures = [
  {
    title: 'Connected to Everything',
    description: 'Seamlessly connected to Dubai and Abu Dhabi via Sheikh Zayed Road',
    icon: '🌐'
  },
  {
    title: 'Strategic Location',
    description: 'Minutes away from Palm Jebel Ali, The Waterfront, JAFZA',
    icon: '📍'
  },
  {
    title: 'Fortune 500 Access',
    description: 'Close to FedEx, LG, Nestle, and Mercedes facilities',
    icon: '🏢'
  },
  {
    title: 'Short Commute',
    description: 'More time for what truly matters – pursuing your dreams',
    icon: '⏰'
  },
  {
    title: 'Contemporary Architecture',
    description: 'Distinctly modern design mimicking Jebel Ali Port dynamism',
    icon: '🏗️'
  },
  {
    title: 'Vibrant Retail Spaces',
    description: 'Ground-floor retail with charming courtyards',
    icon: '🛍️'
  }
];

const sustainabilityFeatures = [
  {
    title: 'Grand Portecochère',
    description: 'Striking entrance that commands attention',
    icon: '🚪'
  },
  {
    title: 'Inviting Lobby',
    description: 'Redefines elegant living with sophistication',
    icon: '🏛️'
  },
  {
    title: 'Sun-drenched Plazas',
    description: 'Bustling cafes and pedestrian-friendly streets',
    icon: '☀️'
  },
  {
    title: 'City Lights Access',
    description: 'Dubai\'s vibrant pulse a mere heartbeat away',
    icon: '🌃'
  },
  {
    title: 'Private Oasis',
    description: 'Convenience and serenity coexist harmoniously',
    icon: '🏡'
  },
  {
    title: 'Effortless Connections',
    description: 'Vibrant energy of the port seamlessly blended',
    icon: '🔗'
  }
];

export default function ElevePage() {
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
          <div className="absolute inset-0 w-full h-full z-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/deyaar/ELEVE/Hero_005-scaled.jpg"
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              onLoadStart={() => console.log('Video loading started')}
              onCanPlay={() => console.log('Video can play')}
              onError={(e) => console.log('Video error:', e)}
            >
              <source src="/deyaar/ELEVE/Eleve_Launch_Video_60s_FINAL_HD-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Downtown Jebel Ali's Portside Jewel</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              ELEVE, a modern luxury beacon and all-inclusive enclave, soars above New Dubai. Meticulous design, curated podium amenities, and captivating port views grace its striking facade. Featuring studios and 1, 2, and 3-bedroom residences, ELEVE offers an unparalleled living experience with spectacular lifestyle inclusions. Here, effortless connections and the vibrant energy of the port seamlessly blend with the sophistication of elegant living.
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Connected to Everything That Matters</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                ELEVE puts you at the heart of it all, seamlessly connected to Dubai and Abu Dhabi via Sheikh Zayed Road. Palm Jebel Ali, The Waterfront, JAFZA, Jebel Ali Industrial Area, and Fortune 500 giants like FedEx, LG, Nestle, and Mercedes are accessible in minutes. Imagine the freedom of a short commute, leaving you more time for what truly matters – pursuing your dreams or simply enjoying the serenity of your ELEVE haven.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Location</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Jabel Ali</p>
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
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>409-2938 sqft</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Start Date</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>01/10/2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>End Date</h4>
                  <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>30/06/2027</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/deyaar/ELEVE/Exterior-scaled.jpg"
                alt="ELEVE Exterior"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/deyaar/ELEVE/Pool-scaled.jpg"
                alt="ELEVE Pool"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Elevate Your Skyline</h2>
              <h3 className="text-xl font-light text-gray-700 mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>New Dubai's Soaring Architectural Gem</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                ELEVE commands attention with its distinctly contemporary architecture and soaring elevation, mimicking the dynamism of the Jebel Ali Port. This visually striking landmark boasts a grand portecochère, vibrant ground-floor retail spaces adorned with charming courtyards, and an inviting lobby that redefines elegant living with an unmistakable touch of sophistication.
              </p>
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Elevate Your Urban Playground</h2>
            <h3 className="text-xl font-light text-gray-700 mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Embrace the ELEVE Lifestyle</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Located on the Sh. Zayed Road, your serene haven awaits at ELEVE. Nestled at the heart of this thriving precinct, you'll have effortless access to Dubai's vibrant pulse—sun-drenched plazas, bustling cafes, pedestrian-friendly streets, and the city's dazzling lights a mere heartbeat away. At ELEVE, convenience and serenity coexist harmoniously, inviting you to live life to the fullest. Dive into the city's vibrant tapestry, then retreat to your private oasis.
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
                ELEVE offers thoughtfully designed residences that maximize natural light and port views. Each unit features premium finishes, spacious layouts, and private balconies that seamlessly connect indoor and outdoor living spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Studio to 3-bedroom configurations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span className="font-sans text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Port-facing balconies and terraces</span>
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
                src="/deyaar/ELEVE/Eleve_02Living-Dining_006-min-scaled.jpg"
                alt="ELEVE Living Dining"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/ELEVE/Eleve_03Kitchen_007-min-scaled.jpg"
                alt="ELEVE Kitchen"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/ELEVE/Eleve_04Bathroom_007-min-scaled.jpg"
                alt="ELEVE Bathroom"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/deyaar/ELEVE/Exterior-scaled.jpg"
                alt="ELEVE Exterior"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* New Gallery Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>ELEVE GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/ELEVE/Hero_005-scaled.jpg"
                alt="ELEVE Hero"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>ELEVE Exterior</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/ELEVE/Pool-scaled.jpg"
                alt="ELEVE Pool"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Swimming Pool</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/ELEVE/Eleve_02Living-Dining_006-min-scaled.jpg"
                alt="ELEVE Living Dining"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Living & Dining</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/ELEVE/Eleve_03Kitchen_007-min-scaled.jpg"
                alt="ELEVE Kitchen"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Kitchen</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/ELEVE/Eleve_04Bathroom_007-min-scaled.jpg"
                alt="ELEVE Bathroom"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Bathroom</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/deyaar/ELEVE/Exterior-scaled.jpg"
                alt="ELEVE Exterior"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily: 'Roboto, sans-serif'}}>Exterior View</h3>
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