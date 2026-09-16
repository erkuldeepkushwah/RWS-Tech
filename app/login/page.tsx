'use client';

import React, { useState } from 'react';
import { useApp, PageView } from '@/context/AppContext';
import { Logo } from '@/components/Logo';
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Sparkles,
  Eye,
  EyeOff,
  CheckCircle2,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface AuthViewProps {
  initialMode?: 'login' | 'register';
}

export default function LoginPage({ initialMode = 'login' }: AuthViewProps) {
  const { login, register, loginAsDemoUser, navigateTo, addToast } = useApp();
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (mode === 'register') {
      if (!fullName.trim()) {
        errs.fullName = 'Full name is required.';
      } else if (fullName.trim().length < 3) {
        errs.fullName = 'Full name must be at least 3 characters.';
      }
    }

    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }

    if (mode === 'register') {
      if (!confirmPassword) {
        errs.confirmPassword = 'Confirm your password.';
      } else if (confirmPassword !== password) {
        errs.confirmPassword = 'Passwords do not match.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (mode === 'login') {
        const success = login(email, password);
        if (success) {
          // Redirect to dashboard handled in context
        }
      } else {
        const success = register(fullName, email, password);
        if (success) {
          // Redirect to dashboard handled in context
        }
      }
    }, 400);
  };

  return (
    <div id="auth-view" className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full space-y-6">
        {/* Top Branding Card */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <button onClick={() => navigateTo('home')}>
              <Logo size="lg" />
            </button>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {mode === 'login' ? 'Welcome Back to RWS Tech' : 'Create Your Student Account'}
          </h2>
          <p className="text-xs text-slate-500">
            {mode === 'login'
              ? 'Access your enrolled courses, learning tracking, and certificates.'
              : 'Join 1000+ modern technology learners and begin your journey.'}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
          {/* Toggle Switch */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl text-xs font-bold">
            <button
              id="switch-to-login-tab"
              type="button"
              onClick={() => {
                setMode('login');
                setErrors({});
              }}
              className={`py-2 rounded-xl transition-all ${
                mode === 'login'
                  ? 'bg-white text-purple-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              id="switch-to-register-tab"
              type="button"
              onClick={() => {
                setMode('register');
                setErrors({});
              }}
              className={`py-2 rounded-xl transition-all ${
                mode === 'register'
                  ? 'bg-white text-purple-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name for Registration */}
            {mode === 'register' && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="register-fullname-input"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Aryan Verma"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 border focus:bg-white focus:outline-hidden transition-all text-slate-800 ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200 focus:border-purple-600'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName}
                  </p>
                )}
              </div>
            )}

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="auth-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 border focus:bg-white focus:outline-hidden transition-all text-slate-800 ${
                    errors.email ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200 focus:border-purple-600'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="auth-password-input"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-10 py-2.5 rounded-xl text-xs bg-slate-50 border focus:bg-white focus:outline-hidden transition-all text-slate-800 ${
                    errors.password ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200 focus:border-purple-600'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3 h-3" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password for Registration */}
            {mode === 'register' && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Confirm Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="register-confirm-password-input"
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 border focus:bg-white focus:outline-hidden transition-all text-slate-800 ${
                      errors.confirmPassword
                        ? 'border-rose-400 bg-rose-50/40'
                        : 'border-slate-200 focus:border-purple-600'
                    }`}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3 h-3" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              id={mode === 'login' ? 'auth-login-submit-btn' : 'auth-register-submit-btn'}
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <span>Processing...</span>
              ) : mode === 'login' ? (
                <>
                  <span>Login to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Create Account & Register</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Switch Mode Links */}
          <div className="text-center pt-2 border-t border-slate-100">
            {mode === 'login' ? (
              <p className="text-xs text-slate-600">
                Don&#39;t have an account?{' '}
                <button
                  onClick={() => {
                    setMode('register');
                    setErrors({});
                  }}
                  className="font-bold text-purple-700 hover:underline"
                >
                  Register
                </button>
              </p>
            ) : (
              <p className="text-xs text-slate-600">
                Already registered?{' '}
                <button
                  onClick={() => {
                    setMode('login');
                    setErrors({});
                  }}
                  className="font-bold text-purple-700 hover:underline"
                >
                  Login
                </button>
              </p>
            )}
          </div>

          {/* Quick Demo Login Option */}
          <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200 text-center space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-purple-900">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              Quick Demo Access
            </div>
            <p className="text-[11px] text-purple-700">
              One-click sign in as active student Aryan Verma with preloaded enrolled courses.
            </p>
            <button
              id="demo-login-quick-btn"
              type="button"
              onClick={loginAsDemoUser}
              className="w-full py-2 px-3 rounded-xl bg-white hover:bg-purple-100/60 border border-purple-300 text-purple-900 text-xs font-bold transition-colors shadow-2xs"
            >
              Sign In as Demo Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
