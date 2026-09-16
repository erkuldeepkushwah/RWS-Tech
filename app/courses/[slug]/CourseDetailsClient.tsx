'use client';

import React, { useEffect, useState } from 'react';
import { useApp } from '@/context/AppContext';
import { COURSES_DATA } from '@/data/courses';
import {
  Clock,
  Star,
  Users,
  CheckCircle2,
  Award,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  ArrowLeft,
  Share2,
  Laptop,
  BookOpen,
  Calendar,
  Layers,
  Sparkles,
  HelpCircle
} from 'lucide-react';

function CourseDetailsView() {
  const { selectedCourseId, navigateTo, initiatePurchase, currentUser, addToast } = useApp();
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  // Fallback to first course if none selected
  const course =
    COURSES_DATA.find((c) => c.id === selectedCourseId) || COURSES_DATA[0];

  const isEnrolled = currentUser?.enrolledCourseIds.includes(course.id);

  const toggleModule = (idx: number) => {
    setOpenModuleIndex(openModuleIndex === idx ? null : idx);
  };

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Link Copied', `Course link for "${course.title}" copied to clipboard!`, 'info');
    }
  };

  return (
    <div id="course-details-view" className="space-y-12 pb-24">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateTo('courses')}
              className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Courses
            </button>
            <span>/</span>
            <span className="text-blue-600 font-medium">{course.category}</span>
            <span>/</span>
            <span className="text-slate-900 font-bold truncate max-w-xs">{course.title}</span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Hero Header for Course */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Main Details & Syllabus (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                  {course.category}
                </span>
                {course.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-600 text-white">
                    {course.badge}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                  Level: {course.level}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base text-slate-600 leading-relaxed">
                {course.description}
              </p>

              {/* Meta Rating & Learners */}
              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600 pt-2 border-y border-slate-200 py-3">
                <div className="flex items-center gap-1.5 text-amber-600 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{course.rating}</span>
                  <span className="text-slate-500 font-normal">({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>{course.studentsCount.toLocaleString()}+ students enrolled</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Updated 2026</span>
                </div>
              </div>
            </div>

            {/* Course Preview Banner / Image */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-blue-300 uppercase tracking-wider">
                    Practical Technology Track
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold">{course.title} Comprehensive Specialization</h3>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Project Verified
                </span>
              </div>
            </div>

            {/* What You Will Learn Section */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                What You Will Learn
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/50 border border-blue-100/60">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Modules Accordion */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Curriculum & Course Modules
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {course.modules.length} Modules • {course.modules.reduce((a, b) => a + b.lessons.length, 0)} Total Lessons • {course.duration}
                  </p>
                </div>
                <button
                  onClick={() => setOpenModuleIndex(openModuleIndex === null ? 0 : null)}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  {openModuleIndex === null ? 'Expand All' : 'Collapse'}
                </button>
              </div>

              <div className="space-y-3">
                {course.modules.map((module, mIdx) => {
                  const isOpen = openModuleIndex === mIdx;
                  return (
                    <div
                      key={mIdx}
                      className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-slate-50/50"
                    >
                      <button
                        onClick={() => toggleModule(mIdx)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                            {mIdx + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">{module.title}</h4>
                            <span className="text-[11px] text-slate-500">{module.lessons.length} lessons</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-100/80 px-2.5 py-1 rounded-full">
                            {module.duration}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 pt-2 bg-white border-t border-slate-100 space-y-2.5">
                          {module.lessons.map((lesson, lIdx) => (
                            <div
                              key={lIdx}
                              className="flex items-center justify-between text-xs py-1.5 border-b border-slate-50 last:border-0 text-slate-700"
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                <span>{lesson}</span>
                              </div>
                              <span className="text-slate-400 text-[11px]">Video + Hands-on Lab</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Real Projects Included */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                Real-World Projects Built in this Course
              </h3>
              <p className="text-xs text-slate-600">
                You will implement, debug, and publish the following full-scale projects for your resume and portfolio:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {course.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/40 border border-slate-200 flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                        Capstone {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">{proj}</h4>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">
                      ✓ GitHub Repository Ready
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Information */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-tr from-[#081021] via-[#0B192C] to-[#0F244E] text-white shadow-xl space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-700/60 border border-blue-600/60 text-xs font-bold text-blue-200">
                    <Award className="w-3.5 h-3.5 text-amber-300" />
                    Accredited Credentials
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black">{course.certificate.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                    {course.certificate.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs text-blue-200 font-semibold mr-2">Skills Certified:</span>
                {course.certificate.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Instructor Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-300 shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Your Instructor</span>
                <h4 className="text-base font-bold text-slate-900">{course.instructor.name}</h4>
                <p className="text-xs text-slate-600">{course.instructor.role} • {course.instructor.company}</p>
                <p className="text-xs text-slate-500 mt-1">Direct feedback on student pull requests and office hour mentoring.</p>
              </div>
            </div>
          </div>

          {/* Right: Sticky Pricing & Purchase Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl border-2 border-blue-200 shadow-xl p-6 sm:p-7 space-y-6">
              {/* Price Banner */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Enrollment Fee</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">
                    ₹{course.fee.toLocaleString()}
                  </span>
                  <span className="text-base text-slate-400 line-through font-semibold">
                    ₹{course.originalFee.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {Math.round(((course.originalFee - course.fee) / course.originalFee) * 100)}% OFF
                  </span>
                </div>
                <p className="text-xs text-amber-600 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Limited seats available for current cohort
                </p>
              </div>

              {/* Purchase Button CTA */}
              <div className="space-y-2.5">
                {isEnrolled ? (
                  <button
                    id="details-go-learning-btn"
                    onClick={() => navigateTo('dashboard', undefined, 'my-learning')}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Laptop className="w-4 h-4" />
                    Already Enrolled • Go to Learning
                  </button>
                ) : (
                  <button
                    id="details-purchase-course-btn"
                    onClick={() => initiatePurchase(course.id)}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Purchase Course Now
                  </button>
                )}
                <p className="text-[11px] text-center text-slate-500">
                  Instant Access Upon Gateway Reconciliation
                </p>
              </div>

              {/* What's Included Checklist */}
              <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-700">
                <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">This Program Includes:</p>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Full lifetime access to all course modules</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>3-5 Real-world production projects with code</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Verified completion certificate with shareable link</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Direct mentor Q&A and community access</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Full mobile and desktop dashboard access</span>
                </div>
              </div>

              {/* Guarantee Box */}
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs text-blue-800 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">100% Practical Guarantee</span>
                  <span className="text-[11px] text-blue-600 leading-tight">
                    Gain genuine coding proficiency with support from RWS Tech instructors.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CourseDetailsClient({ courseKey }: { courseKey: string }) {
  const { selectedCourseId, selectCourse } = useApp();

  // Keep the context selection in sync with the URL
  // (supports direct visits and shared links).
  useEffect(() => {
    const course = COURSES_DATA.find((c) => c.id === courseKey || c.slug === courseKey);
    if (course && course.id !== selectedCourseId) {
      selectCourse(course.id);
    }
  }, [courseKey, selectedCourseId, selectCourse]);

  return <CourseDetailsView />;
}
