'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { COURSES_DATA, CATEGORIES } from '@/data/courses';
import { CourseCard } from '@/components/CourseCard';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Terminal,
  Laptop,
  CheckCircle2,
  Users,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Star,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function HomePage() {
  const { navigateTo, currentUser } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCourses =
    activeCategory === 'All'
      ? COURSES_DATA.slice(0, 8)
      : COURSES_DATA.filter((c) => c.category === activeCategory).slice(0, 8);

  const stats = [
    { label: 'Industry Courses', value: '24+', sub: 'Comprehensive Tech Tracks', icon: <BookOpen className="w-5 h-5 text-blue-600" /> },
    { label: 'Active Students', value: '1000+', sub: 'Trained & Upskilled', icon: <Users className="w-5 h-5 text-blue-600" /> },
    { label: 'Real Projects', value: '50+', sub: 'Production Portfolio Builds', icon: <Code2 className="w-5 h-5 text-blue-600" /> },
    { label: 'Expert Mentors', value: '15+', sub: 'From Leading IT Enterprises', icon: <GraduationCap className="w-5 h-5 text-blue-600" /> },
  ];

  const pillars = [
    {
      title: 'Practical Technology Education',
      desc: 'No dry theory. Build real software from day one with live coding sandboxes and industry workflows.',
      icon: <Terminal className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Industry-Focused Courses',
      desc: 'Curriculums continuously updated for current enterprise demands in React, Next.js, Cloud, and Generative AI.',
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Beginner-Friendly Learning',
      desc: 'Gentle step-by-step progressions with 0-to-1 foundations in programming logic, HTML/CSS, and algorithms.',
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Project-Based Learning',
      desc: 'Create 3-5 production-grade full-stack capstones for your GitHub portfolio to showcase to hiring managers.',
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Career & Job-Oriented Skills',
      desc: 'Resume optimization, mock technical interview drill-downs, and verifiably accredited completion credentials.',
      icon: <Award className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <div id="home-view" className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative pt-8 pb-16 md:py-24 bg-gradient-to-b from-[#0B192C] via-[#0F244E] to-[#081021] border-b border-[#081021] overflow-hidden"
      >
        {/* Subtle background ambient circles */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Side: Text & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Trust Badge / Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-blue-400/30 text-blue-100 text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span>Next-Generation Online Tech Academy</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-blue-600 font-bold">2026 Batch Enrolling</span>
              </div>

              {/* Large Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Build Your Future <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                  With Technology
                </span>
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Learn modern web development, programming languages, cloud engineering, and artificial intelligence
                through project-driven tracks taught by veteran industry architects.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="hero-explore-courses-btn"
                  onClick={() => navigateTo('courses')}
                  className="px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Explore Courses
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-get-started-btn"
                  onClick={() => {
                    if (currentUser) {
                      navigateTo('dashboard');
                    } else {
                      navigateTo('register');
                    }
                  }}
                  className="px-7 py-3.5 rounded-xl font-bold text-white bg-transparent hover:bg-white/10 border border-white/40 shadow-xs hover:border-white/60 transition-all flex items-center gap-2"
                >
                  <Laptop className="w-4 h-4 text-blue-300" />
                  Get Started
                </button>
              </div>

              {/* Hero Micro-Features */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Practical Hands-on Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Recognized Certificates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>1-on-1 Code Mentorship</span>
                </div>
              </div>
            </div>

            {/* Right Side: Visual Image & Floating Tech UI Elements (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Illustration / Image Frame */}
                <div className="relative aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-blue-400/30 bg-slate-900 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                    alt="RWS Tech modern technology education workspace"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081021]/80 via-transparent to-black/20" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Live Classroom Experience</p>
                    <p className="text-base font-bold mt-0.5">Empowering Tomorrow&#39;s Software Engineers</p>
                  </div>
                </div>

                {/* Floating UI Element 1: Top Right Code Card */}
                <div
                  id="hero-floating-code"
                  className="absolute -top-5 -right-4 sm:-right-6 bg-slate-950/95 text-slate-200 p-3.5 rounded-2xl shadow-xl border border-slate-800 backdrop-blur-md hidden sm:block animate-bounce [animation-duration:6s]"
                >
                  <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-slate-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-mono text-slate-400 ml-2">techStack.ts</span>
                  </div>
                  <pre className="text-[11px] font-mono leading-tight text-blue-300">
                    <code>
                      <span className="text-pink-400">const</span> career = &#123;<br />
                      &nbsp;&nbsp;skills: [<span className="text-emerald-300">&#39;React&#39;</span>, <span className="text-emerald-300">&#39;Node&#39;</span>],<br />
                      &nbsp;&nbsp;ready: <span className="text-blue-400">true</span><br />
                      &#125;;
                    </code>
                  </pre>
                </div>

                {/* Floating UI Element 2: Bottom Left Rating Card */}
                <div
                  id="hero-floating-rating"
                  className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-3 animate-bounce [animation-duration:7s]"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/30">
                    <Zap className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-slate-900 mt-0.5">4.9 / 5 Average Rating</p>
                    <p className="text-[10px] text-slate-500">From 1000+ Students</p>
                  </div>
                </div>

                {/* Floating UI Element 3: Bottom Right Badge */}
                <div className="absolute top-1/2 -right-4 translate-y-6 bg-blue-600 text-white px-3 py-1.5 rounded-full shadow-lg text-[11px] font-bold flex items-center gap-1.5 hidden md:flex border border-blue-400/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  100% Industry Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR SECTION */}
      <section id="stats-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md hover:shadow-lg transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 transition-colors">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                <p className="text-xs font-bold text-slate-800">{stat.label}</p>
                <p className="text-[11px] text-slate-500">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT RWS TECH SECTION */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              About RWS Tech
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Practical Technology Education Built for Real-World Industry Demands
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At RWS Tech, we bridge the gap between traditional textbook education and high-demand IT careers.
              Our comprehensive programs empower beginners and intermediate developers to master full-stack web
              development, enterprise programming, mobile apps, databases, and AI technologies.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/80 hover:bg-blue-50/50 border border-slate-200/70 hover:border-blue-200 transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}

            {/* Quick Action Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B192C] via-[#0F244E] to-[#081021] text-white flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200">Start Today</span>
                <h3 className="text-xl font-bold">Ready to Upskill with RWS Tech?</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Join our vibrant cohort of 1,000+ students and get instant access to 24+ courses.
                </p>
              </div>
              <button
                onClick={() => navigateTo('courses')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-blue-800 bg-white hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                Browse All Courses
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED COURSES SECTION */}
      <section id="courses-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
              <BookOpen className="w-4 h-4 text-blue-600" />
              Course Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Explore Our Industry-Ready Programs
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              From zero-programming foundations to modern MERN stacks, mobile frameworks, and Generative AI.
            </p>
          </div>

          <button
            onClick={() => navigateTo('courses')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors flex items-center gap-1.5"
          >
            View All 24 Courses
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* 5. HUMANIZED EDTECH HIGHLIGHTS (WordPress / Academy Craft) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0B192C] via-[#0F244E] to-[#081021] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                The RWS Tech Pedagogy
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                Designed to Transform Absolute Beginners Into Confident Engineers
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Every course is backed by live mentor office hours, structured code assignments, verified capstones,
                and lifetime curriculum updates. Join over 1,000 students learning with RWS Tech today.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-blue-200">
                <span className="flex items-center gap-1.5">✓ Lifetime Course Access</span>
                <span className="flex items-center gap-1.5">✓ Industry Certificate</span>
                <span className="flex items-center gap-1.5">✓ 50+ Real Projects</span>
                <span className="flex items-center gap-1.5">✓ 24/7 Community Support</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
              <button
                onClick={() => navigateTo('courses')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-blue-50 shadow-lg shadow-black/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Enroll in a Course Now
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
