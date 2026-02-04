import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I receive the trading signals?',
      answer: 'Trading signals are delivered directly to your registered email address. Premium plan subscribers also receive signals via SMS and Telegram for instant notifications. You\'ll get all the details including entry price, stop-loss, and take-profit levels.',
    },
    {
      question: 'What is the win rate of your signals?',
      answer: 'Our signals have a proven 98% win rate based on our historical performance. We achieve this through rigorous technical analysis, market research, and risk management strategies. Every signal is carefully vetted before being sent to our subscribers.',
    },
    {
      question: 'How many signals do I receive per day?',
      answer: 'You\'ll receive 1-2 high-quality trading signals daily. We prioritize quality over quantity, ensuring each signal has a high probability of success. This approach helps you focus on the best opportunities without being overwhelmed.',
    },
    {
      question: 'What markets do you cover?',
      answer: 'Our signals cover major forex pairs (EUR/USD.), cryptocurrencies (BTC, ETH.), stock indices, and commodities. This diversification helps spread risk across different markets.',
    },
    {
      question: 'How much capital do I need to start?',
      answer: 'You can start with any amount you\'re comfortable with. We recommend starting with at least $500-$1000 to properly manage risk and see meaningful returns. Our signals include position sizing recommendations based on your account size.',
    },
    {
      question: 'Do I need trading experience?',
      answer: 'No prior experience is required! Our signals come with clear instructions including exact entry points, stop-loss levels, and take-profit targets. We also provide educational resources and support to help beginners understand the basics.',
    },
    {
      question: 'What is a purchase code and how do I get one?',
      answer: 'A purchase code is a unique verification code that activates your subscription. After making your payment through your signal account manager, you\'ll receive your purchase code. Simply enter it during registration to activate your plan.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Our plans are prepaid for the duration selected (3, 6, or 12 months). While we don\'t offer refunds, you can contact our support team if you have any concerns. We\'re committed to your success and will work with you to resolve any issues.',
    },
    {
      question: 'What timezone are the signals based on?',
      answer: 'Our signals are automatically adjusted to your local timezone. When you register, we detect your timezone and send trade entry times accordingly. This ensures you receive alerts at convenient times regardless of where you are in the world.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can reach our support team 24/7 via email at davidandersontrade@email.com, through our contact form, or via live chat on our website. Premium subscribers also get access to priority support with faster response times.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-gray-300">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="gradient-text-gold">Questions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our trading signals and subscription plans.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-cyan-500/30' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-white font-semibold pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 bg-cyan-500/20' : ''
                }`}>
                  <svg className={`w-5 h-5 ${openIndex === index ? 'text-cyan-400' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
