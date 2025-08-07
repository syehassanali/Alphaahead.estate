import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white pt-16 pb-8 px-4 mt-auto">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
      {/* Left: Company Info */}
      <div>
        <h3 className="font-sans text-xl font-light mb-2 text-white">Alpha Ahead Real Estate Brokerage</h3>
        <div className="mb-2 text-gray-300">Office 1005, Oxford Tower, Business Bay – Dubai, UAE</div>
        <div className="mb-2 text-gray-300">info@alphaahead.com</div>
        <div className="mb-2 text-gray-300">+971 50 700 5884</div>
      </div>
      {/* Middle: Quick Links */}
      <div>
        <h4 className="font-sans text-lg font-light mb-2 text-white">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#communities" className="text-gray-300 hover:text-accent transition">Communities</a></li>
          <li><a href="#developers" className="text-gray-300 hover:text-accent transition">Developers</a></li>
          <li><a href="#about" className="text-gray-300 hover:text-accent transition">About Us</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-accent transition">Contact</a></li>
        </ul>
      </div>
      {/* Right: Business Hours & Socials */}
      <div>
        <h4 className="font-sans text-lg font-light mb-2 text-white">Business Hours</h4>
        <div className="text-gray-300">Monday – Friday: 9:00 AM – 7:00 PM</div>
        <div className="text-gray-300">Saturday – Sunday: Closed</div>
        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/company/alpha-ahead-estates/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/alphaaheadestates/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition" aria-label="Instagram">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-accent transition" aria-label="Facebook">
            <FaFacebook className="w-6 h-6" />
            </a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
      © 2025 Alpha Ahead Real Estate. All rights reserved.<br />Site built by Syed Hassan Ali.
    </div>
  </footer>
);

export default Footer; 