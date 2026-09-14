'use client';

import React, { useState, useMemo } from 'react';
import { COURSES_DATA, CATEGORIES, Course } from '@/data/courses';
import { CourseCard } from '@/components/CourseCard';
import { Search, Filter, BookOpen, Sparkles, X } from 'lucide-react';

export function CoursesView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All Levels');

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course: Course) => {
      const matchCategory =
        selectedCategory === 'All' || course.category === selectedCategory;
      const matchQuery =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchLevel =
        selectedLevel === 'All Levels' ||
        course.level === selectedLevel ||
        (selectedLevel === 'Beginner' && course.level === 'Beginner');

      return matchCategory && matchQuery && matchLevel;
    });
  }, [selectedCategory, searchQuery, selectedLevel]);

  const levelOptions = ['All Levels', 'Beginner', 'Intermediate'];

  return (
    <div id="courses-view" className="space-y-12 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-purple-50 via-white to-slate-50 border-b border-purple-100/80 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Complete Curriculum
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Industry-Focused Technology Courses
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Explore 24 comprehensive courses in Web Development, Programming, Mobile Engineering, Cloud, and Generative AI.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search and Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Box */}
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="courses-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses by name or keyword (e.g. React, MERN, Python, Docker)..."
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-purple-600 focus:bg-white transition-all text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Level Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-purple-600 shrink-0 hidden sm:block" />
              <div className="flex items-center gap-1.5 overflow-x-auto w-full">
                {levelOptions.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedLevel === lvl
                        ? 'bg-purple-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 border-t border-slate-100 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-purple-100 text-purple-900 border border-purple-300 shadow-2xs font-extrabold'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter & Active Filter summary */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>
            Showing <strong className="text-slate-800">{filteredCourses.length}</strong> of{' '}
            {COURSES_DATA.length} available programs
          </span>
          {(searchQuery || selectedCategory !== 'All' || selectedLevel !== 'All Levels') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedLevel('All Levels');
              }}
              className="text-purple-700 hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No Courses Match Your Query</h3>
            <p className="text-xs text-slate-500">
              Try modifying your search keywords or switching category filters to explore our 24 technology programs.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedLevel('All Levels');
              }}
              className="px-5 py-2.5 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800"
            >
              Show All Courses
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
