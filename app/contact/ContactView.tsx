'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export function ContactView() {
  const { addToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does payment verification work at RWS Tech?',
      a: 'After you complete the UPI payment and enter your 12-digit UTR/transaction reference, our gateway verifies it with banking partners. Your payment status shows as Pending until confirmed, after which your course access is automatically unlocked in your Student Dashboard.',
    },
    {
      q: 'Are the certificates accredited for industry job applications?',
      a: 'Yes! RWS Tech certificates include verifiable credential IDs and QR codes that substantiate your completed modules, capstone projects, and programming proficiencies on LinkedIn and resumes.',
    },
    {
      q: 'Do I get lifetime access to the courses and future updates?',
      a: 'Yes. Once enrolled, you receive lifetime access to all lecture videos, coding sandboxes, starter files, and future curriculum updates without any recurring subscriptions.',
    },
    {
      q: 'Can beginners with zero coding experience enroll?',
      a: 'Absolutely. We offer dedicated beginner tracks in Python, C Programming, HTML/CSS, and JavaScript with step-by-step mentor guidance designed specifically for first-time learners.',
    },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!subject.trim()) errs.subject = 'Please specify a subject.';
    if (!message.trim() || message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters in your message.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
      addToast(
        'Message Dispatched',
        'Thank you for reaching out! An RWS Tech academic advisor will respond within 2-4 business hours.',
        'success'
      );
    }, 600);
  };

  return (
    <div id="contact-view" className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-purple-50 via-white to-slate-50 border-b border-purple-100/80 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With RWS Tech
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            We’re Here to Support Your Tech Career
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Have questions about course syllabi, fees, enterprise cohorts, or mentor guidance?
            Our admissions and technical support team is at your service.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Contact Information</h2>

              <div className="space-y-4 text-xs">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Email Admissions</span>
                    <p className="font-bold text-slate-900 text-sm mt-0.5">admissions@rwstech.com</p>
                    <p className="text-slate-500 mt-0.5">support@rwstech.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Student Helpline</span>
                    <p className="font-bold text-slate-900 text-sm mt-0.5">+91 98765 43210</p>
                    <p className="text-slate-500 mt-0.5">Toll Free: 1800-RWS-TECH</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Technology Campus</span>
                    <p className="font-bold text-slate-900 text-sm mt-0.5">RWS Tech Academic Park</p>
                    <p className="text-slate-500 mt-0.5">Cyber City, Sector 29, Gurugram, India</p>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Support Hours</span>
                    <p className="font-bold text-slate-900 text-sm mt-0.5">Mon – Sat: 9:00 AM – 8:00 PM IST</p>
                    <p className="text-slate-500 mt-0.5">Doubt Desk & Labs: 24/7 Online</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ summary */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-950 text-white rounded-3xl p-6 space-y-3 shadow-lg">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200">
                Direct WhatsApp Channel
              </span>
              <h3 className="text-base font-bold">Fast-Track Enrollment Support</h3>
              <p className="text-xs text-purple-100 leading-relaxed">
                Need immediate course syllabus consultation or fee invoice assistance? Ping our admissions counselors directly.
              </p>
              <button
                onClick={() => addToast('WhatsApp Connected', 'Opening WhatsApp academic counselor chat...', 'info')}
                className="w-full py-2.5 rounded-xl bg-white text-purple-950 text-xs font-bold hover:bg-purple-50 transition-colors shadow-sm"
              >
                Chat on WhatsApp (+91 98765 43210)
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500">
                  Fill out the form below and an academic counselor will get in touch shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Your Full Name</label>
                    <input
                      id="contact-name-input"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Aditi Roy"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border focus:bg-white focus:outline-hidden transition-all text-slate-800 ${
                        errors.name ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200 focus:border-purple-600'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-rose-600">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Email Address</label>
                    <input
                      id="contact-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="aditi@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border focus:bg-white focus:outline-hidden transition-all text-slate-800 ${
                        errors.email ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200 focus:border-purple-600'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-rose-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Subject</label>
                  <input
                    id="contact-subject-input"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Question regarding MERN Stack curriculum & certificate"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border focus:bg-white focus:outline-hidden transition-all text-slate-800 ${
                      errors.subject ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200 focus:border-purple-600'
                    }`}
                  />
                  {errors.subject && <p className="text-[10px] text-rose-600">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Your Message</label>
                  <textarea
                    id="contact-message-input"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your background, career goal, or inquiry..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border focus:bg-white focus:outline-hidden transition-all text-slate-800 ${
                      errors.message ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200 focus:border-purple-600'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-rose-600">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending your inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">Frequently Asked Questions</h3>

              <div className="space-y-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
