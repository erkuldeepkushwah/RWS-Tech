import type {Metadata} from 'next';
import './globals.css';
import AppShell from '@/components/AppShell';

export const metadata: Metadata = {
  title: 'RWS Tech - Technology & Online Learning Platform',
  description:
    'Modern technology education platform offering industry-aligned courses in Web Development, Programming, App Development, Cloud, and AI with interactive curriculum and student dashboard.',
  openGraph: {
    title: 'RWS Tech - Technology & Online Learning Platform',
    description:
      'Modern technology education platform offering industry-aligned courses in Web Development, Programming, App Development, Cloud, and AI with interactive curriculum and student dashboard.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RWS Tech - Technology & Online Learning Platform',
    description:
      'Modern technology education platform offering industry-aligned courses in Web Development, Programming, App Development, Cloud, and AI with interactive curriculum and student dashboard.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-purple-600 selection:text-white" suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
