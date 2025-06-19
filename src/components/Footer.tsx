import React from 'react';
import { Bot, Mail, Phone, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Bot className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Appointment Studio
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional chatbot solutions and website development to help businesses capture leads and engage customers effectively.
            </p>
            <div className="flex space-x-4">
             
              <a href="https://www.facebook.com/share/1AjtXQCeju/?mibextid=wwXIfr" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Full Package</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Website Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Chatbot Solutions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Custom Solutions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Testimonials</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="tel:+447492989721" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  +44 7492 989721
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:appointmentstudio@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  appointmentstudio@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <a
                href="https://calendly.com/appointmentstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl font-semibold"
              >
                <Bot className="w-4 h-4" />
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Appointment Studio. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;