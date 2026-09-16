'use client';

import { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { COURSES_DATA } from '@/data/courses';
import { CourseDetailsView } from '@/components/views/CourseDetailsView';

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
