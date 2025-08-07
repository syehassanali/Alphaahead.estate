import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const longTermRentals = [
  { 
    id: 1, 
    title: 'Luxury 3BR Apartment', 
    price: 'AED 85,000/year', 
    location: 'Dubai Marina',
    beds: 3,
    baths: 3,
    sqft: '2,100',
    img: '/property1.jpg',
    type: 'Apartment',
    furnished: true
  },
  { 
    id: 2, 
    title: 'Family Villa with Garden', 
    price: 'AED 180,000/year', 
    location: 'Dubai Hills Estate',
    beds: 4,
    baths: 4,
    sqft: '3,800',
    img: '/Dubai Hills Estate.jpeg',
    type: 'Villa',
    furnished: false
  },
  { 
    id: 3, 
    title: 'Modern Townhouse', 
    price: 'AED 120,000/year', 
    location: 'The Valley',
    beds: 3,
    baths: 3,
    sqft: '2,500',
    img: '/pexels-thelazyartist-1642125.jpg',
    type: 'Townhouse',
    furnished: true
  },
  { 
    id: 4, 
    title: 'Downtown Penthouse', 
    price: 'AED 250,000/year', 
    location: 'Downtown Dubai',
    beds: 2,
    baths: 2,
    sqft: '1,800',
    img: '/property2.jpg',
    type: 'Penthouse',
    furnished: true
  }
];

const familyCommunities = [
  { name: 'Dubai Hills Estate', img: '/Dubai Hills Estate.jpeg', desc: 'Green spaces, schools, and family amenities' },
  { name: 'The Valley', img: '/pexels-thelazyartist-1642125.jpg', desc: 'Affordable family living with community feel' },
  { name: 'Emaar South', img: '/Emaar-south.jpg', desc: 'Gateway community with excellent facilities' },
  { name: 'Dubai Creek Harbour', img: '/Dubai Creek Harbour.jpeg', desc: 'Waterfront living with family attractions' }
];

const leasingFaqs = [
  {
    q: 'What documents do I need to rent a property?',
    a: 'You\'ll need a valid passport, visa, Emirates ID, and proof of income. Some landlords may require additional documents.'
  },
  {
    q: 'How long are typical rental contracts?',
    a: 'Most rental contracts are for 12 months, but we can arrange flexible terms from 6 months to 2 years.'
  },
  {
    q: 'What\'s included in the rent?',
    a: 'This varies by property. Some include utilities and maintenance, while others are rent-only. We\'ll clarify all details.'
  },
  {
    q: 'Can I negotiate the rent?',
    a: 'Yes, we can help negotiate terms and rent amounts based on market conditions and your requirements.'
  },
  {
    q: 'What are the payment terms?',
    a: 'Most landlords prefer 1-4 cheques per year. We can arrange payment plans that work for your budget.'
  }
];

function RentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    furnished: ''
  });

  const handleFilterChange = (e) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/Dubai Creek Harbour.jpeg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 drop-shadow-lg tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
              Flexible Rental Options Across Dubai
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow max-w-3xl mx-auto leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
              Discover flexible, affordable, and premium rental properties tailored to all lifestyles and budgets. Whether you're relocating, upgrading, or renting short-term, we have the perfect home for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#rentals" className="px-8 py-4 rounded-lg bg-accent text-white font-medium text-lg hover:bg-accent/90 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                View Rentals
              </a>
              <a href="#contact" className="px-8 py-4 rounded-lg bg-transparent text-white font-medium text-lg border-2 border-white/40 hover:bg-white hover:text-primary transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Contact Agent
              </a>
            </div>
          </div>
        </section>

        {/* Search Filters */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="bg-card rounded-2xl shadow-lg border border-dark-600 p-6">
            <h2 className="text-2xl font-light text-white mb-6 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
              Find Your Perfect Rental
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-white mb-2 text-sm">Location</label>
                <select
                  name="location"
                  value={searchFilters.location}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-accent focus:outline-none"
                >
                  <option value="">All Locations</option>
                  <option value="dubai-marina">Dubai Marina</option>
                  <option value="dubai-hills">Dubai Hills Estate</option>
                  <option value="the-valley">The Valley</option>
                  <option value="downtown">Downtown Dubai</option>
                  <option value="emaar-south">Emaar South</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2 text-sm">Property Type</label>
                <select
                  name="propertyType"
                  value={searchFilters.propertyType}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-accent focus:outline-none"
                >
                  <option value="">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2 text-sm">Bedrooms</label>
                <select
                  name="bedrooms"
                  value={searchFilters.bedrooms}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-accent focus:outline-none"
                >
                  <option value="">Any</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4+">4+ Bedrooms</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2 text-sm">Min Price (AED/year)</label>
                <input
                  type="number"
                  name="minPrice"
                  value={searchFilters.minPrice}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-accent focus:outline-none"
                  placeholder="50,000"
                />
              </div>
              <div>
                <label className="block text-white mb-2 text-sm">Max Price (AED/year)</label>
                <input
                  type="number"
                  name="maxPrice"
                  value={searchFilters.maxPrice}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-accent focus:outline-none"
                  placeholder="300,000"
                />
              </div>
              <div>
                <label className="block text-white mb-2 text-sm">Furnished</label>
                <select
                  name="furnished"
                  value={searchFilters.furnished}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-accent focus:outline-none"
                >
                  <option value="">Any</option>
                  <option value="furnished">Furnished</option>
                  <option value="unfurnished">Unfurnished</option>
                </select>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="px-8 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors duration-200">
                Search Rentals
              </button>
            </div>
          </div>
        </section>

        {/* Long-Term Rentals */}
        <section id="rentals" className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
            Long-Term Rentals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {longTermRentals.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src={property.img} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                  {property.furnished && (
                    <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Furnished
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex justify-between text-gray-500 text-sm mb-4">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} sq.ft</span>
                  </div>
                  <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200">
                    Schedule Viewing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Family-Friendly Communities */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
            Family-Friendly Communities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {familyCommunities.map((community, idx) => (
              <div key={community.name} className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={community.img} 
                  alt={community.name} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{community.name}</h3>
                  <p className="text-white/80 text-sm">{community.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rent vs Buy Calculator */}
        <section className="max-w-4xl mx-auto py-20 px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
              Rent vs Buy Calculator
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Calculate Your Options</h3>
                <p className="text-gray-600 mb-6">Compare the costs of renting vs buying to make an informed decision.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-900 mb-2">Monthly Rent</label>
                    <input type="number" placeholder="AED" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-accent focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-gray-900 mb-2">Property Price</label>
                    <input type="number" placeholder="AED" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-accent focus:outline-none" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Results</h3>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-gray-600 text-sm">Monthly Rent Cost</div>
                    <div className="text-accent font-bold text-xl">AED 8,000</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-gray-600 text-sm">Monthly Mortgage</div>
                    <div className="text-accent font-bold text-xl">AED 12,500</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <div className="text-gray-600 text-sm">Difference</div>
                    <div className="text-accent font-bold text-xl">AED 4,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leasing FAQs */}
        <section className="max-w-3xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
            Leasing FAQs
          </h2>
          <div className="space-y-4">
            {leasingFaqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl bg-white shadow-sm">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-gray-900 text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <svg className={openFaq === idx ? 'w-6 h-6 rotate-180 transition' : 'w-6 h-6 transition'} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-gray-600 text-base animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/the-oasis.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/70 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
              Ready to Find Your Perfect Rental?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the ideal rental property that fits your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#rentals" className="px-8 py-4 rounded-lg bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors duration-200">
                Browse Rentals
              </a>
              <a href="tel:+971505606877" className="px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-lg border-2 border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default RentPage; 