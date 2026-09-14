'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import {
  Users,
  Award,
  BookOpen,
  Code2,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Terminal,
  Laptop,
  ArrowRight,
  ShieldCheck,
  Target,
  Compass
} from 'lucide-react';

export function AboutView() {
  const { navigateTo } = useApp();

  const stats = [
    { label: 'Industry Courses', value: '24+', sub: 'Web, Mobile, AI & Programming', icon: <BookOpen className="w-6 h-6 text-purple-600" /> },
    { label: 'Graduated Students', value: '1000+', sub: 'Trained & Upskilled Globally', icon: <Users className="w-6 h-6 text-indigo-600" /> },
    { label: 'Real Projects', value: '50+', sub: 'Production Capstone Builds', icon: <Code2 className="w-6 h-6 text-purple-600" /> },
    { label: 'Expert Mentors', value: '15+', sub: 'Architects from Top IT Hubs', icon: <GraduationCap className="w-6 h-6 text-indigo-600" /> },
  ];

  const mentors = [
    {
      name: 'Aditya Sharma',
      role: 'Principal Engineer & Founder',
      bio: 'Ex-Senior Full Stack Architect with 12+ years building distributed React, Node, and Cloud microservices.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      badge: 'React & MERN Lead',
    },
    {
      name: 'Dr. Rajesh Nair',
      role: 'Head of Computer Science',
      bio: 'Ph.D. in Computer Science with focus on C/C++, Algorithms, and High-Performance Software Architecture.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
      badge: 'C++ & Python Specialist',
    },
    {
      name: 'Neha Kapoor',
      role: 'Lead Mobile Architect',
      bio: 'Shipped over 25+ production mobile applications on the App Store & Google Play using React Native & Jetpack Compose.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      badge: 'Mobile & Kotlin Expert',
    },
    {
      name: 'Kunal Deshmukh',
      role: 'Cloud & Infrastructure Lead',
      bio: 'DevOps & Cloud specialist with hands-on enterprise expertise in Docker, Kubernetes, AWS, and Cloud Run architectures.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      badge: 'DevOps & Backend Lead',
    },
  ];

  return (
    <div id="about-view" className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-purple-50 via-white to-slate-50 border-b border-purple-100/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            About RWS Tech
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto">
            Practical Technology Education Built for High-Impact Careers
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            RWS Tech is an industry-focused technology training academy founded to empower learners with
            hands-on software development, real projects, and job-oriented technical skills.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900">{stat.value}</p>
                <p className="text-xs font-bold text-slate-800">{stat.label}</p>
                <p className="text-[11px] text-slate-500">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Educational Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Our Core Principles</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Why Students Excel at RWS Tech
          </h2>
          <p className="text-sm text-slate-600">
            We reject passive video tutorials in favor of active, mentored software craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Practical Technology Education</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every lesson includes direct coding exercises. Students learn by typing real code, debugging stack traces,
              and running tests in realistic development environments.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Industry-Focused Courses</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our curriculum is created with senior engineers from top technology enterprises. We teach modern tools
              currently utilized by hiring software companies worldwide.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Beginner-Friendly Learning</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No prior coding background? We demystify algorithms, variables, and architectures step-by-step with
              visual analogies, digestible pacing, and responsive mentor feedback.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Project-Based Learning</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You won’t build generic to-do apps. You will build production SaaS dashboards, streaming platforms,
              e-commerce checkout engines, and AI applications for your GitHub portfolio.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Career & Job-Oriented Skills</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We prepare you for the actual interview room with data structure reviews, system design fundamentals,
              mock whiteboarding sessions, and resume workshops.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-800 to-indigo-900 text-white shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-200 uppercase tracking-wider">Start Today</span>
              <h3 className="text-xl font-bold">Empowering 1000+ Students</h3>
              <p className="text-xs text-purple-100 leading-relaxed">
                Join our supportive global community and advance your software engineering journey.
              </p>
            </div>
            <button
              onClick={() => navigateTo('courses')}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-purple-900 bg-white hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
            >
              Explore Course Tracks
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Expert Mentors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">The Faculty</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Meet Your Expert Mentors</h2>
          <p className="text-sm text-slate-600">
            Learn directly from practitioners who design enterprise systems for a living.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all p-5 flex flex-col items-center text-center space-y-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.avatar}
                alt={m.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-purple-200 shadow-sm"
              />
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  {m.badge}
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-2">{m.name}</h4>
                <p className="text-xs text-purple-700 font-medium">{m.role}</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
