import React, { useState } from 'react';
import Header from './trading/Header';
import HeroSection from './trading/HeroSection';
import LiveStats from './trading/LiveStats';
import HowItWorks from './trading/HowItWorks';
import PricingSection, { Plan } from './trading/PricingSection';
import PurchaseModal from './trading/PurchaseModal';
import FeaturesSection from './trading/FeaturesSection';
import TestimonialsSection from './trading/TestimonialsSection';
import FAQSection from './trading/FAQSection';
import CTASection from './trading/CTASection';
import ContactSection from './trading/ContactSection';
import Footer from './trading/Footer';

const AppLayout: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E27]">
      {/* Header */}
      <Header onGetStarted={scrollToPricing} />

      {/* Hero Section */}
      <HeroSection onGetStarted={scrollToPricing} />

      {/* Live Stats */}
      <LiveStats />

      {/* How It Works */}
      <HowItWorks />

      {/* Pricing Section */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection onGetStarted={scrollToPricing} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        plan={selectedPlan}
      />
    </div>
  );
};

export default AppLayout;
