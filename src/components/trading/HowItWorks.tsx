import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: '1-2 Solid Trades Daily',
      description: 'Receive carefully analyzed trading signals every day. Quality over quantity ensures maximum profitability.',
      color: 'cyan',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: '98% Win Rate',
      description: 'Our proven track record speaks for itself. Join thousands of traders who consistently profit with our signals.',
      color: 'emerald',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '1-Hour Advance Notice',
      description: 'Get notified one hour before each trade entry, giving you ample time to prepare and execute.',
      color: 'amber',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Your Local Timezone',
      description: 'Trade entry times are automatically adjusted to your local timezone for seamless execution.',
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
      cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'group-hover:shadow-cyan-500/20' },
      emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30', glow: 'group-hover:shadow-emerald-500/20' },
      amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30', glow: 'group-hover:shadow-amber-500/20' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30', glow: 'group-hover:shadow-purple-500/20' },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm text-gray-300">How Our Signals Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple, Powerful, <span className="gradient-text">Profitable</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our streamlined process delivers high-quality trading signals directly to you, 
            making profitable trading accessible to everyone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);
            return (
              <div
                key={index}
                className={`group glass-card p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${colors.glow}`}
              >
                <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-6 ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="mt-20 glass-card p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Your Trading Journey</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Subscribe', desc: 'Choose your plan and complete registration' },
              { step: '02', title: 'Receive Signals', desc: 'Get daily trade alerts via email' },
              { step: '03', title: 'Execute Trades', desc: 'Follow the precise entry instructions' },
              { step: '04', title: 'Profit', desc: 'Watch your portfolio grow consistently' },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="text-5xl font-bold gradient-text opacity-30 mb-4">{item.step}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 text-cyan-500/50">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
