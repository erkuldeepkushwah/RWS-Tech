'use client';

import React, { useState, useEffect } from 'react';
import { useApp, PaymentMethod, PaymentRecord } from '@/context/AppContext';
import { COURSES_DATA } from '@/data/courses';
import { Logo } from '@/components/Logo';
import {
  Clock,
  QrCode,
  Copy,
  Check,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Receipt,
  FileText
} from 'lucide-react';

export function PurchaseView() {
  const {
    selectedCourseId,
    currentUser,
    navigateTo,
    submitPaymentVerification,
    addToast
  } = useApp();

  const course =
    COURSES_DATA.find((c) => c.id === selectedCourseId) || COURSES_DATA[0];

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('UPI');
  const [userEmail, setUserEmail] = useState<string>(currentUser?.email || 'student@rwstech.com');
  const [utrNumber, setUtrNumber] = useState<string>('');
  const [copiedUpi, setCopiedUpi] = useState(false);

  // 5-minute countdown timer: 300 seconds
  const [timeLeft, setTimeLeft] = useState<number>(300);
  const timerExpired = timeLeft <= 0;

  // Verification state: 'idle' | 'submitted_pending'
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitted_pending'>('idle');
  const [pendingRecord, setPendingRecord] = useState<PaymentRecord | null>(null);

  // Timer countdown hook
  useEffect(() => {
    if (submissionState === 'submitted_pending' || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submissionState]);

  // Format MM:SS
  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const upiId =
    selectedMethod === 'UPI'
      ? 'rwstech.pay@okhdfcbank'
      : selectedMethod === 'PhonePe'
      ? 'rwstech@ybl'
      : 'rwstech@paytm';

  const handleCopyUpi = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(upiId);
      setCopiedUpi(true);
      addToast('UPI ID Copied', `${upiId} copied to clipboard.`, 'info');
      setTimeout(() => setCopiedUpi(false), 2500);
    }
  };

  const handleResetSession = () => {
    setTimeLeft(300);
    setSubmissionState('idle');
    setUtrNumber('');
    addToast('Session Refreshed', 'A fresh 5-minute payment session has been started.', 'info');
  };

  const handleCompletedPayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (timerExpired) {
      addToast('Session Expired', 'Please restart your payment session.', 'error');
      return;
    }

    // Submit transaction in strictly PENDING state per instructions:
    // "Important: Do not fake or claim that a payment was actually completed. The UI should show a payment-pending state until a real payment gateway/backend verifies the transaction."
    const record = submitPaymentVerification(
      course.id,
      selectedMethod,
      userEmail,
      utrNumber || `UTR-${Math.floor(100000000000 + Math.random() * 900000000000)}`
    );

    setPendingRecord(record);
    setSubmissionState('submitted_pending');
  };

  // Pricing breakdown math
  const baseFee = course.fee;
  const platformFee = 0; // Free for students
  const gstInclusive = Math.round(baseFee * 0.18);
  const totalPayable = baseFee;

  return (
    <div id="purchase-view" className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      {/* Top Breadcrumb & Status */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('course-details', course.id)}
          className="text-xs font-semibold text-purple-700 hover:underline flex items-center gap-1"
        >
          ← Return to Course Details
        </button>
        <span className="text-xs text-slate-500 font-mono">
          Security: 256-Bit Encrypted Checkout
        </span>
      </div>

      {submissionState === 'submitted_pending' && pendingRecord ? (
        /* PENDING VERIFICATION STATE (Stops payment fake completion, shows real pending state per instructions) */
        <div
          id="payment-pending-state"
          className="bg-white rounded-3xl border-2 border-amber-300 shadow-2xl p-6 sm:p-10 space-y-6 animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto ring-8 ring-amber-50">
              <RefreshCw className="w-8 h-8 animate-spin" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Status: Payment Pending Verification
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Transaction Awaiting Gateway Reconciliation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              We have received your payment submission for{' '}
              <strong className="text-slate-900">{course.title}</strong>. Your transaction has been placed
              into a <strong className="text-amber-800 font-bold">Pending</strong> verification state until our
              banking gateway reconciles the UTR transaction reference with the banking network.
            </p>
          </div>

          {/* Pending Details Card */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs space-y-2.5 max-w-lg mx-auto">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Order Reference:</span>
              <span className="font-mono font-bold text-slate-900">{pendingRecord.id}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Course:</span>
              <span className="font-bold text-slate-900">{pendingRecord.courseName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Amount Paid:</span>
              <span className="font-bold text-purple-700">₹{pendingRecord.amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Payment Channel:</span>
              <span className="font-bold text-slate-900">{pendingRecord.paymentMethod}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Submitted UTR Reference:</span>
              <span className="font-mono font-bold text-slate-900">{pendingRecord.utrNumber}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Notification Sent To:</span>
              <span className="font-medium text-slate-900">{pendingRecord.userEmail}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3 max-w-lg mx-auto">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block">Please Do Not Re-pay</span>
              <p className="text-[11px] leading-relaxed text-amber-800">
                Banking reconciliations typically reflect within 5-15 minutes. Once validated by the payment
                system, your course access will automatically unlock in your student dashboard.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              id="view-payment-history-btn"
              onClick={() => navigateTo('dashboard', undefined, 'payment-history')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold shadow-md shadow-purple-600/20 flex items-center justify-center gap-2"
            >
              <Receipt className="w-4 h-4" />
              View in Payment History
            </button>
            <button
              id="goto-dashboard-btn"
              onClick={() => navigateTo('dashboard', undefined, 'overview')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold flex items-center justify-center gap-2"
            >
              Go to Student Dashboard
            </button>
          </div>
        </div>
      ) : (
        /* NORMAL CHECKOUT SCREEN */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Order Summary & Selected Course Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-6">
              <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>

              {/* Selected Course Card */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-16 h-16 rounded-xl object-cover border border-purple-200 shrink-0"
                />
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">
                    {course.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 truncate">{course.title}</h3>
                  <p className="text-xs text-slate-500">{course.duration} • Lifetime Access</p>
                </div>
              </div>

              {/* User Email Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Course Recipient Email</label>
                <input
                  id="checkout-user-email"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden focus:border-purple-600 text-slate-800"
                />
                <p className="text-[10px] text-slate-400">
                  Course enrollment credentials and invoice will be registered to this account.
                </p>
              </div>

              {/* Price Calculation Table */}
              <div className="border-t border-slate-100 pt-4 space-y-2.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Course Tuition</span>
                  <span className="font-semibold text-slate-900">₹{baseFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18% Inclusive)</span>
                  <span className="text-emerald-700 font-semibold">Included (₹{gstInclusive})</span>
                </div>
                <div className="flex justify-between">
                  <span>Student Discount Applied</span>
                  <span className="text-emerald-700 font-bold">
                    -₹{(course.originalFee - course.fee).toLocaleString()}
                  </span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-900">Total Payable</span>
                  <span className="text-2xl font-black text-purple-700">
                    ₹{totalPayable.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Trust badges */}
              <div className="pt-2 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified RWS Tech Academic License</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real Project Files & Instructor Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Payment Method Selection & QR Screen (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
              {/* Payment Methods Selection Cards */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Select Payment Method
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {/* UPI Card */}
                  <button
                    type="button"
                    id="select-method-upi"
                    onClick={() => setSelectedMethod('UPI')}
                    className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                      selectedMethod === 'UPI'
                        ? 'border-purple-600 bg-purple-50/80 ring-2 ring-purple-600/30 font-bold text-purple-900 shadow-xs'
                        : 'border-slate-200 hover:border-purple-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">
                      UPI
                    </div>
                    <span className="text-xs">UPI / GPay</span>
                  </button>

                  {/* PhonePe Card */}
                  <button
                    type="button"
                    id="select-method-phonepe"
                    onClick={() => setSelectedMethod('PhonePe')}
                    className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                      selectedMethod === 'PhonePe'
                        ? 'border-purple-600 bg-purple-50/80 ring-2 ring-purple-600/30 font-bold text-purple-900 shadow-xs'
                        : 'border-slate-200 hover:border-purple-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                      Pe
                    </div>
                    <span className="text-xs">PhonePe</span>
                  </button>

                  {/* Paytm Card */}
                  <button
                    type="button"
                    id="select-method-paytm"
                    onClick={() => setSelectedMethod('Paytm')}
                    className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                      selectedMethod === 'Paytm'
                        ? 'border-purple-600 bg-purple-50/80 ring-2 ring-purple-600/30 font-bold text-purple-900 shadow-xs'
                        : 'border-slate-200 hover:border-purple-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                      Pay
                    </div>
                    <span className="text-xs">Paytm</span>
                  </button>
                </div>
              </div>

              {/* Countdown Timer Block */}
              <div
                className={`p-4 rounded-2xl border flex items-center justify-between transition-colors ${
                  timerExpired
                    ? 'bg-rose-50 border-rose-200 text-rose-900'
                    : timeLeft <= 60
                    ? 'bg-amber-50 border-amber-200 text-amber-900'
                    : 'bg-purple-50/70 border-purple-200 text-purple-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 ${timerExpired ? 'text-rose-600 animate-bounce' : 'text-purple-700'}`} />
                  <div>
                    <p className="text-xs font-bold">
                      {timerExpired ? 'Payment Session Expired' : 'Complete Payment Within'}
                    </p>
                    <p className="text-[10px] text-slate-500">Session auto-resets for banking security</p>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    id="payment-countdown-timer"
                    className={`text-xl font-mono font-black ${
                      timerExpired ? 'text-rose-600' : 'text-purple-800'
                    }`}
                  >
                    {timerExpired ? '00:00' : formatTimer(timeLeft)}
                  </span>
                </div>
              </div>

              {/* Expired State Warning */}
              {timerExpired ? (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
                  <AlertTriangle className="w-10 h-10 text-rose-500 mx-auto" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Payment Session Expired</h3>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                      The 5-minute security window has elapsed. Please restart your session to generate a refreshed QR code.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetSession}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 shadow-md transition-all flex items-center justify-center gap-2 mx-auto"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Restart 5-Minute Session
                  </button>
                </div>
              ) : (
                /* QR CODE & UPI DETAILS */
                <div className="space-y-6">
                  {/* Dynamic QR Box */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    {/* Render Clean Vector SVG QR Code with UPI Branding */}
                    <div className="w-44 h-44 rounded-2xl bg-white p-3 border-2 border-purple-200 shadow-md flex flex-col items-center justify-center relative shrink-0">
                      <svg
                        className="w-full h-full text-slate-900"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                      >
                        {/* QR Corner Markers */}
                        <rect x="5" y="5" width="26" height="26" rx="4" fill="none" stroke="#6d28d9" strokeWidth="4" />
                        <rect x="11" y="11" width="14" height="14" fill="#6d28d9" />
                        
                        <rect x="69" y="5" width="26" height="26" rx="4" fill="none" stroke="#6d28d9" strokeWidth="4" />
                        <rect x="75" y="11" width="14" height="14" fill="#6d28d9" />

                        <rect x="5" y="69" width="26" height="26" rx="4" fill="none" stroke="#6d28d9" strokeWidth="4" />
                        <rect x="11" y="75" width="14" height="14" fill="#6d28d9" />

                        {/* Geometric QR Data Points */}
                        <rect x="36" y="8" width="6" height="6" fill="#1e1b4b" />
                        <rect x="46" y="8" width="6" height="6" fill="#6d28d9" />
                        <rect x="56" y="8" width="6" height="6" fill="#1e1b4b" />

                        <rect x="36" y="20" width="6" height="6" fill="#6d28d9" />
                        <rect x="56" y="20" width="6" height="6" fill="#1e1b4b" />

                        <rect x="10" y="40" width="6" height="6" fill="#1e1b4b" />
                        <rect x="22" y="40" width="6" height="6" fill="#6d28d9" />
                        <rect x="34" y="40" width="6" height="6" fill="#1e1b4b" />
                        <rect x="60" y="40" width="6" height="6" fill="#6d28d9" />
                        <rect x="72" y="40" width="6" height="6" fill="#1e1b4b" />
                        <rect x="84" y="40" width="6" height="6" fill="#6d28d9" />

                        <rect x="10" y="52" width="6" height="6" fill="#6d28d9" />
                        <rect x="22" y="52" width="6" height="6" fill="#1e1b4b" />
                        <rect x="40" y="52" width="6" height="6" fill="#6d28d9" />
                        <rect x="52" y="52" width="6" height="6" fill="#1e1b4b" />
                        <rect x="70" y="52" width="6" height="6" fill="#6d28d9" />
                        <rect x="82" y="52" width="6" height="6" fill="#1e1b4b" />

                        <rect x="36" y="68" width="6" height="6" fill="#1e1b4b" />
                        <rect x="48" y="68" width="6" height="6" fill="#6d28d9" />
                        <rect x="60" y="68" width="6" height="6" fill="#1e1b4b" />
                        <rect x="72" y="68" width="6" height="6" fill="#6d28d9" />
                        <rect x="84" y="68" width="6" height="6" fill="#1e1b4b" />

                        <rect x="36" y="80" width="6" height="6" fill="#6d28d9" />
                        <rect x="52" y="80" width="6" height="6" fill="#1e1b4b" />
                        <rect x="68" y="80" width="6" height="6" fill="#6d28d9" />
                        <rect x="80" y="80" width="6" height="6" fill="#1e1b4b" />

                        {/* Center Emblem */}
                        <circle cx="50" cy="50" r="10" fill="#ffffff" stroke="#6d28d9" strokeWidth="2" />
                        <text x="50" y="54" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#6d28d9">
                          RWS
                        </text>
                      </svg>
                      <span className="text-[9px] font-bold text-slate-500 mt-1 uppercase">Scan to Pay</span>
                    </div>

                    {/* QR Details */}
                    <div className="space-y-2.5 text-xs text-slate-700 flex-1">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700">
                          Scan & Pay via {selectedMethod}
                        </span>
                        <p className="text-xl font-black text-slate-900">
                          ₹{totalPayable.toLocaleString()}
                        </p>
                      </div>

                      {/* Copyable UPI ID */}
                      <div className="space-y-1">
                        <span className="text-[11px] text-slate-500">Official Merchant VPA / UPI ID:</span>
                        <div className="flex items-center gap-2">
                          <code className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-purple-900 font-mono text-xs font-bold select-all truncate">
                            {upiId}
                          </code>
                          <button
                            type="button"
                            onClick={handleCopyUpi}
                            className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-purple-50 text-purple-700 transition-colors"
                            aria-label="Copy UPI ID"
                          >
                            {copiedUpi ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-500">
                        Scan from Google Pay, PhonePe, Paytm, BHIM, or any UPI app.
                      </p>
                    </div>
                  </div>

                  {/* Transaction Submission Form */}
                  <form onSubmit={handleCompletedPayment} className="space-y-4 pt-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-700">
                          UPI UTR / Reference ID (12 Digits)
                        </label>
                        <span className="text-[10px] text-purple-700 font-medium">Found in your bank SMS / UPI app</span>
                      </div>
                      <input
                        id="payment-utr-input"
                        type="text"
                        value={utrNumber}
                        onChange={(e) => setUtrNumber(e.target.value.replace(/[^0-9A-Za-z]/g, ''))}
                        placeholder="e.g. 606219483720"
                        maxLength={16}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden focus:border-purple-600 font-mono text-slate-800"
                      />
                    </div>

                    {/* Completion Button */}
                    <button
                      id="completed-payment-btn"
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 shadow-lg shadow-purple-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      I&apos;ve Completed Payment
                    </button>

                    <p className="text-[11px] text-center text-slate-500">
                      Note: Your payment status will be marked as <strong>Pending</strong> until real transaction confirmation.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
