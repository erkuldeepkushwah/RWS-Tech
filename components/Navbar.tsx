'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Logo } from '@/components/Logo';
import {
  Menu,
  X,
  User,
  LayoutDashboard,
  BookOpen,
  Receipt,
  LogOut,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const { navigateTo, currentUser, logout } = useApp();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'home' as const, href: '/' },
    { label: 'About', page: 'about' as const, href: '/about' },
    { label: 'Courses', page: 'courses' as const, href: '/courses' },
    { label: 'Contact', page: 'contact' as const, href: '/contact' },
  ];

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            id="nav-logo-btn"
            href="/"
            className="flex items-center text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-600 rounded-lg p-1 -ml-1 transition-opacity hover:opacity-95"
            aria-label="RWS Tech Home"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all relative ${
                    isActive
                      ? 'text-purple-900 bg-purple-100/70 font-bold'
                      : 'text-slate-600 hover:text-purple-700 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA / User Menu */}
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <div className="relative">
                <button
                  id="nav-user-dropdown-btn"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 transition-all text-left"
                >
                  {currentUser.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="w-8 h-8 rounded-full object-cover border border-purple-300"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                      {currentUser.name.charAt(0)}
                    </div>
                  )}
                  <div className="flex flex-col text-left pr-1">
                    <span className="text-xs font-bold text-slate-800 leading-tight max-w-[120px] truncate">
                      {currentUser.name}
                    </span>
                    <span className="text-[10px] text-purple-600 font-medium">Student</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setUserDropdownOpen(false)}
                    />
                    <div
                      id="nav-user-dropdown-panel"
                      className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-2 z-20 animate-in fade-in zoom-in-95 duration-150"
                    >
                      <div className="px-3 py-2 border-b border-slate-100 mb-1">
                        <p className="text-xs text-slate-500 font-medium">Signed in as</p>
                        <p className="text-sm font-bold text-slate-800 truncate">{currentUser.email}</p>
                      </div>

                      <button
                        id="dropdown-dashboard-btn"
                        onClick={() => {
                          setUserDropdownOpen(false);
                          navigateTo('dashboard', undefined, 'overview');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-colors text-left"
                      >
                        <LayoutDashboard className="w-4 h-4 text-purple-600" />
                        Dashboard
                      </button>

                      <button
                        id="dropdown-learning-btn"
                        onClick={() => {
                          setUserDropdownOpen(false);
                          navigateTo('dashboard', undefined, 'my-learning');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-colors text-left"
                      >
                        <BookOpen className="w-4 h-4 text-purple-600" />
                        My Learning ({currentUser.enrolledCourseIds.length})
                      </button>

                      <button
                        id="dropdown-payments-btn"
                        onClick={() => {
                          setUserDropdownOpen(false);
                          navigateTo('dashboard', undefined, 'payment-history');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-colors text-left"
                      >
                        <Receipt className="w-4 h-4 text-purple-600" />
                        Payment History
                      </button>

                      <button
                        id="dropdown-profile-btn"
                        onClick={() => {
                          setUserDropdownOpen(false);
                          navigateTo('dashboard', undefined, 'profile');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-colors text-left"
                      >
                        <User className="w-4 h-4 text-purple-600" />
                        Profile Settings
                      </button>

                      <div className="border-t border-slate-100 mt-1 pt-1">
                        <button
                          id="dropdown-logout-btn"
                          onClick={() => {
                            setUserDropdownOpen(false);
                            logout();
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          Log Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  id="nav-login-btn"
                  href="/login"
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-purple-700 hover:text-purple-900 hover:bg-purple-50 transition-colors"
                >
                  Login
                </Link>
                <Link
                  id="nav-register-btn"
                  href="/register"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 shadow-md shadow-purple-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            {currentUser && (
              <button
                id="mobile-user-quick-btn"
                onClick={() => navigateTo('dashboard')}
                className="w-9 h-9 rounded-full overflow-hidden border border-purple-400"
                aria-label="User Dashboard"
              >
                {currentUser.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                    {currentUser.name.charAt(0)}
                  </div>
                )}
              </button>
            )}

            <button
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-purple-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.page}
                  id={`mobile-nav-link-${link.page}`}
                  href={link.href}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold transition-colors text-left ${
                    isActive
                      ? 'bg-purple-100/70 text-purple-900 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-purple-600" />}
                </Link>
              );
            })}
          </div>

          <div className="border-t border-slate-200/80 pt-4 mt-2">
            {currentUser ? (
              <div className="space-y-1.5">
                <div className="px-4 py-2 bg-purple-50 rounded-xl mb-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                    {currentUser.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{currentUser.name}</p>
                    <p className="text-xs text-purple-700 truncate">{currentUser.email}</p>
                  </div>
                </div>

                <Link
                  id="mobile-drawer-dashboard-btn"
                  href="/dashboard"
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 text-left"
                >
                  <LayoutDashboard className="w-4 h-4 text-purple-600" />
                  Dashboard Overview
                </Link>
                <button
                  id="mobile-drawer-learning-btn"
                  onClick={() => {
                    navigateTo('dashboard', undefined, 'my-learning');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 text-left"
                >
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  My Learning ({currentUser.enrolledCourseIds.length})
                </button>
                <button
                  id="mobile-drawer-payments-btn"
                  onClick={() => {
                    navigateTo('dashboard', undefined, 'payment-history');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 text-left"
                >
                  <Receipt className="w-4 h-4 text-purple-600" />
                  Payment History
                </button>
                <button
                  id="mobile-drawer-profile-btn"
                  onClick={() => {
                    navigateTo('dashboard', undefined, 'profile');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 text-left"
                >
                  <User className="w-4 h-4 text-purple-600" />
                  Profile Settings
                </button>
                <button
                  id="mobile-drawer-logout-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 text-left"
                >
                  <LogOut className="w-4 h-4" />
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-1">
                <Link
                  id="mobile-drawer-login-btn"
                  href="/login"
                  className="w-full py-3 rounded-xl text-sm font-bold text-purple-800 bg-purple-50 hover:bg-purple-100 transition-colors"
                >
                  Login to Account
                </Link>
                <Link
                  id="mobile-drawer-register-btn"
                  href="/register"
                  className="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-700 to-indigo-600 shadow-md shadow-purple-600/20"
                >
                  Register / Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
