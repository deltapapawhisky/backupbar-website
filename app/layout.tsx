import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://backupbar.app'),
  title: 'Backup Bar - Know When It\'s Safe to Disconnect',
  description: 'A lightweight macOS menu bar utility that shows you when it\'s safe to disconnect your backup drive. Green means safe, red means wait.',
  keywords: [
    'Time Machine',
    'macOS',
    'backup monitor',
    'menu bar app',
    'Backup Bar',
    'backup status',
    'external drive',
    'disconnect safely',
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Backup Bar - Know When It\'s Safe to Disconnect',
    description: 'A lightweight macOS menu bar utility that shows you when it\'s safe to disconnect your backup drive.',
    url: 'https://backupbar.app',
    siteName: 'Backup Bar',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Backup Bar',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backup Bar',
    description: 'Know when it\'s safe to disconnect your backup drive.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">
        <ThemeProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-safe-600 focus:text-white focus:rounded-lg">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
