import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    title: 'Iconic Location',
    description: 'Home to Ain Dubai, the world\'s largest observation wheel, Bluewaters Island is one of Dubai\'s most recognizable and sought-after destinations.',
    icon: '🎡'
  },
  {
    title: 'Vibrant Lifestyle',
    description: 'Experience a dynamic lifestyle with world-class dining, shopping, leisure and entertainment attractions all within walking distance.',
    icon: '🌟'
  },
  {
    title: 'Prime Location',
    description: 'Situated adjacent to Jumeirah Beach Residence, Palm Jumeirah and Dubai Marina, it\'s one of the most popular and vibrant areas of the city.',
    icon: '📍'
  },
  {
    title: 'Entertainment Hub',
    description: 'From Madame Tussauds Dubai to Brass Monkey, Bluewaters offers year-round entertainment for residents and visitors alike.',
    icon: '🎪'
  }
];

const destinations = [
  {
    title: 'Retail',
    description: 'Bluewaters is a vibrant lifestyle destination featuring distinctive retail, art galleries, hospitality, and entertainment options. The island is a shopper\'s paradise, featuring unique concepts in an elegant and convenient environment.',
    image: '/Meraas/Bluewaters/Bluewaters- Retail.jpg'
  },
  {
    title: 'Hotels',
    description: 'When you are looking to escape the ordinary, the Banyan Tree Dubai at Bluewaters is a place where you can blissfully retreat. Guests and visitors enjoy uninterrupted seascapes, fine dining and al fresco cuisine.',
    image: '/Meraas/Bluewaters/Bluewaters- Hospitalities.jpg'
  },
  {
    title: 'Entertainment',
    description: 'Bluewaters is a must-visit destination for anyone looking to have a great time out, all year round. Madame Tussauds Dubai features iconic celebrities and public figures. Ain Dubai stands at a staggering height of 250m.',
    image: '/Meraas/Bluewaters/Bluewaters- Entertainment.jpg'
  }
];

const faqs = [
  { 
    q: 'What makes Bluewaters unique?', 
    a: 'Bluewaters Island is home to Ain Dubai, the world\'s largest observation wheel, and offers a unique blend of luxury living, world-class dining, shopping, and entertainment attractions in one of Dubai\'s most iconic locations.' 
  },
  { 
    q: 'What types of properties are available?', 
    a: 'Bluewaters features luxury residential projects including Bluewaters Residences and Bluewaters Bay, offering premium living spaces with stunning views of the Arabian Gulf and Dubai skyline.' 
  },
  { 
    q: 'What amenities are included?', 
    a: 'The development includes world-class retail, the Banyan Tree Dubai hotel, Madame Tussauds Dubai, Ain Dubai observation wheel, Tr88house virtual reality experience, and Brass Monkey entertainment venue.' 
  },
  { 
    q: 'How can I register my interest?', 
    a: 'You can register your interest through our contact form or by calling our dedicated team. We\'ll guide you through the entire process and provide detailed information about available properties.' 
  },
  { 
    q: 'What is the location like?', 
    a: 'Bluewaters is situated adjacent to Jumeirah Beach Residence, Palm Jumeirah and Dubai Marina, making it one of the most popular and vibrant areas of the city with excellent connectivity.' 
  },
  { 
    q: 'Are there payment plans available?', 
    a: 'Yes, flexible payment plans are available for Bluewaters properties. Our team can provide detailed information about available options and guide you through the purchasing process.' 
  },
];

