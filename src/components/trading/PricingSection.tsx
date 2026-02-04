import React from 'react';

export interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  duration: string;
  durationMonths: number;
  features: string[];
  popular?: boolean;
  code: string;
}

interface PricingSectionProps {
  onSelectPlan: (plan: Plan) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 500,
      duration: '3 Months',
      durationMonths: 3,
      code: '09TTUYH',
      features: [
        '1-2 Daily Trade Signals',
        '98% Win Rate Accuracy',
        '1-Hour Advance Notifications',
        'Email Delivery',
        'Basic Support',
        'Entry & Exit Points',
      ],
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      price: 700,
      originalPrice: 800,
      duration: '6 Months',
      durationMonths: 6,
      code: '90HHUKO',
      popular: true,
      features: [
        '1-2 Daily Trade Signals',
        '98% Win Rate Accuracy',
        '1-Hour Advance Notifications',
        'Email & SMS Delivery',
        'Priority Support',
        'Entry & Exit Points',
        'Risk Management Tips',
        'Weekly Market Analysis',
      ],
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 1000,
      duration: '12 Months',
      durationMonths: 12,
      code: 'R6HUIPO',
      features: [
        '1-2 Daily Trade Signals',
        '98% Win Rate Accuracy',
        '1-Hour Advance Notifications',
        'Email, SMS & Telegram',
        '24/7 VIP Support',
        'Entry & Exit Points',
        'Risk Management Tips',
        'Weekly Market Analysis',
        'Exclusive Trading Webinars',
        '1-on-1 Strategy Sessions',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-gray-300">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Your <span className="gradient-text-gold">Trading Plan</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Invest in your trading success. All plans include our premium signals with a proven 98% win rate.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative glass-card overflow-hidden transition-all duration-500 hover:-translate-y-3 ${
                plan.popular 
                  ? 'border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/20' 
                  : 'hover:border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.duration} Access</p>

                {/* Price */}
                <div className="mb-8">
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-500 line-through text-lg">${plan.originalPrice}</span>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                        SAVE ${plan.originalPrice - plan.price}
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-extrabold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{plan.durationMonths} mo</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    ${(plan.price / plan.durationMonths).toFixed(0)}/month
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-cyan-500/50'
                  }`}
                >
                  Get Started
                </button>
              </div>

              {/* Bottom Accent */}
              {plan.popular && (
                <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              )}
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm">Instant Access</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-sm">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
