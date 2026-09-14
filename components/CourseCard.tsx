'use client';

import React from 'react';
import { Course } from '@/data/courses';
import { useApp } from '@/context/AppContext';
import {
  Clock,
  Star,
  Users,
  ArrowRight,
  ShoppingCart,
  CheckCircle2
} from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { navigateTo, initiatePurchase, currentUser } = useApp();

  const isEnrolled = currentUser?.enrolledCourseIds.includes(course.id);

  return (
    <div
      id={`course-card-${course.id}`}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 hover:border-purple-300 shadow-xs hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden"
    >
      {/* Course Banner Image & Badges */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-purple-900 shadow-xs backdrop-blur-xs">
            {course.category}
          </span>
          {course.badge && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs">
              {course.badge}
            </span>
          )}
        </div>

        {/* Enrolled indicator */}
        {isEnrolled && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[11px] font-bold shadow-xs backdrop-blur-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Enrolled
          </div>
        )}

        {/* Level Tag bottom left */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white/90 text-xs font-medium">
          <span className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-xs border border-white/10">
            {course.level}
          </span>
          <span className="flex items-center gap-1 text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-white text-xs">{course.rating}</span>
            <span className="text-white/60 text-[10px]">({course.reviewCount})</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-1">
            {course.title}
          </h3>
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
            {course.shortDescription}
          </p>

          {/* Key Metrics: Duration & Students */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100 mt-3">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-purple-600" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              {course.studentsCount.toLocaleString()}+ Learners
            </span>
          </div>
        </div>

        {/* Pricing and Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-slate-900 tracking-tight">
                ₹{course.fee.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 line-through">
                ₹{course.originalFee.toLocaleString()}
              </span>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {Math.round(((course.originalFee - course.fee) / course.originalFee) * 100)}% OFF
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              id={`view-course-btn-${course.id}`}
              onClick={() => navigateTo('course-details', course.id)}
              className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-purple-800 bg-purple-50 hover:bg-purple-100 border border-purple-200/80 transition-colors flex items-center justify-center gap-1"
            >
              View Course
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {isEnrolled ? (
              <button
                id={`continue-course-btn-${course.id}`}
                onClick={() => navigateTo('dashboard', undefined, 'my-learning')}
                className="w-full py-2 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors flex items-center justify-center gap-1"
              >
                Go to Learning
              </button>
            ) : (
              <button
                id={`purchase-course-btn-${course.id}`}
                onClick={() => initiatePurchase(course.id)}
                className="w-full py-2 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 shadow-xs shadow-purple-600/20 transition-all flex items-center justify-center gap-1"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                Purchase
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
