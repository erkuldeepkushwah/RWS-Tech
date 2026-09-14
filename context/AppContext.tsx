'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { COURSES_DATA, Course } from '@/data/courses';

export type PageView =
  | 'home'
  | 'about'
  | 'courses'
  | 'course-details'
  | 'contact'
  | 'login'
  | 'register'
  | 'dashboard'
  | 'purchase'
  | 'payment-history'
  | 'profile';

export type DashboardTab = 'overview' | 'my-learning' | 'available' | 'payment-history' | 'profile';

export type PaymentStatus = 'Pending' | 'Successful' | 'Failed' | 'Expired';
export type PaymentMethod = 'UPI' | 'PhonePe' | 'Paytm';

export interface PaymentRecord {
  id: string;
  courseId: string;
  courseName: string;
  courseImage: string;
  amount: number;
  paymentMethod: PaymentMethod;
  upiId: string;
  date: string;
  status: PaymentStatus;
  utrNumber?: string;
  userEmail: string;
  notes?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  avatar: string;
  joinedDate: string;
  enrolledCourseIds: string[];
  completedCourseIds: string[];
  learningHours: number;
  certificatesEarned: number;
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
}

interface AppContextType {
  // Navigation
  activePage: PageView;
  selectedCourseId: string | null;
  selectedCourse: Course | null;
  selectedDashboardTab: DashboardTab;
  navigateTo: (page: PageView, courseId?: string, tab?: DashboardTab) => void;
  setSelectedDashboardTab: (tab: DashboardTab) => void;

  // Authentication
  currentUser: UserProfile | null;
  login: (email: string, pass: string) => boolean;
  register: (name: string, email: string, pass: string) => boolean;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
  loginAsDemoUser: () => void;

  // Payments
  payments: PaymentRecord[];
  activePendingPayment: PaymentRecord | null;
  initiatePurchase: (courseId: string) => void;
  submitPaymentVerification: (courseId: string, method: PaymentMethod, userEmail: string, utrNumber: string) => PaymentRecord;
  updatePaymentStatus: (paymentId: string, status: PaymentStatus) => void;

  // Learning Progress
  userProgress: Record<string, number>; // courseId -> percentage (0 - 100)
  activeLearningCourse: Course | null;
  setActiveLearningCourse: (course: Course | null) => void;
  updateCourseProgress: (courseId: string, percentage: number) => void;

  // Toasts
  toasts: Toast[];
  addToast: (title: string, message: string, type?: Toast['type']) => void;
  removeToast: (id: string) => void;
}

const DEFAULT_USER: UserProfile = {
  id: 'usr_rws_8921',
  name: 'Aryan Verma',
  email: 'crazyshotz59@gmail.com',
  phone: '+91 98765 43210',
  bio: 'Aspiring Full Stack Engineer passionate about React, Next.js, and Cloud architectures. Currently building real-world projects with RWS Tech.',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  joinedDate: 'January 2026',
  enrolledCourseIds: ['web-5', 'web-10'], // React.js and MERN Stack pre-enrolled
  completedCourseIds: ['web-1'], // HTML & CSS completed
  learningHours: 48,
  certificatesEarned: 1,
};

