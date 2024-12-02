import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsappSquare } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-blue-600 mr-3" />
              <span>Nanyuki Baraka </span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-600 mr-3" />
              <span>0746-607-996</span>
            </div>
            <div className="flex items-center"><a
                   href="https://wa.me/254746607996"
                    target="_blank"
                     rel="noopener noreferrer"
                    className="hover:text-pink-400"
               >
               <FaWhatsappSquare className="h-6 w-6 text-green-600 mr-3" />
               <span>Text Whatsapp</span>
               </a>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 8AM - 8PM</li>
              <li>Saturday: 9AM - 6PM</li>
              <li>Sunday: 10AM - 4PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}