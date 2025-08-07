import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const developers = [
  {
    name: 'Meraas',
    desc: 'Design-Driven Living. From Bluewaters Island to City Walk and Port de La Mer, Meraas is known for its architectural vision, vibrant environments, and premium urban design.',
    img: '/Meraas.jpg',
    path: '/meraas',
    founded: '2007',
    keyProjects: ['Bluewaters Island', 'City Walk', 'Port de La Mer', 'The Beach', 'La Mer'],
    specialties: ['Luxury Retail', 'Entertainment Destinations', 'Mixed-Use Developments'],
    achievements: ['Award-winning urban design', 'Iconic entertainment destinations', 'Premium lifestyle communities'],
    description: 'Meraas is a Dubai-based holding company that creates exceptional experiences through innovative real estate development. Known for transforming urban landscapes with iconic projects that blend entertainment, retail, and residential living.'
  },
  {
    name: 'Deyaar',
    desc: "Master Developer of Dubai's Iconic Landmarks. Deyaar is one of the most successful developers in the region, behind globally recognized projects like Burj Khalifa, Downtown Dubai, Dubai Hills Estate, and more. They specialize in high-quality off-plan communities and lifestyle-centric developments.",
    img: '/Emaar.jpg',
    path: '/deyaar',
    founded: '2002',
    keyProjects: ['Burj Khalifa', 'Downtown Dubai', 'Dubai Hills Estate', 'Dubai Creek Harbour', 'Emaar Beachfront'],
    specialties: ['Master Communities', 'Luxury Residential', 'Mixed-Use Developments'],
    achievements: ['World\'s tallest building', 'Largest developer by market cap', 'Multiple RERA awards'],
    description: 'Deyaar is Dubai\'s leading property developer, creating iconic landmarks and master-planned communities. With a portfolio spanning residential, commercial, and hospitality sectors, they have delivered over 50,000 residential units across the UAE.'
  },
  {
    name: 'Damac Properties',
    desc: 'Luxury Redefined Through Design & Location. DAMAC delivers high-end residential and leisure developments with a signature flair, including DAMAC Lagoons, DAMAC Hills, and branded towers like Cavalli and Trump Estates.',
    img: '/Damac.jpg',
    path: '/damac',
    founded: '2002',
    keyProjects: ['DAMAC Lagoons', 'DAMAC Hills', 'Cavalli Tower', 'Trump Estates', 'DAMAC Towers'],
    specialties: ['Luxury Residential', 'Branded Residences', 'Waterfront Developments'],
    achievements: ['Largest private developer', 'International brand partnerships', 'Luxury market leader'],
    description: 'DAMAC Properties is the largest private developer in the Middle East, specializing in luxury residential and leisure developments. Known for their innovative designs and strategic partnerships with international brands.'
  },
  {
    name: 'Danube',
    desc: 'Shaping Dubai\'s Coastline. Creators of Palm Jumeirah, Danube is renowned for delivering luxurious waterfront destinations and high-yield properties across the city.',
    img: '/Nakheel.jpg',
    path: '/danube',
    founded: '1993',
    keyProjects: ['Palm Jumeirah', 'Palm Jebel Ali', 'Deira Islands', 'The World Islands', 'Nakheel Mall'],
    specialties: ['Waterfront Developments', 'Master Communities', 'Entertainment Destinations'],
    achievements: ['Iconic Palm Islands', 'World\'s largest man-made islands', 'Tourism landmarks'],
    description: 'Danube is a master developer creating iconic waterfront destinations and entertainment hubs. Their portfolio includes some of Dubai\'s most recognizable landmarks and tourist attractions.'
  },
  {
    name: 'Dubai South',
    desc: 'Where Community Meets Experience. Dubai South\'s portfolio includes master-planned areas like Tilal Al Ghaf that combine sustainable living, retail convenience, and community focus.',
    img: '/pic1.jpg',
    path: '/dubai-south',
    founded: '2006',
    keyProjects: ['Tilal Al Ghaf', 'Dubai South District', 'Al Maktoum International Airport', 'Expo 2020 Site'],
    specialties: ['Sustainable Communities', 'Airport City Development', 'Smart Cities'],
    achievements: ['Expo 2020 host', 'Sustainable development awards', 'Smart city initiatives'],
    description: 'Dubai South is the emirate\'s largest single-urban master development, focusing on sustainable communities and smart city solutions. Home to Al Maktoum International Airport and Expo 2020 site.'
  },
  {
    name: 'Binghatti',
    desc: 'Craftsmanship and Precision in Every Detail. Binghatti\'s signature developments like Madinat Jumeirah Living and Sobha Hartland are recognized for luxury finishes, waterfront views, and smart infrastructure.',
    img: '/Sobha.png',
    path: '/binghatti',
    founded: '2017',
    keyProjects: ['Madinat Jumeirah Living', 'Sobha Hartland', 'Binghatti Rose', 'Binghatti Rose 2', 'Binghatti Rose 3'],
    specialties: ['Luxury Residential', 'Smart Homes', 'Premium Finishes'],
    achievements: ['Fastest growing developer', 'Innovation awards', 'Customer satisfaction leader'],
    description: 'Binghatti is a rapidly growing developer known for luxury residential projects with cutting-edge technology and premium finishes. They focus on creating smart, sustainable communities.'
  },
];

