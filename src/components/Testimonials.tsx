import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'Appointment Studio transformed our lead generation process. We went from 10 leads per month to over 150, with much higher quality prospects. The chatbot feels so natural that customers love interacting with it.',
      rating: 5,
      avatar: 'https://images.squarespace-cdn.com/content/v1/5e24adf5c58616310609cfe5/d890265d-f3c2-4c07-bde0-0e813b346c6a/Sarah+LaBrie+Headshot+1+%282%29.JPG'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Growth Dynamics',
      content: 'The ROI has been incredible. Within 3 months, our chatbot was handling 70% of initial customer inquiries and booking qualified sales calls around the clock. Best investment we\'ve made this year.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      company: 'Local Services Pro',
      content: 'What impressed me most was how quickly they understood our business and created a chatbot that perfectly matches our brand voice. Our customer satisfaction scores have never been higher.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our 
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders are saying about their experience with our chatbot solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="w-8 h-8 text-purple-200 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-900 font-semibold">4.9/5 Average Rating</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">500+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;