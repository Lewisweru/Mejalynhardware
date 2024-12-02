import React from 'react';
import { Facebook, Twitter, Instagram, Clock, Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-white mb-4 block">
              Mejalyne Baraka Hardware
            </Link>
            <p className="text-sm">Your trusted partner for all home and hardware needs.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Mon-Fri: 8AM - 8PM</li>
              <li className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Sat: 9AM - 6PM</li>
              <li className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Sun: 10AM - 4PM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" /> 0746-607-996
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://wa.me/254746607996"
                    target="_blank"
                     rel="noopener noreferrer" className="hover:text-white transition-colors"><FaWhatsapp className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; Lewis Weru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
