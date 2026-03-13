'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { LEDIndicator } from './LEDIndicator'

interface NavbarProps {
  showFullNav?: boolean
}

export function Navbar({ showFullNav = true }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <LEDIndicator color="green" size="sm" />
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              Backup Bar
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {showFullNav ? (
              <>
                <Link href="/#features" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="/guide" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Guide
                </Link>
                <Link href="/support" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Support
                </Link>
              </>
            ) : (
              <Link href="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Home
              </Link>
            )}
            <ThemeToggle />
            <Link
              href="/download"
              className="bg-safe-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-safe-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {showFullNav ? (
                <>
                  <Link href="/#features" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-2 py-1">
                    Features
                  </Link>
                  <Link href="/guide" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-2 py-1">
                    Guide
                  </Link>
                  <Link href="/support" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-2 py-1">
                    Support
                  </Link>
                </>
              ) : (
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-2 py-1">
                  Home
                </Link>
              )}
              <Link
                href="/download"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-safe-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-safe-700 transition-colors flex items-center gap-2 w-fit"
              >
                <Download className="w-4 h-4" />
                Download
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
