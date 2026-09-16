import { COURSES_DATA } from '@/data/courses';
import CourseDetailsClient from './CourseDetailsClient';

// Static export: pre-render a page for every course slug.
export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES_DATA.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CourseDetailsClient courseKey={slug} />;
}
