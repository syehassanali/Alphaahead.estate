import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const propertyImages = [
  '/property1.jpg',
  '/property2.jpg',
  '/pexels-katetrysh-281502.jpg',
];

const developers = [
  { name: 'Meraas', summary: 'Design-led developer behind Bluewaters, City Walk', img: '/Meraas.jpg' },
  { name: 'Deyaar', summary: 'Master developer of iconic communities like Downtown Dubai', img: '/Emaar.jpg' },
  { name: 'Damac', summary: 'Luxury apartments, villas & branded residences', img: '/Damac.jpg' },
  { name: 'Danube', summary: 'Creators of Palm Jumeirah and waterfront living', img: '/Nakheel.jpg' },
  { name: 'Dubai South', summary: 'Sophisticated mixed-use lifestyle projects', img: '/pic1.jpg' },
  { name: 'Binghatti', summary: 'Premium developer known for Madinat Jumeirah Living & Sobha Hartland', img: '/Sobha.png' },
];

const communities = [
  { img: '/deyaar/Dubai Hills Estate.jpeg', title: 'Dubai Hills Estate', tagline: 'The Green Heart of Dubai' },
  { img: '/deyaar/Dubai Creek Harbour.jpeg', title: 'Dubai Creek Harbour', tagline: 'Views to Live For' },
  { img: '/deyaar/The Valley.jpg', title: 'The Valley', tagline: 'Dreams Begin Here' },
  { img: '/deyaar/the-oasis.jpg', title: 'The Oasis', tagline: 'Immerse in Pure Luxury' },
  { img: '/deyaar/Emaar-south.jpg', title: 'Emaar South', tagline: 'Community With Global Gateway' },
  { img: '/deyaar/Rashid Yacht & Marina.jpg', title: 'Rashid Yacht & Marina', tagline: 'Where Heritage Meets Future' },
];

const pillars = [
  { title: 'Sell Your Home', desc: 'Get expert valuation backed by market data.' },
  { title: 'Buy a Home', desc: 'Explore handpicked villas, townhouses, and apartments.' },
  { title: 'Rent a Home', desc: 'Find flexible rental options for every lifestyle.' },
];

const agents = [
  { name: 'Konstantin Kisselyov', role: 'Senior Agent' },
  { name: 'Shadi Shaaban', role: 'Property Consultant' },
  { name: 'Dania Kokash', role: 'Sales Executive' },
  { name: 'Naz Acar', role: 'Leasing Specialist' },
  { name: 'Alina Djeilan', role: 'Investment Advisor' },
  { name: 'Imtiaz Cassim', role: 'Client Manager' },
];

const faqs = [
  { q: 'Why invest in off-plan properties in Dubai?', a: 'Dubai\'s off-plan market offers lower entry prices, flexible payment plans, and high ROI potential (typically 20-30% upon completion), combined with zero property taxes and a booming rental market.' },
  { q: 'What makes Alpha Ahead Real Estate different?', a: 'We specialize in pre-launch access to premium developments, with a curated selection of projects from trusted developers that pass our strict ROI and quality criteria.' },
  { q: 'Are off-plan investments safe?', a: 'Yes. Dubai\'s RERA regulations protect investors, requiring developers to place funds in escrow accounts. We only work with top-tier, verified developers with proven delivery records.' },
  { q: 'What are the payment terms?', a: 'Most projects offer installment plans (typically 10-30% downpayment with the balance spread over construction). Some elite developments we feature have post-handover payment options.' },
  { q: 'Which areas offer the best ROI?', a: 'Current hotspots: Downtown Dubai (15-20% annual appreciation), Dubai Creek Harbour (future Expo 2025 growth), Palm Jumeirah (limited inventory = high demand).' },
  { q: 'Can non-residents invest?', a: 'Absolutely. Dubai allows 100% foreign ownership with no residency requirements. We handle all paperwork including residency visa processing if desired.' },
  { q: 'How do I earn returns before completion?', a: 'Many investors flip contracts during construction (permitted in Dubai) for quick profits. We provide market timing advice and buyer matching.' },
  { q: 'What\'s your after-sales support?', a: 'From handover assistance to rental management and resale strategies, we support your investment lifecycle—all under one roof.' },
];

