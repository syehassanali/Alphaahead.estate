import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  // Add all pages with hero sections to transparent pages
  const isTransparentPage = location.pathname === '/' || 
    location.pathname === '/developers' || 
    location.pathname === '/communities' || 
    location.pathname === '/about' || 
    location.pathname === '/deyaar' || 
    location.pathname === '/damac' || 
    location.pathname === '/damac-lagoons' || 
    location.pathname === '/damac-hills' || 
    location.pathname === '/meraas' || 
    location.pathname === '/danube' || 
    location.pathname === '/dubai-south' || 
    location.pathname === '/binghatti' || 
    location.pathname === '/the-acres' || 
    location.pathname === '/city-walk' ||
    location.pathname === '/nad-al-sheba-gardens' ||
    location.pathname === '/madinat-jumeirah-living' ||
    location.pathname === '/bluewaters' ||
    location.pathname === '/aya' ||
    location.pathname === '/eleve' ||
    location.pathname === '/jannat-midtown' ||
    location.pathname === '/rivage' ||
    location.pathname === '/rosalia' ||
    location.pathname === '/talia' ||
    location.pathname === '/amalia' ||
    location.pathname === '/mar-casa' ||
    location.pathname === '/buy' ||
    location.pathname === '/sell' ||
    location.pathname === '/rent' ||
    location.pathname === '/property-management' ||
    location.pathname === '/holiday-home' ||
    location.pathname === '/contact';
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    if (!isTransparentPage) {
      setNavSolid(true);
      return;
    }
    const onScroll = () => {
      setNavSolid(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname, isTransparentPage]);

  return (
    <header className="fixed top-0 left-0 w-full z-30 transition-all duration-300">
      <nav className={
        navSolid
          ? "flex items-center justify-between px-2 md:px-4 py-1 bg-black/90 backdrop-blur-md shadow-lg border-b border-gray-900 transition-all duration-300"
: "flex items-center justify-between px-2 md:px-4 py-1 bg-transparent shadow-none border-none transition-all duration-300"
      }>
      <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/logo 5.png" alt="Logo" className="h-16 md:h-14 w-auto mr-2 drop-shadow-2xl" style={{maxHeight: '64px', minHeight: '40px'}} />
          </Link>
        </div>
        <div className={
          navSolid
            ? "hidden md:flex items-center gap-6 text-base font-medium text-white"
            : "hidden md:flex items-center gap-6 text-base font-medium text-white drop-shadow-lg"
        }>
          <Link to="/developers" className={location.pathname === '/developers' ? 'text-accent font-bold' : 'hover:text-accent transition'}>Developers</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'text-accent font-bold' : 'hover:text-accent transition'}>About Us</Link>
          {/* Existing number button remains unchanged */}
          <a href="tel:+971505606877" className={
            navSolid
              ? "ml-4 flex items-center gap-1 px-3 py-1 rounded-lg font-normal border transition text-sm bg-transparent text-white border-white/40 hover:bg-white hover:text-primary"
              : "ml-4 flex items-center gap-1 px-3 py-1 rounded-lg font-normal border transition text-sm bg-transparent text-white border-white/40 hover:bg-white hover:text-primary"
          } style={{letterSpacing: '0.1px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 text-inherit" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            +971 50 560 6877
          </a>
      </div>
    </nav>
  </header>
);
} 