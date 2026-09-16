'use client';

import React, { useState } from 'react';
import { useApp, DashboardTab, PaymentStatus, PaymentRecord } from '@/context/AppContext';
import { COURSES_DATA, Course } from '@/data/courses';
import { Logo } from '@/components/Logo';
import { LearningModal } from '@/components/LearningModal';
import {
  LayoutDashboard,
  BookOpen,
  ShoppingBag,
  Receipt,
  User,
  LogOut,
  PlayCircle,
  Award,
  Clock,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Search,
  RefreshCw,
  Edit2,
  Save,
  Check,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function DashboardPage() {
  const {
    currentUser,
    logout,
    selectedDashboardTab,
    setSelectedDashboardTab,
    navigateTo,
    payments,
    updatePaymentStatus,
    userProgress,
    initiatePurchase,
    updateProfile,
    addToast
  } = useApp();

  const [activeCourseForLearning, setActiveCourseForLearning] = useState<Course | null>(null);

  // Profile Edit State
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileName, setProfileName] = useState(currentUser?.name || '');
  const [profilePhone, setProfilePhone] = useState(currentUser?.phone || '');
  const [profileBio, setProfileBio] = useState(currentUser?.bio || '');

  // Payment Filter
  const [paymentFilter, setPaymentFilter] = useState<'all' | PaymentStatus>('all');

  // If not logged in, prompt sign in
  if (!currentUser) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center max-w-md space-y-4 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
            <User className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Student Portal Sign In Required</h2>
          <p className="text-xs text-slate-500">
            Please login or register an account to view your enrolled courses, learning progress, and payments.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => navigateTo('login')}
              className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
            >
              Sign In
            </button>
            <button
              onClick={() => navigateTo('register')}
              className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Filtered payments
  const filteredPayments = payments.filter((p) => {
    if (paymentFilter === 'all') return true;
    return p.status === paymentFilter;
  });

  // Purchased / Enrolled Courses
  const enrolledCourses = COURSES_DATA.filter((c) =>
    currentUser.enrolledCourseIds.includes(c.id)
  );

  // Available (Not yet purchased) Courses
  const availableCourses = COURSES_DATA.filter(
    (c) => !currentUser.enrolledCourseIds.includes(c.id)
  );

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: profileName.trim() || currentUser.name,
      phone: profilePhone.trim() || currentUser.phone,
      bio: profileBio.trim() || currentUser.bio,
    });
    setIsEditingProfile(false);
  };

  const navTabs: { id: DashboardTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'overview', label: 'Dashboard Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    {
      id: 'my-learning',
      label: 'My Learning',
      icon: <BookOpen className="w-4 h-4" />,
      badge: enrolledCourses.length,
    },
    {
      id: 'available',
      label: 'Available Courses',
      icon: <ShoppingBag className="w-4 h-4" />,
      badge: availableCourses.length,
    },
    {
      id: 'payment-history',
      label: 'Payment History',
      icon: <Receipt className="w-4 h-4" />,
      badge: payments.filter((p) => p.status === 'Pending').length || undefined,
    },
    { id: 'profile', label: 'Profile Settings', icon: <User className="w-4 h-4" /> },
  ];

  return (
    <div id="dashboard-view" className="min-h-screen bg-slate-50/70 pb-20">
      {/* Learning Modal if Active */}
      {activeCourseForLearning && (
        <LearningModal
          course={activeCourseForLearning}
          onClose={() => setActiveCourseForLearning(null)}
        />
      )}

      {/* Dashboard Top Header Bar with Corner RWS Tech Logo */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Corner Logo */}
            <Logo size="sm" />
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-xs font-bold text-slate-700 hidden sm:inline">Student Dashboard</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              {currentUser.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full object-cover border border-blue-300"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  {currentUser.name.charAt(0)}
                </div>
              )}
              <div className="hidden sm:block text-left leading-tight">
                <span className="text-xs font-bold text-slate-900 block">{currentUser.name}</span>
                <span className="text-[10px] text-blue-600 font-medium">{currentUser.email}</span>
              </div>
            </div>

            <button
              id="dashboard-logout-btn"
              onClick={logout}
              className="p-2 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1.5 text-xs font-bold"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar Navigation (3 cols) */}
          <aside className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 p-4 shadow-sm space-y-2 sticky top-36">
            <div className="px-3 py-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Navigation
              </span>
            </div>

            {navTabs.map((tab) => {
              const isSelected = selectedDashboardTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setSelectedDashboardTab(tab.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                    isSelected
                      ? 'bg-blue-100/80 text-blue-800 font-extrabold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isSelected ? 'text-blue-600' : 'text-slate-400'}>
                      {tab.icon}
                    </span>
                    <span>{tab.label}</span>
                  </div>

                  {tab.badge !== undefined && tab.badge > 0 && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        tab.id === 'payment-history'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-blue-200/70 text-blue-800'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-100 px-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0B192C] to-[#081021] text-white space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  RWS Tech Support
                </span>
                <p className="text-xs font-bold leading-tight">Need Help with Payments or Courses?</p>
                <button
                  onClick={() => navigateTo('contact')}
                  className="w-full py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-[11px] font-bold transition-colors"
                >
                  Contact Desk
                </button>
              </div>
            </div>
          </aside>

          {/* Right Main Content Area (9 cols) */}
          <main className="lg:col-span-9 space-y-6">
            {/* 1. DASHBOARD OVERVIEW TAB */}
            {selectedDashboardTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Welcome Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#0F244E] to-[#081021] text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      Academic Term Active
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black">
                      Welcome Back, {currentUser.name}!
                    </h2>
                    <p className="text-xs sm:text-sm text-blue-200 max-w-lg leading-relaxed">
                      You are currently enrolled in {enrolledCourses.length} technical courses. Continue
                      where you left off to earn your accredited certificates.
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedDashboardTab('my-learning')}
                    className="self-start md:self-auto px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-blue-800 font-bold text-xs shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                  >
                    <PlayCircle className="w-4 h-4 text-blue-600" />
                    Resume Learning
                  </button>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] text-slate-500 font-bold uppercase">Enrolled</span>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900">
                      {enrolledCourses.length}
                    </p>
                    <span className="text-[10px] text-blue-600 font-medium">Active Programs</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] text-slate-500 font-bold uppercase">Completed</span>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900">
                      {currentUser.completedCourseIds.length}
                    </p>
                    <span className="text-[10px] text-emerald-700 font-medium">100% Finished</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] text-slate-500 font-bold uppercase">Learning Hours</span>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900">
                      {currentUser.learningHours}h
                    </p>
                    <span className="text-[10px] text-blue-600 font-medium">Hands-On Code</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] text-slate-500 font-bold uppercase">Certificates</span>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900">
                      {currentUser.certificatesEarned}
                    </p>
                    <span className="text-[10px] text-amber-700 font-medium">Verified Credentials</span>
                  </div>
                </div>

                {/* Quick Enrolled Courses List */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      Current Learning Tracks
                    </h3>
                    <button
                      onClick={() => setSelectedDashboardTab('my-learning')}
                      className="text-xs font-bold text-blue-600 hover:underline"
                    >
                      View All
                    </button>
                  </div>

                  {enrolledCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {enrolledCourses.slice(0, 2).map((course) => {
                        const progress = userProgress[course.id] || 0;
                        return (
                          <div
                            key={course.id}
                            className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-blue-50/40 transition-colors flex flex-col justify-between space-y-3"
                          >
                            <div className="flex items-center gap-3">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-14 h-14 rounded-xl object-cover border border-blue-200 shrink-0"
                              />
                              <div className="min-w-0">
                                <h4 className="text-sm font-bold text-slate-900 truncate">{course.title}</h4>
                                <span className="text-[11px] text-slate-500">{course.duration}</span>
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <div className="flex justify-between text-[11px] font-bold">
                                <span className="text-slate-600">Progress</span>
                                <span className="text-blue-600">{progress}%</span>
                              </div>
                              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-blue-600 to-blue-600 rounded-full"
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                            </div>

                            <button
                              onClick={() => setActiveCourseForLearning(course)}
                              className="w-full py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5"
                            >
                              <PlayCircle className="w-3.5 h-3.5" />
                              Continue Learning
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-2">
                      <p className="text-xs text-slate-600">You haven&#39;t enrolled in any courses yet.</p>
                      <button
                        onClick={() => setSelectedDashboardTab('available')}
                        className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
                      >
                        Browse Available Courses
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 2. MY LEARNING / PURCHASED COURSES TAB */}
            {selectedDashboardTab === 'my-learning' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Purchased Courses / My Learning</h2>
                    <p className="text-xs text-slate-500">
                      Click &#34;Continue Learning&#34; to open the interactive syllabus and code labs.
                    </p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    {enrolledCourses.length} Programs Enrolled
                  </span>
                </div>

                {enrolledCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {enrolledCourses.map((course) => {
                      const progress = userProgress[course.id] || 0;
                      return (
                        <div
                          key={course.id}
                          className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                        >
                          <div className="relative aspect-video w-full bg-slate-900">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover opacity-90"
                            />
                            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0B192C]/90 text-white text-[11px] font-bold backdrop-blur-xs">
                              {course.category}
                            </div>
                            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                              {progress >= 100 ? 'Completed' : 'In Progress'}
                            </div>
                          </div>

                          <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                            <div className="space-y-2">
                              <h3 className="text-base font-bold text-slate-900">{course.title}</h3>
                              <p className="text-xs text-slate-600 line-clamp-2">
                                {course.shortDescription}
                              </p>

                              {/* Progress bar */}
                              <div className="pt-2 space-y-1.5">
                                <div className="flex justify-between text-xs font-bold">
                                  <span className="text-slate-600">Course Progress</span>
                                  <span className="text-blue-600">{progress}% Completed</span>
                                </div>
                                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-blue-600 to-blue-600 rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                              <button
                                id={`continue-learning-btn-${course.id}`}
                                onClick={() => setActiveCourseForLearning(course)}
                                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-xs"
                              >
                                <PlayCircle className="w-4 h-4" />
                                Continue Learning
                              </button>
                              <button
                                onClick={() => navigateTo('course-details', course.id)}
                                className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                              >
                                Syllabus
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
                    <BookOpen className="w-12 h-12 text-blue-600 mx-auto" />
                    <h3 className="text-lg font-bold text-slate-900">No Enrolled Courses Yet</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Explore our 24 technology programs in Web Development, Programming, Mobile and AI.
                    </p>
                    <button
                      onClick={() => setSelectedDashboardTab('available')}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md hover:bg-blue-700"
                    >
                      Browse Available Courses
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 3. AVAILABLE COURSES TAB */}
            {selectedDashboardTab === 'available' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Available Courses Catalog</h2>
                    <p className="text-xs text-slate-500">
                      Select any course to enroll or explore detailed curriculum modules.
                    </p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {availableCourses.length} Programs Available
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {availableCourses.map((course) => (
                    <div
                      key={course.id}
                      className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="flex items-start gap-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-20 h-20 rounded-2xl object-cover border border-blue-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                            {course.category}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 line-clamp-1">{course.title}</h3>
                          <p className="text-xs text-slate-600 line-clamp-2 mt-0.5">{course.shortDescription}</p>
                          <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-2">
                            <span>{course.duration}</span>
                            <span>•</span>
                            <span className="font-bold text-slate-900">₹{course.fee.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                        <button
                          onClick={() => navigateTo('course-details', course.id)}
                          className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => initiatePurchase(course.id)}
                          className="w-full py-2 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 shadow-xs transition-colors"
                        >
                          Purchase (₹{course.fee})
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. PAYMENT HISTORY TAB */}
            {selectedDashboardTab === 'payment-history' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Payment & Transaction History</h2>
                    <p className="text-xs text-slate-500">
                      Real-time payment gateway statuses: Pending, Successful, Failed, or Expired.
                    </p>
                  </div>

                  {/* Status Filter Tabs */}
                  <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl text-xs">
                    {(['all', 'Pending', 'Successful', 'Failed', 'Expired'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => setPaymentFilter(st)}
                        className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                          paymentFilter === st
                            ? 'bg-blue-600 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Important Notice Regarding Pending Status */}
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-3">
                  <Receipt className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold block">Gateway Verification Desk</span>
                    <p className="text-[11px] leading-relaxed text-blue-700">
                      Per RWS Tech payment policy, all UPI transactions remain in <strong>Pending</strong>{' '}
                      status until reconciled with the banking network. For local testing, you may use the{' '}
                      <strong>Simulate Banking Verification</strong> controls below to test unlocking courses.
                    </p>
                  </div>
                </div>

                {/* Transactions Table / List */}
                {filteredPayments.length > 0 ? (
                  <div className="space-y-3">
                    {filteredPayments.map((txn: PaymentRecord) => {
                      const statusStyles = {
                        Pending: 'bg-amber-50 text-amber-800 border-amber-300 ring-amber-200',
                        Successful: 'bg-emerald-50 text-emerald-800 border-emerald-300 ring-emerald-200',
                        Failed: 'bg-rose-50 text-rose-800 border-rose-300 ring-rose-200',
                        Expired: 'bg-slate-100 text-slate-700 border-slate-300 ring-slate-200',
                      }[txn.status];

                      return (
                        <div
                          key={txn.id}
                          className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                            <div className="space-y-0.5">
                              <span className="text-[11px] font-mono text-blue-600 font-bold">
                                {txn.id}
                              </span>
                              <h4 className="text-sm font-bold text-slate-900">{txn.courseName}</h4>
                              <p className="text-[11px] text-slate-500">
                                Date: {txn.date} • Method: {txn.paymentMethod}
                              </p>
                            </div>

                            <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-2">
                              <span className="text-base font-black text-slate-900">
                                ₹{txn.amount.toLocaleString()}
                              </span>
                              <span
                                className={`px-3 py-0.5 rounded-full text-xs font-bold border ${statusStyles}`}
                              >
                                {txn.status}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-400">UTR / Ref:</span>
                              <code className="font-mono text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md text-[11px]">
                                {txn.utrNumber || 'N/A'}
                              </code>
                            </div>

                            {/* Testing Simulator Helper */}
                            <div className="flex items-center gap-2 pt-2 sm:pt-0">
                              <span className="text-[10px] text-slate-400 font-medium">
                                Simulate Gateway:
                              </span>
                              <button
                                onClick={() => updatePaymentStatus(txn.id, 'Successful')}
                                className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors"
                                title="Simulate Gateway Reconciliation"
                              >
                                Mark Successful
                              </button>
                              <button
                                onClick={() => updatePaymentStatus(txn.id, 'Failed')}
                                className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-rose-100 hover:bg-rose-200 text-rose-800 transition-colors"
                              >
                                Mark Failed
                              </button>
                            </div>
                          </div>

                          {txn.notes && (
                            <p className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-xl border border-slate-100">
                              {txn.notes}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center space-y-3">
                    <Receipt className="w-10 h-10 text-slate-400 mx-auto" />
                    <p className="text-sm font-bold text-slate-800">No Transactions Found</p>
                    <p className="text-xs text-slate-500">
                      No payments found with status &#34;{paymentFilter}&#34;.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* 5. PROFILE SETTINGS TAB */}
            {selectedDashboardTab === 'profile' && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Student Profile</h2>
                    <p className="text-xs text-slate-500">
                      Manage your academic details and contact preferences.
                    </p>
                  </div>
                  {!isEditingProfile && (
                    <button
                      onClick={() => setIsEditingProfile(true)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center gap-1.5"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      Edit Details
                    </button>
                  )}
                </div>

                {isEditingProfile ? (
                  <form onSubmit={handleSaveProfile} className="space-y-4 max-w-xl">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Full Name</label>
                      <input
                        type="text"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white text-slate-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Phone Number</label>
                      <input
                        type="text"
                        value={profilePhone}
                        onChange={(e) => setProfilePhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white text-slate-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Bio / Career Goal</label>
                      <textarea
                        rows={3}
                        value={profileBio}
                        onChange={(e) => setProfileBio(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white text-slate-800"
                      />
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 flex items-center gap-1.5"
                      >
                        <Save className="w-3.5 h-3.5" />
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditingProfile(false)}
                        className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6 max-w-xl">
                    <div className="flex items-center gap-4">
                      {currentUser.avatar ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={currentUser.avatar}
                          alt={currentUser.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-blue-300"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                          {currentUser.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{currentUser.name}</h3>
                        <p className="text-xs text-blue-600 font-semibold">{currentUser.email}</p>
                        <p className="text-xs text-slate-500 mt-1">{currentUser.phone}</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                      <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">
                        About / Statement
                      </span>
                      <p className="text-slate-600 leading-relaxed">{currentUser.bio}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl border border-slate-200 space-y-1">
                        <span className="text-slate-400 text-[10px] uppercase font-bold">Joined</span>
                        <p className="font-bold text-slate-900">{currentUser.joinedDate}</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200 space-y-1">
                        <span className="text-slate-400 text-[10px] uppercase font-bold">Academic Status</span>
                        <p className="font-bold text-emerald-700">Verified Student</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