const faqs = [
  { q: 'What are the benefits of buying from a top developer?', a: 'Top developers offer proven track records, quality construction, excellent ROI, and customer confidence with RERA compliance.' },
  { q: 'Is it better to buy off-plan or ready property?', a: 'Off-plan offers better pricing and flexible payments, while ready properties provide instant handover. We help you choose based on your needs.' },
  { q: 'Which developer offers the best ROI in 2025?', a: 'Deyaar, DAMAC, and Danube are showing strong returns, but ROI varies by location and project type.' },
  { q: 'How to check project status or handover timelines?', a: 'Our team provides regular updates on construction progress and can verify timelines with developers directly.' },
  { q: 'Can I resell an off-plan property before completion?', a: 'Yes, subject to the sales agreement and developer policies. We can guide you through the process.' },
  { q: 'What documents do I need to reserve a property?', a: 'Typically passport copy, Emirates ID, and proof of funds. We\'ll provide a complete checklist for your specific case.' },
];

export default function DevelopersPage() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero/Intro Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center mb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 w-full h-full object-cover z-0" style={{backgroundImage: "url('/Developer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}} />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 max-w-3xl mx-auto text-center py-24 md:py-32 flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white font-sans tracking-tight drop-shadow-lg" style={{fontFamily: 'Roboto, sans-serif'}}>TOP DEVELOPERS IN DUBAI</h1>
          </div>
        </section>

        {/* Developers Grid */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
            TRUSTED DEVELOPERS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developers.map((dev) => (
              <div key={dev.name} className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="relative">
                  <img src={dev.img} alt={dev.name} className="w-full h-80 object-cover" loading="lazy" width="400" height="320" />
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 text-sm font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                    Est. {dev.founded}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>{dev.name}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{dev.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-light text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Key Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {dev.keyProjects.slice(0, 3).map((project, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                          {project}
                        </span>
                      ))}
                      {dev.keyProjects.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                          +{dev.keyProjects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-light text-gray-900 mb-3 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Achievements</h4>
                    <ul className="space-y-2">
                      {dev.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-gray-700 text-sm font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <Link to={dev.path} className="w-full px-6 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200 inline-block text-center font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose These Developers */}
        <section className="max-w-6xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Why Choose These Developers?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>✓</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Proven Track Record</h3>
              <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Decades of excellence across residential, commercial, and hospitality sectors with billions in delivered projects.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>🏗️</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Quality Construction</h3>
              <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Modern architecture, timely delivery, and world-class amenities with international construction standards.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>💰</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Excellent ROI</h3>
              <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>High rental yields and resale demand in prime communities with proven investment returns.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-medium font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>🏆</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Customer Confidence</h3>
              <p className="text-gray-700 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>RERA-compliant and highly rated by investors and end-users with excellent customer satisfaction.</p>
            </div>
          </div>
          

        </section>

        {/* Contact Form */}
        <section className="max-w-3xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Get in Touch with Us</h2>
          <form className="bg-white p-8 grid grid-cols-1 gap-4">
            <input type="text" placeholder="Name" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            <input type="email" placeholder="Email" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            <input type="tel" placeholder="Mobile (+971 XX XXX XXXX)" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            <input type="text" placeholder="City / Country" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            <input type="text" placeholder="Purpose of buying property" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            <input type="text" placeholder="Investment Range (e.g., AED 1M – 3M)" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
            <textarea placeholder="Message" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" rows={3} />
            <button type="submit" className="mt-2 px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200">SEND INQUIRY</button>
          </form>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="max-w-3xl mx-auto mb-20 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>Contact Alpha Ahead Real Estate</h2>
          <div className="mb-2 text-gray-700"><b>Office:</b> Office 1005, Oxford Tower, Business Bay – Dubai, UAE</div>
          <div className="mb-2 text-gray-700"><b>Email:</b> info@alphaahead.com</div>
          <div className="mb-2 text-gray-700"><b>Phone:</b> +971 50 700 5884</div>
          <div className="mb-2 text-gray-700"><b>Hours:</b> Mon–Fri: 9:00 AM – 7:00 PM | Sat–Sun: Closed</div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 