import React from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: TrendingUp, value: '3x', label: 'ROI Increase' },
    { icon: Target, value: '24/7', label: 'Support' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose 
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Appointment Studio?</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                We're not just another chatbot company. We're your strategic partner in digital transformation, 
                helping businesses like yours leverage the power of AI to create meaningful customer connections 
                and drive sustainable growth.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of AI specialists and digital marketers work together to create custom solutions 
                that align with your business goals and deliver measurable results from day one.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                  <p className="text-gray-600">AI specialists and marketing experts dedicated to your success</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Custom Solutions</h4>
                  <p className="text-gray-600">Tailored chatbot strategies designed for your specific industry and needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Proven Results</h4>
                  <p className="text-gray-600">Track record of helping businesses increase conversions by up to 300%</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl text-white text-center">
                <h4 className="text-lg font-semibold mb-2">Ready to Get Started?</h4>
                <p className="text-purple-100 mb-4">Join hundreds of successful businesses</p>
                <a
                  href="https://calendly.com/appointmentstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
                >
                  Book Free Consultation
                </a>
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

export default About;