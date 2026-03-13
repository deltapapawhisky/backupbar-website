import Image from 'next/image'
import Link from 'next/link'
import { LEDIndicator } from './LEDIndicator'

interface FooterProps {
  compact?: boolean
}

export function Footer({ compact = false }: FooterProps) {
  if (compact) {
    return (
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <a href="https://danielwhite.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
            <span className="relative w-6 h-6 shrink-0 rounded-full overflow-hidden">
              <Image src="/daniel.jpg" alt="Daniel White" fill className="object-cover object-[center_0%] scale-[1.8]" />
            </span>
            Created by Daniel White
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Backup Bar. Free and open source.
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <LEDIndicator color="green" size="sm" />
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Backup Bar
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              A lightweight macOS menu bar utility that tells you when it&apos;s safe to disconnect your backup drive.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4">
              Requires macOS 13 (Ventura) or later.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/download" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  User Guide
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/support" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="https://buymeacoffee.com/danielwhite" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Buy Me a Coffee
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 flex flex-col items-center gap-4">
          <a href="https://danielwhite.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
            <span className="relative w-7 h-7 shrink-0 rounded-full overflow-hidden">
              <Image src="/daniel.jpg" alt="Daniel White" fill className="object-cover object-[center_0%] scale-[1.8]" />
            </span>
            Created by Daniel White
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Backup Bar. Free and open source.
          </p>
        </div>
      </div>
    </footer>
  )
}
