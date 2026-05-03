import React, { useState } from 'react';
import { Plan } from './PricingSection';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, plan }) => {
  const [purchaseCode, setPurchaseCode] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  if (!isOpen || !plan) return null;

  // ✅ PLAN CODE MAP (STRICT VALIDATION)
  const PLAN_CODES: Record<string, string> = {
    basic: '09TTUYH',
    standard: '90HHUKO',
    premium: 'R6HUIPO',
  };

  const handleValidateCode = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const enteredCode = purchaseCode.trim().toUpperCase();
    const correctCode = PLAN_CODES[plan.id];

    // ❌ Wrong code
    if (enteredCode !== correctCode) {
      setError('Invalid purchase code. Please contact your signal account manager.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    // ✅ Correct code
    setIsValidated(true);
  };

  // ✅ FORM SUBMIT (FORMSPREE)
  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/yourID', { // 🔁 REPLACE THIS
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          plan: plan?.name,
          purchase_code: purchaseCode,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setError('Failed to submit. Try again.');
      }
    } catch (err) {
      setError('Something went wrong.');
    }

    setIsSubmitting(false);
  };

  const handleClose = () => {
    setPurchaseCode('');
    setEmail('');
    setError('');
    setIsValidated(false);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className={`relative w-full max-w-md glass-card overflow-hidden ${shake ? 'animate-shake' : ''}`}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
        >
          ✕
        </button>

        {isSuccess ? (
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Welcome to David Anderson Trade!
            </h3>
            <p className="text-gray-400 mb-6">
              Your {plan.name} subscription is now active.
            </p>
            <button
              onClick={handleClose}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl"
            >
              Start Trading
            </button>
          </div>
        ) : (
          <div className="p-6">
            {!isValidated ? (
              <form onSubmit={handleValidateCode}>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Enter Your Purchase Code
                </h4>

                <div className="mb-4">
                  <input
                    type="text"
                    value={purchaseCode}
                    onChange={(e) => {
                      setPurchaseCode(e.target.value.toUpperCase());
                      setError('');
                    }}
                    placeholder="Enter purchase code"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white"
                  />
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl"
                >
                  Validate Code
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmitEmail}>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Complete Your Registration
                </h4>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white mb-4"
                />

                {error && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl"
                >
                  {isSubmitting ? 'Processing...' : 'Complete Registration'}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseModal;
