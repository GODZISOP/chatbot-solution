import React from 'react';
import { ArrowRight, Bot, MessageSquare, TrendingUp, Phone, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <Bot className="w-4 h-4" />
              <span>Professional Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with 
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Smart Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Professional website development and intelligent chatbot solutions to help your business capture leads, engage customers, and grow efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/appointmentstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-lg font-semibold"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="tel:+447492989721"
                  className="border-2 border-purple-600 text-purple-600 px-6 py-4 rounded-full hover:bg-purple-50 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">Fast</div>
                <div className="text-gray-600">Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">AI Assistant</div>
                    <div className="text-sm text-gray-500">Online</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3 text-sm">
                    Hi! I can help you with website development and chatbot solutions. What do you need?
                  </div>
                  <div className="bg-purple-600 text-white rounded-lg p-3 text-sm ml-6">
                    I need a website and chatbot for my business
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm">
                    Perfect! Let me connect you with our team to discuss your requirements.
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Client Satisfaction</div>
                  <div className="text-2xl font-bold text-green-500">98%</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <Bot className="w-8 h-8 text-purple-500 mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Quick Setup</div>
                  <div className="text-2xl font-bold text-purple-500">Fast</div>
                </div>
              </div>
              
              <div className="mt-4 bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-sm font-semibold text-gray-900 mb-2">Contact Us Directly:</div>
                <div className="flex flex-col space-y-2">
                  <a href="tel:+447492989721" className="text-purple-600 font-medium flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+44 7492 989721</span>
                  </a>
                  <a href="mailto:appointmentstudio@gmail.com" className="text-purple-600 font-medium flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>appointmentstudio@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;