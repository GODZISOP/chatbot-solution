import React from 'react';
import { Calendar, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your 
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Business?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch today to discuss your project and discover how our solutions can help grow your business.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Schedule Your Free Consultation</h4>
                    <p className="text-gray-600 mb-3">
                      Book a call to discuss your project requirements and get a personalized solution for your business.
                    </p>
                    <a
                      href="https://calendly.com/appointmentstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl font-semibold"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Free Call</span>
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center space-x-3">
                    
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <a href="mailto:appointmentstudio@gmail.com" className="text-purple-600 hover:text-purple-700 font-medium">
                          appointmentstudio@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-medium text-gray-900">Response Time</div>
                        <div className="text-gray-600">Usually within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">💼</span>
                  </div>
                  <div>
                    <div className="font-semibold">Full Package</div>
                    <div className="text-purple-100">Complete website + intelligent chatbot solution</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">🌐</span>
                  </div>
                  <div>
                    <div className="font-semibold">Website Only</div>
                    <div className="text-purple-100">Professional website design and development</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">🤖</span>
                  </div>
                  <div>
                    <div className="font-semibold">Chatbot Only</div>
                    <div className="text-purple-100">AI chatbot for your existing website</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Call</h3>
                <p className="text-gray-600">Choose a time that works best for you</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-2">Free Consultation Call</div>
                  <div className="text-gray-600 mb-4">✓ No commitment required</div>
                  <div className="text-gray-600 mb-4">✓ Personalized recommendations</div>
                  <div className="text-gray-600 mb-6">✓ Transparent pricing discussion</div>
                  
                  <a
                    href="https://calendly.com/appointmentstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Now</span>
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-4">Or contact us directly:</div>
                <div className="flex flex-col space-y-2">
                  <a
                    href="tel:+447492989721"
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+44 7492 989721</span>
                  </a>
                  <a
                    href="mailto:appointmentstudio@gmail.com"
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>appointmentstudio@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;