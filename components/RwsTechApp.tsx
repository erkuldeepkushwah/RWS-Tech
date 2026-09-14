'use client';

import React from 'react';
import { AppProvider, useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ToastContainer } from '@/components/ToastContainer';

import { HomeView } from '@/components/views/HomeView';
import { AboutView } from '@/components/views/AboutView';
import { CoursesView } from '@/components/views/CoursesView';
import { CourseDetailsView } from '@/components/views/CourseDetailsView';
import { ContactView } from '@/components/views/ContactView';
import { AuthView } from '@/components/views/AuthView';
import { PurchaseView } from '@/components/views/PurchaseView';
import { DashboardView } from '@/components/views/DashboardView';

function AppContent() {
  const { activePage } = useApp();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/60 font-sans">
      <ToastContainer />
      <Navbar />

      <main className="flex-1">
        {activePage === 'home' && <HomeView />}
        {activePage === 'about' && <AboutView />}
        {activePage === 'courses' && <CoursesView />}
        {activePage === 'course-details' && <CourseDetailsView />}
        {activePage === 'contact' && <ContactView />}
        {activePage === 'login' && <AuthView initialMode="login" />}
        {activePage === 'register' && <AuthView initialMode="register" />}
        {activePage === 'purchase' && <PurchaseView />}
        {activePage === 'dashboard' && <DashboardView />}
      </main>

      <Footer />
    </div>
  );
}

export function RwsTechApp() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
