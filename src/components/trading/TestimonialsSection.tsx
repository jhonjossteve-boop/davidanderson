import React, { useState } from 'react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'stock Trader',
      location: 'Singapore',
      image: '',
      content: "I've been using David Anderson Trade signals for 6 months now and my portfolio has grown by 340%. The accuracy is incredible - almost every signal hits the target.",
      profit: '+$245,200',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Crypto Investor',
      location: 'United Kingdom',
      image: '',
      content: "As a beginner, I was skeptical about trading signals. But the 1-hour advance notice gives me enough time to prepare, and the clear entry/exit points make execution easy.",
      profit: '+$328,500',
      rating: 5,
    },
    {
      name: 'James Rodriguez',
      role: 'Day Trader',
      location: 'United States',
      image: '',
      content: "The Premium plan is worth every penny. The 1-on-1 strategy sessions helped me understand the market better, and the VIP support is always responsive.",
      profit: '+$567,800',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      role: 'Part-time Trader',
      location: 'Australia',
      image: '',
      content: "I work full-time but still manage to follow the signals. The timezone adjustment feature ensures I get alerts at convenient times. Best investment I've made!",
      profit: '+$119,300',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm text-gray-300">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Traders Love <span className="gradient-text">Our Signals</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of successful traders who have transformed their portfolios with our premium signals.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-cyan-500/20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl object-cover border-2 border-cyan-500/30"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-lg">
                    {testimonials[activeIndex].profit}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <div className="text-white font-bold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-400">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-cyan-400 w-8' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