export default function BluewatersPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />
      <main className="flex-1 pb-12 bg-white">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center bg-white">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="/Meraas/Bluewaters/Bluewaters Residences PART OF A BIGGER VISION.jpg"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onError={(e) => console.log('Video error:', e)}
          >
            <source src="/Meraas/Bluewaters/Bluewaters_Drone-.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white font-sans tracking-tight drop-shadow-lg" style={{fontFamily: 'Roboto, sans-serif'}}>Bluewaters</h1>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-sm font-medium text-gray-600 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>INTRODUCING</h3>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Bluewaters</h2>
              <p className="text-lg text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Dubai is a city with many destinations that are recognised globally, but none are quite as iconic as Bluewaters Island. Home to Ain Dubai, as well as countless dining, shopping, leisure and entertainment attractions, Bluewaters became one of the most sought-after places to live.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Situated adjacent to Jumeirah Beach Residence, Palm Jumeirah and Dubai Marina, it's one of the most popular and vibrant areas of the city.
              </p>
              <button className="mt-8 px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Visit Microsite</button>
            </div>
            <div className="relative">
              <img src="/Meraas/Bluewaters/Bluewaters Residences PART OF A BIGGER VISION.jpg" alt="Bluewaters" className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Where Life Comes to Live</h2>
              <p className="text-lg text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Bluewaters Island represents the pinnacle of Dubai's lifestyle destinations, offering residents and visitors an unparalleled experience with world-class amenities, iconic attractions, and a vibrant community atmosphere.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/Meraas/Bluewaters/Bluewaters Master Development Gallery 1.jpg" alt="Iconic Location" className="w-full h-64 object-cover rounded-lg" />
              <img src="/Meraas/Bluewaters/Bluewaters Master Development Gallery 3.jpg" alt="Vibrant Lifestyle" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-medium text-gray-600 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>LOCATION</h3>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Find the Master Development on the Map</h2>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1787890123456!2d55.12345678901234!3d25.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzM0LjQiTiA1NcKwMDcnMzQuNCJF!5e0!3m2!1sen!2sae!4v1234567890123&style=feature:all|element:geometry|color:0xf5f5f5&style=feature:all|element:labels.text.fill|color:0x616161&style=feature:all|element:labels.text.stroke|color:0xf5f5f5&style=feature:landscape|element:geometry|color:0xf5f5f5&style=feature:landscape.man_made|element:geometry|color:0xe0e0e0&style=feature:poi|element:geometry|color:0xeeeeee&style=feature:poi|element:labels.text.fill|color:0x757575&style=feature:road|element:geometry|color:0xffffff&style=feature:road|element:geometry.stroke|color:0xeeeeee&style=feature:road|element:labels.text.fill|color:0x757575&style=feature:road.highway|element:geometry|color:0xfafafa&style=feature:road.highway|element:geometry.stroke|color:0xeeeeee&style=feature:road.highway|element:labels.text.fill|color:0x616161&style=feature:transit|element:geometry|color:0xe5e5e5&style=feature:transit|element:labels.text.fill|color:0x9e9e9e&style=feature:water|element:geometry|color:0xc9c9c9&style=feature:water|element:labels.text.fill|color:0x9e9e9e"
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bluewaters Location"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <h3 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Bluewaters</h3>
                <p className="text-sm text-gray-600 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Master Development</p>
                <div className="text-xs text-gray-500 space-y-1 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                  <p>📍 Bluewaters Island</p>
                  <p>📍 Near Jumeirah Beach Residence</p>
                  <p>📍 Adjacent to Palm Jumeirah</p>
                  <p>📍 Close to Dubai Marina</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Distance to Dubai Mall</h4>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>~20 minutes</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Distance to Airport</h4>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>~25 minutes</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Distance to Beach</h4>
                <p className="text-gray-600 font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>Direct Access</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Destination Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>The Destination</h2>
          </div>
          
          {/* Retail - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img src="/Meraas/Bluewaters/Bluewaters- Retail.jpg" alt="Retail" className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-light text-gray-900 mb-4 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Retail</h3>
              <p className="text-lg text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Bluewaters is a vibrant lifestyle destination featuring distinctive retail, art galleries, hospitality, and entertainment options. The island is a shopper's paradise, featuring unique concepts in an elegant and convenient environment for visitors and residents to enjoy. From homegrown fashion and artisan souvenirs to internationally recognized luxury lifestyle brands.
              </p>
            </div>
          </div>

          {/* Hotels - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-left">
              <h3 className="text-2xl font-light text-gray-900 mb-4 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Hotels</h3>
              <p className="text-lg text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                When you are looking to escape the ordinary, the Banyan Tree Dubai at Bluewaters is a place where you can blissfully retreat. Guests and visitors enjoy uninterrupted seascapes, fine dining and al fresco cuisine, as well as the Banyan Tree's award-winning spa experiences. True relaxation begins here.
              </p>
            </div>
            <div className="relative">
              <img src="/Meraas/Bluewaters/Bluewaters- Hospitalities.jpg" alt="Hotels" className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>

          {/* Entertainment - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="/Meraas/Bluewaters/Bluewaters- Entertainment.jpg" alt="Entertainment" className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-light text-gray-900 mb-4 font-sans tracking-tight" style={{fontFamily: 'Roboto, sans-serif'}}>Entertainment</h3>
              <p className="text-lg text-gray-700 leading-relaxed font-sans" style={{fontFamily: 'Roboto, sans-serif'}}>
                Bluewaters is a must-visit destination for anyone looking to have a great time out, all year round. Madame Tussauds Dubai features iconic celebrities and public figures. The perfect location to be seen with the stars! Ain Dubai stands at a staggering height of 250m, the highest and largest of its kind in the world. Tr88house is Bluewater's indoor virtual reality and Laser Tag experience, and Brass Monkey, one of Dubai's popular nightspots, offers bowling and vintage games combined with unforgettable dining options.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
            <p className="text-lg text-gray-700">Explore Bluewaters through our stunning photography</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/Bluewaters/Bluewaters Master Development Gallery 1.jpg" alt="Bluewaters Overview" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Iconic Location</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/Bluewaters/Bluewaters Master Development Gallery 3.jpg" alt="Vibrant Lifestyle" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Vibrant Lifestyle</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/Bluewaters/Bluewaters Master Development Gallery 4.jpg" alt="Prime Location" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Prime Location</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/Bluewaters/Bluewaters Master Development Gallery 5.jpg" alt="Entertainment Hub" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Entertainment Hub</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/Bluewaters/Bluewaters Residences Project Listing Image.jpg.webp" alt="Bluewaters Residences" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Bluewaters Residences</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="/Meraas/Bluewaters/Bluewaters Bay Project Listing Image.jpg.webp" alt="Bluewaters Bay" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Bluewaters Bay</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Masterplan Section */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">MASTERPLAN</h2>
            <p className="text-lg text-gray-700 mb-8">Explore the Blueprint of the Master Development</p>
            <div className="flex justify-center mb-8">
              <a 
                href="/Meraas/Bluewaters/Bluewaters-Master-Plan (1).jpg" 
                download
                className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Masterplan Image</span>
              </a>
            </div>
          </div>
          
          <div className="bg-white">
            <div className="relative">
              <img 
                src="/Meraas/Bluewaters/Bluewaters_MP_Web (1).jpg" 
                alt="Bluewaters Master Plan" 
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900">Bluewaters Master Plan</h3>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="bg-gray-50 p-4 text-xs text-gray-600">
              <p>
                **Disclaimer: The interior and exterior finishes displayed in this tool are for illustrative purposes only. The actual finishes may vary significantly from what is shown here. All furniture used is also for illustration only. Refer to the project's photos and videos available on our website for a more realistic representation of the finishes of the units.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="max-w-4xl mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Register your interest for Bluewaters</h2>
          </div>
          <form className="bg-white p-8 border border-gray-200 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First name (as per passport)*" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
              <input type="text" placeholder="Last name (as per passport)*" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
              <input type="email" placeholder="Email*" className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black" />
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">+971</div>
                <input type="tel" placeholder="Phone Number*" className="px-4 py-3 pl-12 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black w-full" />
              </div>
              <select className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black">
                <option value="">What's the purpose of buying?*</option>
                <option value="investment">Investment</option>
                <option value="residence">Residence</option>
                <option value="rental">Rental</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black">
                <option value="">How soon are you looking to buy?*</option>
                <option value="immediately">Immediately</option>
                <option value="3-months">Within 3 months</option>
                <option value="6-months">Within 6 months</option>
                <option value="1-year">Within 1 year</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black">
                <option value="">Number of bedrooms*</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5+">5+ Bedrooms</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black">
                <option value="">Are you assisted by a broker?*</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mt-6">
              <label className="flex items-start space-x-2 text-sm text-gray-700">
                <input type="checkbox" className="mt-1" />
                <span>By accepting and providing my personal information I am consenting to Meraas Privacy Policy, as well as the applicable data protection laws.*</span>
              </label>
            </div>
            <button type="submit" className="w-full mt-8 px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200">REGISTER INTEREST</button>
          </form>
        </section>

        {/* Why Invest Section */}
        <section className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Why Choose Bluewaters?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Iconic Location</h3>
              <p>Home to Ain Dubai, the world's largest observation wheel, Bluewaters Island is one of Dubai's most recognizable and sought-after destinations.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Vibrant Lifestyle</h3>
              <p>Experience a dynamic lifestyle with world-class dining, shopping, leisure and entertainment attractions all within walking distance.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Prime Location</h3>
              <p>Situated adjacent to Jumeirah Beach Residence, Palm Jumeirah and Dubai Marina, it's one of the most popular and vibrant areas of the city.</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-3">Entertainment Hub</h3>
              <p>From Madame Tussauds Dubai to Brass Monkey, Bluewaters offers year-round entertainment for residents and visitors alike.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => {
                    const faqElement = document.getElementById(`faq-${index}`);
                    if (faqElement) {
                      faqElement.classList.toggle('hidden');
                    }
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div id={`faq-${index}`} className="hidden px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 