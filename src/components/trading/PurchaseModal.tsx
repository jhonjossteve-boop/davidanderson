import React, { useState } from 'react';
import { Plan } from './PricingSection';
import { addSubscriber, checkEmailExists } from '@/lib/supabase';

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
  const [subscriptionDetails, setSubscriptionDetails] = useState<{
    startDate: string;
    endDate: string;
  } | null>(null);

  if (!isOpen || !plan) return null;

  const handleValidateCode = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (purchaseCode.trim().toUpperCase() === plan.code) {
      setIsValidated(true);
    } else {
      setError('Invalid purchase code. Please contact your signal account manager.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Check if email already exists
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        setError('This email is already registered. Please use a different email or contact support.');
        setIsSubmitting(false);
        return;
      }

      // Add subscriber to database
      const { data, error: dbError } = await addSubscriber({
        email: email.toLowerCase(),
        plan_type: plan.id,
        plan_name: plan.name,
        plan_price: plan.price,
        plan_duration_months: plan.durationMonths,
        purchase_code: purchaseCode.toUpperCase(),
        status: 'active',
      });

      if (dbError) {
        console.error('Database error:', dbError);
        setError('An error occurred while processing your registration. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Calculate dates for display
      const startDate = new Date();
      const endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + plan.durationMonths);

      setSubscriptionDetails({
        startDate: startDate.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        endDate: endDate.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setPurchaseCode('');
    setEmail('');
    setError('');
    setIsValidated(false);
    setIsSuccess(false);
    setSubscriptionDetails(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className={`relative w-full max-w-md glass-card overflow-hidden ${shake ? 'animate-shake' : ''}`}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Welcome to David Anderson Trade!</h3>
            <p className="text-gray-400 mb-6">
              Your {plan.name} subscription is now active. You'll start receiving daily trade signals at{' '}
              <span className="text-cyan-400">{email}</span>
            </p>
            <div className="glass-card p-4 mb-6 text-left">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Plan:</span>
                <span className="text-white font-semibold">{plan.name}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white font-semibold">{plan.duration}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-400">Amount:</span>
                <span className="text-white font-semibold">${plan.price}</span>
              </div>
              {subscriptionDetails && (
                <>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-400">Start Date:</span>
                    <span className="text-white font-semibold">{subscriptionDetails.startDate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-400">End Date:</span>
                    <span className="text-white font-semibold">{subscriptionDetails.endDate}</span>
                  </div>
                </>
              )}
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-400">Status:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-xs mb-4">
              A confirmation email has been sent to your inbox. Please check your spam folder if you don't see it.
            </p>
            <button
              onClick={handleClose}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              Start Trading
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">${plan.price} - {plan.duration}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {!isValidated ? (
                // Step 1: Purchase Code Validation
                <form onSubmit={handleValidateCode}>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Enter Your Purchase Code
                  </h4>
                  <p className="text-gray-400 text-sm mb-6">
                    Please enter your purchase code to confirm your subscription.
                  </p>

                  <div className="mb-4">
                    <input
                      type="text"
                      value={purchaseCode}
                      onChange={(e) => {
                        setPurchaseCode(e.target.value.toUpperCase());
                        setError('');
                      }}
                      placeholder="Enter purchase code"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all uppercase tracking-wider font-mono"
                    />
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {error}
                      </p>
                    </div>
                  )}

                  <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                    <p className="text-amber-300 text-sm">
                      <span className="font-semibold">Don't have a purchase code?</span>
                      <br />
                      Please message your signal account manager to receive one. Register with your email address to receive daily trade notifications.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-[1.02]"
                  >
                    Validate Code
                  </button>
                </form>
              ) : (
                // Step 2: Email Registration
                <form onSubmit={handleSubmitEmail}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-emerald-400 font-semibold">Code Validated Successfully!</span>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-4">
                    Complete Your Registration
                  </h4>
                  <p className="text-gray-400 text-sm mb-6">
                    Enter your email address to receive daily trade alerts and notifications.
                  </p>

                  <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="mb-6 p-4 bg-white/5 rounded-lg">
                    <h5 className="text-white font-semibold mb-2">What you'll receive:</h5>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        1-2 daily trade signals
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        1-hour advance notifications
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Entry, exit & stop-loss levels
                      </li>
                    </ul>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-400 hover:to-cyan-400 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Complete Registration'
                    )}
                  </button>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PurchaseModal;
