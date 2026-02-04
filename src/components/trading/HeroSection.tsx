import React from 'react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const stats = [
    { value: '98%', label: 'Win Rate' },
    { value: '1-2', label: 'Daily Trades' },
    { value: '5000+', label: 'Active Traders' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#0F1629] to-[#0A0E27]" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-500/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-gray-300">Trusted by 5,000+ Professional Traders</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Trade Smarter with{' '}
              <span className="gradient-text">Premium Signals</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Join David Anderson Trade and receive high-accuracy trading signals with a{' '}
              <span className="text-cyan-400 font-semibold">98% win rate</span>. 
              Get 1-2 solid trades daily, delivered directly to your inbox.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={onGetStarted}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2"
              >
                Start Trading Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Trading Chart Visualization */}
          <div className="relative hidden lg:block">
            <div className="relative glass-card p-6 animate-float">
              {/* Chart Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center">
                    <span className="text-sm font-bold text-black">BTC</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">BTC/USD</div>
                    <div className="text-emerald-400 text-sm">+4.52%</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-xl">$67,842</div>
                  <div className="text-gray-400 text-sm">Live Price</div>
                </div>
              </div>

              {/* Simulated Chart */}
              <div className="h-48 relative mb-4">
                <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0, 217, 255, 0.3)" />
                      <stop offset="100%" stopColor="rgba(0, 217, 255, 0)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 120 Q50 100, 80 90 T150 70 T220 85 T280 50 T350 30 T400 20 V150 H0 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M0 120 Q50 100, 80 90 T150 70 T220 85 T280 50 T350 30 T400 20"
                    fill="none"
                    stroke="#00D9FF"
                    strokeWidth="3"
                  />
                  {/* Trade Entry Point */}
                  <circle cx="280" cy="50" r="8" fill="#00FF88" className="animate-pulse" />
                  <circle cx="280" cy="50" r="12" fill="none" stroke="#00FF88" strokeWidth="2" className="animate-ping" />
                </svg>

                {/* Trade Signal Popup */}
                <div className="absolute top-4 right-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-sm font-semibold">BUY Signal</span>
                  </div>
                </div>
              </div>

              {/* Trade Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-gray-400 text-xs mb-1">Entry</div>
                  <div className="text-white font-semibold">$67,500</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-gray-400 text-xs mb-1">Target</div>
                  <div className="text-emerald-400 font-semibold">$69,200</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-gray-400 text-xs mb-1">Stop Loss</div>
                  <div className="text-red-400 font-semibold">$66,800</div>
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            <div className="absolute -left-8 top-1/4 glass-card p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Trade Closed</div>
                  <div className="text-emerald-400 text-xs">+$1,240 Profit</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 glass-card p-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">New Signal</div>
                  <div className="text-cyan-400 text-xs">ETH/USD - BUY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#how-it-works" className="text-gray-400 hover:text-cyan-400 transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
