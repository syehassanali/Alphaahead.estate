import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DamacLagoonsPage() {
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
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: 'url("/damac/Lagoons/DAMAC-Lagoons-Morocco-00.jpg")' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>DAMAC LAGOONS</h1>
            <h2 className="text-2xl md:text-3xl font-light text-white font-sans tracking-tight mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>MOROCCO</h2>
            <h3 className="text-xl md:text-2xl font-light text-white font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Lagoon Living Like Never Before</h3>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>WHY INVEST IN DAMAC MOROCCO</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Damac Lagoon Morocco is an exciting new addition to the luxurious Damac Lagoons community by Damac Properties in Dubai. This upcoming project features a selection of beautifully designed townhouses and villas. The townhouses come in 4 and 5-bedroom layouts, offering living spaces ranging from 2,282 to 3,388 square feet. For those seeking more space and privacy, the standalone villas are available, with sizes ranging from 11,000 to a sprawling 24,753 square feet.
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>PROJECT TYPE</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Townhouse & Villa</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🛏️</div>
              <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>BEDROOMS</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>1 & 2 BEDROOMS Apartment</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>TOTAL UNITS</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>+471</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">📅</div>
              <h3 className="font-semibold text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>HANDOVER</h3>
              <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Q1 2027 Onwards</p>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-04.jpg" alt="Lagoon Views" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Exclusive Lagoon Views</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Stunning waterfront vistas and serene lagoon surroundings.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-05.jpg" alt="Swimming Pools" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Luxury Swimming Pools</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Multiple swimming pools with modern facilities and relaxation areas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-06.jpg" alt="Retail Outlets" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Premium Retail & Dining</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>World-class restaurants, cafes, and retail outlets within the community.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-07.jpg" alt="Security" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Modern Architecture</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Contemporary design with premium finishes and innovative layouts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-010.jpg" alt="Communal Pool" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Community Facilities</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>State-of-the-art gym, communal areas, and social spaces for residents.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plans Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Morocco Cluster Floor Plan Layouts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>1 BEDROOMS</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Super Built-up Area</span>
                    <span className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>674 - 807 Square.ft</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Starting Price</span>
                    <span className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>AED 1.2M - 1.4 M (~ $266,000 USD) Onwards</span>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>2 BEDROOMS</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Super Built-up Area</span>
                    <span className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>674 - 807 Square.ft</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Starting Price</span>
                    <span className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>AED 1.2M - 1.4 M (~ $266,000 USD) Onwards</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Payment Plans</h3>
                <ul className="space-y-2 text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  <li>• 20% down payment with a 70:30 payment plan</li>
                  <li>• 1% monthly payment plan available for some units</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="/damac/Lagoons/DAMAC-Lagoons-Morocco-011.jpg"
                alt="DAMAC Lagoons Morocco Floor Plan"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Location That Makes You Never Leave</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Damac Lagoons is conveniently situated between two key highways, Emirates Road (E611) and Sheikh Mohammed Bin Zayed Road (E311). This prime location ensures easy access to the rest of the city, while being nestled within Damac Hills allows residents to enjoy the numerous amenities and facilities the community has to offer.
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LEISURE AWAITS YOU</h3>
                <p className="text-lg text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  With more than 25 great amenities to enjoy at Meraas Acres from beautiful pools to modern fitness centers, treat yourself to comfort and convenience like never before.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/damac/Lagoons/DAMAC-Lagoons-Morocco-00.jpg"
                  alt="Damac Lagoons Location"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-04.jpg" alt="DAMAC Lagoons Morocco" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-06.jpg" alt="DAMAC Lagoons Morocco" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-05.jpg" alt="DAMAC Lagoons Morocco" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-07.jpg" alt="DAMAC Lagoons Morocco" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-010.jpg" alt="DAMAC Lagoons Morocco" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/damac/Lagoons/DAMAC-Lagoons-Morocco-011.jpg" alt="DAMAC Lagoons Morocco" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>How much does a villa or townhouse costs at DAMAC Lagoons Morocco?</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Prices start from AED 1.2M for 1-bedroom apartments and go up to AED 24M+ for luxury villas, depending on the size and location within the development.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Can you share DAMAC Lagoons Morocco Cluster Details?</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>The Morocco cluster features 471 units including 1 & 2-bedroom apartments, 4 & 5-bedroom townhouses, and standalone villas ranging from 674 sq ft to 24,753 sq ft.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>In which part of Dubai is DAMAC Lagoons situated?</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>DAMAC Lagoons is located in Damac Hills, between Emirates Road (E611) and Sheikh Mohammed Bin Zayed Road (E311), offering easy access to all major areas of Dubai.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Does DAMAC Lagoons provide a payment scheme for the Morocco Cluster properties in Dubai?</h3>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Yes, DAMAC offers flexible payment plans including 20% down payment with 70:30 payment plan and 1% monthly payment options for select units.</p>
              </div>
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