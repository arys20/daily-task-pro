'use client';

import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import PWAInstallPrompt from '@/components/PWA/PWAInstallPrompt';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Register PWA service worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.log('SW registration failed:', err);
      });
    }
  }, []);

  if (!mounted) return null;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Daily Task Pro - Premium task management with gamification" />
        <meta name="theme-color" content="#0066FF" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <PWAInstallPrompt />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