const socials = [
  { name: 'Facebook', url: '#', icon: <FaFacebook className="w-6 h-6" /> },
  { name: 'LinkedIn', url: '#', icon: <FaLinkedin className="w-6 h-6" /> },
  { name: 'Instagram', url: '#', icon: <FaInstagram className="w-6 h-6" /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Homepage() {
  // Hero slideshow state
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % propertyImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  // Navbar scroll state
  const [navSolid, setNavSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const heroHeight = heroRef.current ? heroRef.current.offsetHeight : 0;
      const aboutHeight = aboutRef.current ? aboutRef.current.offsetHeight : 0;
      const threshold = heroHeight + aboutHeight - 100; // 100px buffer for nav height and smoothness
      setNavSolid(window.scrollY > threshold + 40); // 40px extra buffer for smooth transition
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  // Card images for the interactive section
  const cardImages = [
    '/images/pexels-alexazabache-3254725.jpg', // Buy
    '/pic3.jpg',      // Sell
    '/images/pexels-mo-ismail-2130628-3763190.jpg', // Rent
    '/images/pexels-amar-saleem-15661-70441.jpg',   // Property Management
    '/images/pexels-pranjalsrivastava9-2403251.jpg' // Holiday Home
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />

      {/* Hero Section (Video Background) */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/v4.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-30 flex flex-col items-center text-center w-full px-4" style={{minHeight: '80vh', display: 'flex', justifyContent: 'flex-end', paddingBottom: '3rem'}}>
          <h1 className="font-sans text-3xl md:text-5xl font-light text-white drop-shadow mb-4 leading-snug tracking-tight" style={{fontFamily: 'Roboto, sans-serif', textShadow: '0 1px 4px rgba(0,0,0,0.18)'}}>Live Where Dubai's Luxury Meets Lifestyle<br /><span className="block font-sans font-light mt-2" style={{fontFamily: 'Roboto, sans-serif'}}>only with Alpha Ahead Estate</span></h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <a href="/contact" className="px-8 py-2.5 rounded-lg bg-white/10 text-white text-lg shadow border border-white/40 hover:bg-white hover:text-primary transition-colors duration-200 tracking-wide" style={{letterSpacing: '0.5px', textShadow: '0 1px 4px rgba(0,0,0,0.15)'}}>Contact Us</a>
            <a href="#search" className="px-8 py-2.5 rounded-lg bg-white/10 text-white text-lg shadow border border-white/40 hover:bg-white hover:text-primary transition-colors duration-200 tracking-wide" style={{letterSpacing: '0.5px', textShadow: '0 1px 4px rgba(0,0,0,0.15)'}}>Search Properties</a>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section id="developers" className="relative w-full flex items-center justify-center py-24 px-4 bg-white">
        <div className="relative max-w-6xl w-full mx-auto flex flex-col items-center z-10">
          <h2 className="text-4xl md:text-5xl mb-8 text-center font-sans font-light text-gray-900 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Trusted Developers in Dubai</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {developers.map((dev) => {
            const isMajid = dev.name === 'Majid Al Futtaim';
            const isDeyaar = dev.name === 'Deyaar';
            const isDamac = dev.name === 'Damac';
            const isMeraas = dev.name === 'Meraas';
            const isDanube = dev.name === 'Danube';
            return (
              <div
                key={dev.name}
                className="relative rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-200 overflow-hidden min-h-[320px] justify-center"
                style={{
                  backgroundImage: `url(${dev.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className={isMajid ? "absolute inset-0 bg-black/80 z-0" : "absolute inset-0 bg-black/60 z-0"} />
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-8 gap-4">
                  <h3 className={isMajid ? "text-2xl font-light text-white font-sans drop-shadow-xl" : "text-2xl font-light text-white font-sans drop-shadow-lg"} style={{fontFamily: 'Roboto, sans-serif'}}>{dev.name}</h3>
                  <p className={isMajid ? "text-white/90 font-normal drop-shadow-xl font-sans" : "text-white/90 font-normal drop-shadow font-sans"} style={{fontFamily: 'Roboto, sans-serif'}}>{dev.summary}</p>
                  {isDeyaar ? (
                    <Link to="/deyaar" className="px-6 py-2 rounded-lg bg-transparent text-white font-semibold shadow border border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">Learn More</Link>
                  ) : isDamac ? (
                    <Link to="/damac" className="px-6 py-2 rounded-lg bg-transparent text-white font-semibold shadow border border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">Learn More</Link>
                  ) : isMeraas ? (
                    <Link to="/meraas" className="px-6 py-2 rounded-lg bg-transparent text-white font-semibold shadow border border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">Learn More</Link>
                  ) : isDanube ? (
                    <Link to="/danube" className="px-6 py-2 rounded-lg bg-transparent text-white font-semibold shadow border border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">Learn More</Link>
                  ) : isMajid ? (
                    <Link to="/majid-al-futtaim" className="px-6 py-2 rounded-lg bg-transparent text-white font-semibold shadow border border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">Learn More</Link>
                  ) : (
                  <Link to="#" className="px-6 py-2 rounded-lg bg-transparent text-white font-semibold shadow border border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">Learn More</Link>
                  )}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Map Divider */}
      <div className="w-full flex justify-center my-16">
        <div className="w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden border-2 border-dark-600">
          <img src="/map2.webp" alt="Dubai Map" className="w-full h-[300px] md:h-[400px] object-cover object-center" loading="lazy" width="1200" height="400" />
        </div>
      </div>

            {/* Interactive Services Card Section */}
      <section ref={aboutRef} id="about" className="relative w-full flex items-center justify-center py-24 px-4 bg-white">
        <div className="relative max-w-6xl w-full mx-auto flex flex-col items-center z-10">
          <h2 className="text-4xl md:text-5xl mb-8 text-center font-sans font-light text-gray-900 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Our Services</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl">From buying and renting premium properties to investment advisory and property management, we offer end-to-end real estate solutions in Dubai.</p>
          <div className="flex flex-nowrap overflow-x-auto gap-6 w-full pb-4 snap-x snap-mandatory scrollbar-hide">
            {[
              { title: 'Buy', desc: 'Explore handpicked villas, townhouses, and apartments across Dubai.', path: '/buy' },
              { title: 'Sell', desc: 'Get expert valuation backed by market insights and exposure.', path: '/sell' },
              { title: 'Rent', desc: 'Flexible rental options for all lifestyles and budgets.', path: '/rent' },
              { title: 'Property Management', desc: 'Professional end-to-end property care for local and overseas owners.', path: '/property-management' },
              { title: 'Holiday Home', desc: 'Short-term luxury rentals with full service and visibility.', path: '/holiday-home' },
            ].map((card, idx) => (
              <Link
                key={card.title}
                to={card.path}
                className="group relative rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden min-w-[280px] md:min-w-[340px] max-w-[340px] w-[85vw] md:w-[340px] h-[400px] md:h-[500px] flex items-end justify-center snap-center"
                style={{backgroundImage: `url(${cardImages[idx]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300" />
                {/* Content */}
                <div className="absolute left-1/2 bottom-0 z-10 flex flex-col items-center text-center w-[90%] max-w-[90%] p-6 transform -translate-x-1/2 transition-all duration-300 group-hover:-translate-y-8">
                  <div className="text-2xl font-sans font-medium text-white mb-2 drop-shadow-lg" style={{fontFamily: 'Roboto, sans-serif'}}>{card.title}</div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-base px-2 drop-shadow-lg" style={{fontFamily: 'Roboto, sans-serif'}}>
                    {card.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner (Investment Highlight) */}
      <section className="relative w-full py-20 px-4 bg-gray-900 overflow-hidden">
        <img
          src="/property2.jpg"
          alt="Investment Highlight"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
          width="1200"
          height="600"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="font-sans text-3xl md:text-4xl font-light mb-4 drop-shadow-lg" style={{fontFamily: 'Roboto, sans-serif'}}>Discover Dubai’s Finest Off-Plan Property Investments</h2>
          <p className="mb-6 text-lg font-medium drop-shadow" style={{fontFamily: 'Roboto, sans-serif'}}>From waterfront villas in The Oasis to skyline apartments in Downtown Dubai —<br />Alpha Ahead connects you to exclusive, tax-free investment opportunities in Dubai’s most desirable communities.</p>
          <a href="#" className="inline-block px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-lg shadow-lg border border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">Browse Investments</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-20 px-4 bg-white">
        <h2 className="font-sans text-3xl md:text-4xl font-light text-gray-900 mb-10 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="border border-dark-600 rounded-xl bg-card shadow-sm">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-white text-left focus:outline-none"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
              >
                <span>{faq.q}</span>
                <svg className={classNames('w-6 h-6 transition-transform', openFaq === idx ? 'rotate-180' : '')} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 text-gray-300 text-base animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#contact" className="inline-block px-6 py-3 rounded-lg bg-transparent text-white font-semibold shadow border border-white/40 hover:bg-white hover:text-primary transition-colors duration-200">Have more questions? Contact Us</a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
  </div>
);
}

export default Homepage;

/* Hide scrollbar utility */
<style>{`
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`}</style>