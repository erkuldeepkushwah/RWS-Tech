'use client';

import React, { useState } from 'react';
import { Course } from '@/data/courses';
import { useApp } from '@/context/AppContext';
import {
  X,
  PlayCircle,
  CheckCircle,
  FileCode,
  Award,
  Download,
  BookOpen,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface LearningModalProps {
  course: Course;
  onClose: () => void;
}

export function LearningModal({ course, onClose }: LearningModalProps) {
  const { userProgress, updateCourseProgress } = useApp();
  const progress = userProgress[course.id] || 0;

  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    // Generate some completed lessons based on progress percentage
    const all: string[] = [];
    course.modules.forEach((m) => all.push(...m.lessons));
    const count = Math.round((progress / 100) * all.length);
    return all.slice(0, count);
  });

  const currentModule = course.modules[activeModuleIdx] || course.modules[0];
  const currentLessonName = currentModule?.lessons[activeLessonIdx] || 'Course Overview';

  const toggleLessonComplete = (lesson: string) => {
    let next: string[];
    if (completedLessons.includes(lesson)) {
      next = completedLessons.filter((l) => l !== lesson);
    } else {
      next = [...completedLessons, lesson];
    }
    setCompletedLessons(next);

    const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
    const calculatedPercentage = Math.round((next.length / totalLessons) * 100);
    updateCourseProgress(course.id, calculatedPercentage);
  };

  return (
    <div
      id="learning-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        id="learning-modal-container"
        className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] max-h-[800px] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                  {course.category}
                </span>
                <span className="text-xs text-slate-500">• {course.duration}</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">{course.title}</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Progress Gauge */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-bold text-blue-600">{progress}% Completed</span>
              <div className="w-28 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-600 transition-all duration-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <button
              id="close-learning-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close learning room"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two column split */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
          {/* Left Column: Video Lecture & Hands-On Workspace (2 cols) */}
          <div className="lg:col-span-2 flex flex-col overflow-y-auto p-4 sm:p-6 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-200">
            {/* Interactive Player Screen */}
            <div className="relative aspect-video w-full rounded-2xl bg-slate-950 overflow-hidden shadow-lg flex items-center justify-center group border border-slate-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
              />
              <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-mono text-blue-300 tracking-wider uppercase">Active Module Lesson</p>
                  <h3 className="text-base sm:text-xl font-bold text-white mt-1 max-w-md">{currentLessonName}</h3>
                </div>
                <span className="text-xs text-slate-400">Duration: 18 mins • High Definition 1080p</span>
              </div>
            </div>

            {/* Lesson Controls and Completion Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
              <div>
                <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Lesson Status</p>
                <p className="text-sm font-bold text-slate-900">
                  {completedLessons.includes(currentLessonName) ? '✓ Completed & Verified' : 'In Progress'}
                </p>
              </div>

              <button
                id="toggle-lesson-complete-btn"
                onClick={() => toggleLessonComplete(currentLessonName)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  completedLessons.includes(currentLessonName)
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xs'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                {completedLessons.includes(currentLessonName) ? 'Completed (Click to undo)' : 'Mark Lesson Complete'}
              </button>
            </div>

            {/* Practical Code Sandbox / Notes Tab */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-600" />
                Interactive Code Lab & Resources
              </h4>
              <div className="p-4 rounded-xl bg-slate-900 text-slate-300 font-mono text-xs overflow-x-auto border border-slate-800 space-y-2">
                <p className="text-slate-500">{'// RWS Tech Student Exercise Sandbox'}</p>
                <p className="text-blue-300 font-semibold">import &#123; createEngine &#125; from &#39;@rwstech/runtime&#39;;</p>
                <p className="text-slate-300">
                  const student = &#34;Aryan Verma&#34;;
                  <br />
                  {`console.log("Starting lesson: ${currentLessonName}");`}
                </p>
                <p className="text-emerald-400 font-semibold">{'// Live mentor verification active • 24/7 Doubt Desk'}</p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  {course.certificate.title}
                </span>
                <button
                  onClick={() => alert('Course curriculum notes and starter project files downloaded!')}
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Starter Code (.zip)
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Syllabus & Modules List (1 col) */}
          <div className="flex flex-col h-full bg-slate-50/60 overflow-y-auto p-4 space-y-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">Course Syllabus</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {course.modules.length} Modules • {course.modules.reduce((a, b) => a + b.lessons.length, 0)} Total Lessons
              </p>
            </div>

            <div className="space-y-3">
              {course.modules.map((module, mIdx) => {
                const isSelected = activeModuleIdx === mIdx;
                return (
                  <div
                    key={mIdx}
                    className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all shadow-2xs"
                  >
                    <button
                      onClick={() => setActiveModuleIdx(mIdx)}
                      className={`w-full px-3.5 py-3 text-left flex items-center justify-between transition-colors ${
                        isSelected ? 'bg-blue-50/80 border-b border-blue-100' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                          Module {mIdx + 1}
                        </p>
                        <h5 className="text-xs font-bold text-slate-900 truncate">{module.title}</h5>
                      </div>
                      <span className="text-[10px] text-slate-400 shrink-0">{module.duration}</span>
                    </button>

                    {isSelected && (
                      <div className="p-2 space-y-1 bg-white">
                        {module.lessons.map((lesson, lIdx) => {
                          const isCurrent = activeLessonIdx === lIdx;
                          const isDone = completedLessons.includes(lesson);

                          return (
                            <button
                              key={lIdx}
                              onClick={() => setActiveLessonIdx(lIdx)}
                              className={`w-full px-3 py-2 rounded-lg text-left flex items-center justify-between text-xs transition-colors ${
                                isCurrent
                                  ? 'bg-blue-600 text-white font-semibold'
                                  : 'text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              <div className="flex items-center gap-2 truncate">
                                {isDone ? (
                                  <CheckCircle
                                    className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-white' : 'text-emerald-600'}`}
                                  />
                                ) : (
                                  <PlayCircle
                                    className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-white' : 'text-slate-400'}`}
                                  />
                                )}
                                <span className="truncate">{lesson}</span>
                              </div>
                              <ChevronRight className={`w-3 h-3 shrink-0 ${isCurrent ? 'text-white/80' : 'text-slate-300'}`} />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Certificate Preview Card */}
            <div className="mt-auto pt-4 border-t border-slate-200">
              <div className="p-3.5 rounded-xl bg-gradient-to-tr from-[#0B192C] to-[#0F244E] text-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-blue-200">Official Certificate</span>
                  <Award className="w-4 h-4 text-amber-300" />
                </div>
                <p className="text-xs font-semibold leading-snug">{course.certificate.title}</p>
                <p className="text-[10px] text-blue-200">
                  Auto-issued on 100% completion with verifiable QR badge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
