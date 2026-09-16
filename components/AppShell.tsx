'use client';

import React from 'react';
import { AppProvider } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ToastContainer } from '@/components/ToastContainer';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen bg-slate-50/60 font-sans">
        <ToastContainer />
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </div>
    </AppProvider>
  );
}
