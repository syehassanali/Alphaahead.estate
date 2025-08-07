import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const amenities = [
  { name: 'Fitness Centre', icon: '💪' },
  { name: 'Swimming Pool', icon: '🏊‍♀️' },
  { name: 'Children\'s Play Area', icon: '🎠' },
  { name: 'BBQ Area', icon: '🍖' },
  { name: 'Garden', icon: '🌿' },
  { name: 'Security', icon: '🔒' },
  { name: 'Parking', icon: '🚗' },
  { name: 'Retail Outlets', icon: '🛍️' },
  { name: 'Community Lounge', icon: '🏠' },
  { name: 'Landscaped Gardens', icon: '🌳' }
];

const signatureFeatures = [
  {
    title: 'Modern Living',
    description: 'Contemporary design with premium finishes and modern amenities for comfortable urban living',
    icon: '✨'
  },
  {
    title: 'Convenient Location',
    description: 'Strategically located in Al Furjan with excellent connectivity to major highways and amenities',
    icon: '📍'
  },
  {
    title: 'Quality Construction',
    description: 'Built by Deyaar, a trusted developer with proven track record in Dubai real estate',
    icon: '🏗️'
  },
  {
    title: 'Community Living',
    description: 'Vibrant community with shared spaces and facilities for social interaction',
    icon: '🏘️'
  },
  {
    title: 'Investment Potential',
    description: 'High rental yields and capital appreciation potential in a growing area',
    icon: '📈'
  },
  {
    title: 'Flexible Payment Plans',
    description: 'Attractive payment plans to suit different budgets and investment goals',
    icon: '💰'
  }
];

const sustainabilityFeatures = [
  {
    title: 'Energy Efficient',
    description: 'Designed with energy-saving features and sustainable practices for environmental responsibility',
    icon: '⚡'
  },
  {
    title: 'Green Spaces',
    description: 'Landscaped gardens and outdoor recreational areas for healthy living',
    icon: '🌳'
  },
  {
    title: 'Water Conservation',
    description: 'Smart water management systems and conservation practices',
    icon: '💧'
  },
  {
    title: 'Quality Materials',
    description: 'Premium materials and finishes for lasting quality and durability',
    icon: '🏆'
  },
  {
    title: 'Community Focus',
    description: 'Designed to foster community interaction and wellbeing',
    icon: '🤝'
  },
  {
    title: 'Future Ready',
    description: 'Infrastructure designed for future growth and development',
    icon: '🚀'
  }
];

export default function TaliaPage() {
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
            style={{ backgroundImage: 'url("/deyaar/Talia/Talia-1.jpg")' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>TALIA</h1>
            <h2 className="text-2xl md:text-3xl font-light text-white font-sans tracking-tight mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>BY DEYAAR</h2>
            <h3 className="text-xl md:text-2xl font-light text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Modern Living in Al Furjan</h3>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Contemporary Living at Its Best</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Talia by Deyaar offers modern, well-designed residences in the vibrant Al Furjan community. With a focus on quality construction, contemporary design, and excellent amenities, Talia provides the perfect blend of comfort, convenience, and investment potential. Experience urban living at its finest with thoughtfully designed spaces and world-class facilities.
            </p>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>The Project</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Talia represents modern living with a focus on quality, comfort, and community. Each residence is thoughtfully designed to maximize space and functionality while providing residents with access to world-class amenities and facilities. The development features contemporary architecture with premium finishes and smart home technologies.
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
                    <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Developer</h4>
                    <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Deyaar</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Status</h4>
                    <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Under Construction</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/deyaar/Talia/talia2.png"
                  alt="Talia Project"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location & Lifestyle Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/deyaar/Talia/talia3.png"
                alt="Talia Location"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Prime Location</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Strategically located in Al Furjan, Talia offers excellent connectivity to major highways, shopping centers, schools, and healthcare facilities. The area is rapidly developing with new infrastructure and amenities, making it an ideal location for families and investors alike.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Easy access to Sheikh Zayed Road</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Close to Ibn Battuta Mall</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Nearby schools and healthcare facilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Public transport connectivity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>World-Class Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-3">{amenity.icon}</div>
                  <h3 className="text-lg font-light text-gray-900 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{amenity.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interior Design Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Interior Excellence</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Every detail in Talia has been carefully considered to create spaces that are both beautiful and functional. From the premium finishes to the smart home technologies, residents will enjoy a lifestyle of comfort and convenience. The interiors feature modern design elements with high-quality materials throughout.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Premium kitchen finishes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Smart home technologies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Spacious balconies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Modern bathroom designs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/deyaar/Talia/talia.png"
                alt="Talia Interior"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Signature Features Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Why Choose Talia</h2>
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
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Quality & Sustainability</h2>
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

        {/* Gallery Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative">
                <img
                  src="/deyaar/Talia/Millennium-Talia-Residences-9.jpg.jpg"
                  alt="Talia Exterior"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative">
                <img
                  src="/deyaar/Talia/dc5795e1adb3ab5a6604fc67d7f92d01.jpg"
                  alt="Talia Amenities"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative">
                <img
                  src="/deyaar/Talia/talia4.jpeg"
                  alt="Talia Lifestyle"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
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