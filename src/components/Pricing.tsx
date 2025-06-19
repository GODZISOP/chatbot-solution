import React from 'react';
import { Check, Star, Calendar, Bot, Globe, Package } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Website Only',
      price: '$200',
      period: '',
      description: 'Professional website design for your business',
      icon: Globe,
      features: [
        'Custom website design',
        'Responsive mobile design',
        'SEO optimization',
        'Contact forms',
        'Social media integration',
        'Basic analytics setup',
        'Free hosting setup guidance',
        '30 days support'
      ],
      buttonText: 'Get Website',
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Full Package',
      price: '$500',
      period: '',
      description: 'Complete solution with website and intelligent chatbot',
      icon: Package,
      features: [
        'Everything in Website Only',
        'AI-powered chatbot',
        'Lead qualification system',
        'Automated responses',
        'Multi-channel integration',
        'Analytics dashboard',
        'Custom chatbot training',
        'Priority support',
        '60 days support'
      ],
      buttonText: 'Best Value',
      popular: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Chatbot Only',
      price: '$300',
      period: '',
      description: 'Smart chatbot solution for your existing website',
      icon: Bot,
      features: [
        'AI chatbot development',
        'Custom conversation flows',
        'Lead capture system',
        'Website integration',
        'Basic analytics',
        'Training & setup',
        'Documentation provided',
        '30 days support'
      ],
      buttonText: 'Get Chatbot',
      popular: false,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent 
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect solution for your business. All packages include professional setup with no hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-2xl scale-105' 
                  : 'bg-white border-2 border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Best Value</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.popular ? 'bg-white/20' : `bg-gradient-to-r ${plan.color}`
                }`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-white'}`} />
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-purple-600'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-purple-200' : 'text-green-500'
                    }`} />
                    <span className={`${plan.popular ? 'text-purple-100' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://calendly.com/appointmentstudio"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-full font-semibold text-center transition-all duration-200 flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>{plan.buttonText}</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Contact us directly to discuss your specific requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+447492989721"
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl font-semibold"
              >
                <span>📞 +44 7492 989721</span>
              </a>
              <a
                href="mailto:appointmentstudio@gmail.com"
                className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition-all duration-200 inline-flex items-center space-x-2 font-semibold"
              >
                <span>📧 appointmentstudio@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;