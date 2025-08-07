import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import CommunitiesPage from './pages/CommunitiesPage';
import GoogleTranslateWidget from './components/GoogleTranslateWidget';
import DevelopersPage from './pages/DevelopersPage';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import RentPage from './pages/RentPage';
import PropertyManagementPage from './pages/PropertyManagementPage';
import HolidayHomePage from './pages/HolidayHomePage';
import DeyaarPage from './pages/DeyaarPage';
import DamacPage from './pages/DamacPage';
import MeraasPage from './pages/MeraasPage';
import DanubePage from './pages/DanubePage';
import DubaiSouthPage from './pages/DubaiSouthPage';
import BinghattiPage from './pages/BinghattiPage';
import TheAcresPage from './pages/TheAcresPage';
import CityWalkPage from './pages/CityWalkPage';
import NadAlShebaGardensPage from './pages/NadAlShebaGardensPage';
import MadinatJumeirahLivingPage from './pages/MadinatJumeirahLivingPage';
import BluewatersPage from './pages/BluewatersPage';
import AyaPage from './pages/AyaPage';
import ElevePage from './pages/ElevePage';
import JannatMidtownPage from './pages/JannatMidtownPage';
import RivagePage from './pages/RivagePage';
import RosaliaPage from './pages/RosaliaPage';
import TaliaPage from './pages/TaliaPage';
import AmaliaPage from './pages/AmaliaPage';
import MarCasaPage from './pages/MarCasaPage';
import DamacLagoonsPage from './pages/DamacLagoonsPage';
import DamacHillsPage from './pages/DamacHillsPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      {/* Visually hidden Google Translate widget for Navbar language switcher */}
      <div className="hidden">
        <GoogleTranslateWidget />
      </div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/property-management" element={<PropertyManagementPage />} />
          <Route path="/holiday-home" element={<HolidayHomePage />} />
          <Route path="/deyaar" element={<DeyaarPage />} />
          <Route path="/damac" element={<DamacPage />} />
          <Route path="/meraas" element={<MeraasPage />} />
          <Route path="/danube" element={<DanubePage />} />
          <Route path="/dubai-south" element={<DubaiSouthPage />} />
          <Route path="/binghatti" element={<BinghattiPage />} />
          <Route path="/the-acres" element={<TheAcresPage />} />
          <Route path="/city-walk" element={<CityWalkPage />} />
          <Route path="/nad-al-sheba-gardens" element={<NadAlShebaGardensPage />} />
          <Route path="/madinat-jumeirah-living" element={<MadinatJumeirahLivingPage />} />
          <Route path="/bluewaters" element={<BluewatersPage />} />
          <Route path="/aya" element={<AyaPage />} />
          <Route path="/eleve" element={<ElevePage />} />
          <Route path="/jannat-midtown" element={<JannatMidtownPage />} />
          <Route path="/rivage" element={<RivagePage />} />
          <Route path="/rosalia" element={<RosaliaPage />} />
          <Route path="/talia" element={<TaliaPage />} />
          <Route path="/amalia" element={<AmaliaPage />} />
          <Route path="/mar-casa" element={<MarCasaPage />} />
          <Route path="/damac-lagoons" element={<DamacLagoonsPage />} />
          <Route path="/damac-hills" element={<DamacHillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      {/* Fixed right-center social/contact box */}
      <div className="fixed top-1/2 right-2 -translate-y-1/2 z-40 flex flex-col">
        {/* WhatsApp Call */}
        <a href="https://wa.me/971505606877" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-black shadow group transition" title="WhatsApp Call">
          {/* WhatsApp call icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white group-hover:text-black transition" viewBox="0 0 24 24" fill="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/><path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.463 3.484 1.34 4.997L2 22l5.104-1.336c1.462.799 3.09 1.222 4.9 1.222 5.514 0 9.997-4.483 9.997-9.997 0-5.514-4.483-9.997-9.997-9.997zm0 17.995c-1.627 0-3.188-.438-4.522-1.267l-.323-.192-3.029.793.808-2.951-.21-.304c-.84-1.217-1.285-2.646-1.285-4.074 0-4.411 3.588-7.999 7.999-7.999 4.411 0 7.999 3.588 7.999 7.999 0 4.411-3.588 7.999-7.999 7.999z" fill="currentColor"/></svg>
        </a>
        {/* Email */}
        <a href="mailto:info@alphaahead.com" className="w-8 h-8 flex items-center justify-center rounded-lg bg-black shadow group transition" title="Email">
          {/* Envelope icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2"/></svg>
        </a>
        {/* Call */}
        <a href="tel:+971505606877" className="w-8 h-8 flex items-center justify-center rounded-lg bg-black shadow group transition" title="Call">
          {/* Phone icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
        </a>
      </div>
    </>
  );
}

export default App;
