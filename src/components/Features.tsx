import React from 'react';
import { Bot, MessageCircle, BarChart3, Clock, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that understands context and provides human-like interactions to engage your customers effectively.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      title: 'Lead Qualification',
      description: 'Automatically qualify leads by asking the right questions and routing high-value prospects to your sales team.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Detailed analytics on customer interactions, conversion rates, and performance metrics to optimize your strategy.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a lead again with round-the-clock automated customer support and lead capture capabilities.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Multi-Channel Integration',
      description: 'Deploy across your website, social media, and messaging platforms for seamless customer experiences.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get your chatbot up and running in minutes with our intuitive setup process and pre-built templates.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for 
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive chatbot solutions are designed to streamline your customer interactions and maximize lead generation potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a
            href="https://calendly.com/appointmentstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl text-lg font-semibold"
          >
            <span>Schedule Your Demo</span>
            <Bot className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;