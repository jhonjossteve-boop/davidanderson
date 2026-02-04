import React, { useState, useEffect } from 'react';

const LiveStats: React.FC = () => {
  const [stats, setStats] = useState({
    tradesWon: 4847,
    activeTraders: 5234,
    profitGenerated: 90432547,
    winRate: 98,
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        tradesWon: prev.tradesWon + Math.floor(Math.random() * 2),
        profitGenerated: prev.profitGenerated + Math.floor(Math.random() * 500),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 lg:p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-gray-400">Live Statistics</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                {formatNumber(stats.tradesWon)}
              </div>
              <div className="text-gray-400 text-sm">Winning Trades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">
                {stats.winRate}%
              </div>
              <div className="text-gray-400 text-sm">Win Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-1">
                {formatCurrency(stats.profitGenerated)}
              </div>
              <div className="text-gray-400 text-sm">Total Profits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                {formatNumber(stats.activeTraders)}
              </div>
              <div className="text-gray-400 text-sm">Active Traders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