const INITIAL_PAYMENTS: PaymentRecord[] = [
  {
    id: 'TXN-RWS-849201',
    courseId: 'web-10',
    courseName: 'MERN Stack Development',
    courseImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    amount: 3999,
    paymentMethod: 'UPI',
    upiId: 'rwstech.pay@okhdfcbank',
    date: '2026-03-02 14:32',
    status: 'Successful',
    utrNumber: '606219483720',
    userEmail: 'crazyshotz59@gmail.com',
    notes: 'Payment verified by payment gateway desk.',
  },
  {
    id: 'TXN-RWS-731904',
    courseId: 'web-5',
    courseName: 'React.js',
    courseImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80',
    amount: 2499,
    paymentMethod: 'PhonePe',
    upiId: 'rwstech@ybl',
    date: '2026-02-18 10:15',
    status: 'Successful',
    utrNumber: '604812390145',
    userEmail: 'crazyshotz59@gmail.com',
    notes: 'Verified via automated banking gateway.',
  },
  {
    id: 'TXN-RWS-618492',
    courseId: 'other-23',
    courseName: 'AI & Generative AI',
    courseImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
    amount: 3499,
    paymentMethod: 'Paytm',
    upiId: 'rwstech@paytm',
    date: '2026-03-12 18:40',
    status: 'Pending',
    utrNumber: '607198421094',
    userEmail: 'crazyshotz59@gmail.com',
    notes: 'Awaiting banking reconciliation (UTR validation in progress).',
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedDashboardTab, setSelectedDashboardTab] = useState<DashboardTab>('overview');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(DEFAULT_USER);
  const [payments, setPayments] = useState<PaymentRecord[]>(INITIAL_PAYMENTS);
  const [userProgress, setUserProgress] = useState<Record<string, number>>({
    'web-5': 65, // React.js 65% done
    'web-10': 30, // MERN Stack 30% done
    'web-1': 100, // HTML & CSS completed
  });
  const [activeLearningCourse, setActiveLearningCourse] = useState<Course | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Load persistence if available
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        try {
          const savedUser = localStorage.getItem('rws_user');
          if (savedUser) {
            setCurrentUser(JSON.parse(savedUser));
          }
          const savedPayments = localStorage.getItem('rws_payments');
          if (savedPayments) {
            setPayments(JSON.parse(savedPayments));
          }
          const savedProgress = localStorage.getItem('rws_progress');
          if (savedProgress) {
            setUserProgress(JSON.parse(savedProgress));
          }
        } catch {
          // use defaults
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Save changes
  const persistUser = (user: UserProfile | null) => {
    setCurrentUser(user);
    if (typeof window !== 'undefined') {
      if (user) localStorage.setItem('rws_user', JSON.stringify(user));
      else localStorage.removeItem('rws_user');
    }
  };

  const persistPayments = (newPayments: PaymentRecord[]) => {
    setPayments(newPayments);
    if (typeof window !== 'undefined') {
      localStorage.setItem('rws_payments', JSON.stringify(newPayments));
    }
  };

  const persistProgress = (newProgress: Record<string, number>) => {
    setUserProgress(newProgress);
    if (typeof window !== 'undefined') {
      localStorage.setItem('rws_progress', JSON.stringify(newProgress));
    }
  };

  const addToast = useCallback((title: string, message: string, type: Toast['type'] = 'info') => {
    const id = 'toast_' + Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const navigateTo = useCallback((page: PageView, courseId?: string, tab?: DashboardTab) => {
    if (courseId) {
      setSelectedCourseId(courseId);
    }
    if (tab) {
      setSelectedDashboardTab(tab);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const selectedCourse = selectedCourseId
    ? COURSES_DATA.find((c) => c.id === selectedCourseId) || null
    : null;

  const login = (email: string, pass: string): boolean => {
    if (!email || !pass) {
      addToast('Validation Error', 'Please provide both email and password.', 'error');
      return false;
    }
    if (pass.length < 6) {
      addToast('Weak Password', 'Password must be at least 6 characters.', 'error');
      return false;
    }

    const loggedUser: UserProfile = {
      ...DEFAULT_USER,
      email: email.trim(),
      name: email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || 'Student',
    };
    persistUser(loggedUser);
    addToast('Welcome back!', `Logged in successfully as ${loggedUser.name}.`, 'success');
    navigateTo('dashboard', undefined, 'overview');
    return true;
  };

  const register = (name: string, email: string, pass: string): boolean => {
    if (!name || !email || !pass) {
      addToast('Registration Error', 'All fields are required.', 'error');
      return false;
    }
    if (pass.length < 6) {
      addToast('Weak Password', 'Password must be at least 6 characters long.', 'error');
      return false;
    }

    const newUser: UserProfile = {
      id: 'usr_' + Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: '+91 98000 12345',
      bio: 'New student on RWS Tech exploring modern web development and software engineering.',
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`,
      joinedDate: 'March 2026',
      enrolledCourseIds: [],
      completedCourseIds: [],
      learningHours: 0,
      certificatesEarned: 0,
    };

    persistUser(newUser);
    addToast('Account Created!', `Welcome to RWS Tech, ${newUser.name}!`, 'success');
    navigateTo('dashboard', undefined, 'overview');
    return true;
  };

  const logout = () => {
    persistUser(null);
    addToast('Signed Out', 'You have been safely logged out of RWS Tech.', 'info');
    navigateTo('home');
  };

  const loginAsDemoUser = () => {
    persistUser(DEFAULT_USER);
    addToast('Demo Student Loaded', 'Signed in as Aryan Verma with preloaded enrolled courses.', 'success');
    navigateTo('dashboard', undefined, 'overview');
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    if (!currentUser) return;
    const updated = { ...currentUser, ...data };
    persistUser(updated);
    addToast('Profile Updated', 'Your profile details were saved successfully.', 'success');
  };

  const initiatePurchase = (courseId: string) => {
    setSelectedCourseId(courseId);
    navigateTo('purchase', courseId);
  };

  const submitPaymentVerification = (
    courseId: string,
    method: PaymentMethod,
    userEmail: string,
    utrNumber: string
  ): PaymentRecord => {
    const course = COURSES_DATA.find((c) => c.id === courseId);
    const newRecord: PaymentRecord = {
      id: 'TXN-RWS-' + Math.floor(100000 + Math.random() * 900000),
      courseId,
      courseName: course?.title || 'Selected Course',
      courseImage: course?.image || '',
      amount: course?.fee || 1999,
      paymentMethod: method,
      upiId: method === 'UPI' ? 'rwstech.pay@okhdfcbank' : method === 'PhonePe' ? 'rwstech@ybl' : 'rwstech@paytm',
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Pending',
      utrNumber: utrNumber || 'UTR-' + Math.floor(100000000000 + Math.random() * 900000000000),
      userEmail,
      notes: 'Payment submitted by student. Awaiting gateway/banking reconciliation verification.',
    };

    const nextPayments = [newRecord, ...payments];
    persistPayments(nextPayments);

    addToast(
      'Payment Submitted (Pending)',
      `Your transaction ref ${newRecord.id} is pending verification. It will show in your Payment History.`,
      'warning'
    );

    return newRecord;
  };

  const updatePaymentStatus = (paymentId: string, newStatus: PaymentStatus) => {
    const updated = payments.map((p) => {
      if (p.id === paymentId) {
        return {
          ...p,
          status: newStatus,
          notes:
            newStatus === 'Successful'
              ? 'Payment reconciled successfully via banking gateway.'
              : newStatus === 'Failed'
              ? 'Payment reconciliation failed or invalid UTR reference.'
              : newStatus === 'Expired'
              ? 'Payment session expired before completion.'
              : p.notes,
        };
      }
      return p;
    });
    persistPayments(updated);

    // If successful, automatically enroll the user in that course!
    const target = updated.find((p) => p.id === paymentId);
    if (newStatus === 'Successful' && target && currentUser) {
      if (!currentUser.enrolledCourseIds.includes(target.courseId)) {
        const nextUser = {
          ...currentUser,
          enrolledCourseIds: [...currentUser.enrolledCourseIds, target.courseId],
        };
        persistUser(nextUser);
      }
      if (userProgress[target.courseId] === undefined) {
        persistProgress({ ...userProgress, [target.courseId]: 0 });
      }
      addToast('Course Unlocked!', `Access granted to "${target.courseName}". Happy learning!`, 'success');
    } else {
      addToast('Status Updated', `Transaction ${paymentId} updated to ${newStatus}.`, 'info');
    }
  };

  const updateCourseProgress = (courseId: string, percentage: number) => {
    const next = { ...userProgress, [courseId]: Math.min(100, Math.max(0, percentage)) };
    persistProgress(next);

    if (percentage >= 100 && currentUser && !currentUser.completedCourseIds.includes(courseId)) {
      persistUser({
        ...currentUser,
        completedCourseIds: [...currentUser.completedCourseIds, courseId],
        certificatesEarned: currentUser.certificatesEarned + 1,
      });
      addToast('Course Completed!', 'Congratulations on completing the course! Certificate ready in Profile.', 'success');
    }
  };

  const activePendingPayment = payments.find((p) => p.status === 'Pending') || null;

  return (
    <AppContext.Provider
      value={{
        activePage,
        selectedCourseId,
        selectedCourse,
        selectedDashboardTab,
        navigateTo,
        setSelectedDashboardTab,
        currentUser,
        login,
        register,
        logout,
        updateProfile,
        loginAsDemoUser,
        payments,
        activePendingPayment,
        initiatePurchase,
        submitPaymentVerification,
        updatePaymentStatus,
        userProgress,
        activeLearningCourse,
        setActiveLearningCourse,
        updateCourseProgress,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
