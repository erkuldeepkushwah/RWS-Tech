'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';

export function Footer() {
  return (
    <footer id="main-footer" className="bg-[#0B192C] text-slate-300 relative overflow-hidden border-t border-[#081021]">
      {/* Decorative subtle purple ambient glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              RWS Tech is a premier technology and software education institute. We empower aspiring engineers,
              developers, and designers through practical, project-based curriculums, 1-on-1 industry mentorship,
              and job-oriented skills tailored for global tech standards.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-600/50 text-[11px] font-semibold text-blue-200">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                ISO 9001:2026 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-600/50 text-[11px] font-semibold text-blue-200">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                Industry Accredited
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="pt-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">Follow Our Community</p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RWS Tech on Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RWS Tech on YouTube"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-red-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                   target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RWS Tech on LinkedIn"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                   rel="noopener noreferrer"
                   aria-label="RWS Tech on Facebook"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-700 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-slate-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
                >
                  All Courses (24)
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
                >
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-slate-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
                >
                  Student Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Top Courses
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/courses/full-stack-web-development"
                  className="text-slate-400 hover:text-blue-300 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Web Development</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/react-js"
                  className="text-slate-400 hover:text-blue-300 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>React.js Masterclass</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/mern-stack-development"
                  className="text-slate-400 hover:text-blue-300 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>MERN Stack</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/full-stack-web-development"
                  className="text-slate-400 hover:text-blue-300 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Full Stack Development</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/python"
                  className="text-slate-400 hover:text-blue-300 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Python & Automation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/ui-ux-design"
                  className="text-slate-400 hover:text-blue-300 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>UI/UX Design Systems</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-semibold">Email Us</span>
                  <a href="mailto:support@rwstech.com" className="hover:text-blue-300 transition-colors">
                    support@rwstech.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-semibold">Call Support</span>
                  <a href="tel:+918004567890" className="hover:text-blue-300 transition-colors">
                    +91 (800) 456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-semibold">RWS Technology Campus</span>
                  <span>Cyber Valley, Sector 62, Electronic City, Bengaluru 560100, India</span>
                </div>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-800 space-y-1.5 text-xs">
              <div className="flex items-center gap-3 text-slate-500">
                <Link href="/contact" className="hover:text-slate-300 transition-colors">
                  Help Center
                </Link>
                <span>•</span>
                <Link href="/contact" className="hover:text-slate-300 transition-colors">
                  FAQ
                </Link>
                <span>•</span>
                <Link href="/contact" className="hover:text-slate-300 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p id="footer-copyright">
            © 2026 RWS Tech. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-blue-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Empowering 1000+ Modern Technologists
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Terms & Conditions Apply</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
