import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Download,
  CheckCircle2,
  AlertTriangle,
  Monitor,
  HardDrive,
  Shield,
  Info,
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Download - Backup Bar',
  description:
    'Download Backup Bar for macOS. Free, open source, and lightweight.',
}

const systemRequirements = [
  {
    icon: Monitor,
    label: 'macOS 13.0+',
    detail: 'Ventura or later',
  },
  {
    icon: HardDrive,
    label: 'Intel & Apple Silicon',
    detail: 'Universal binary',
  },
  {
    icon: Shield,
    label: 'Full Disk Access',
    detail: 'Recommended for full features',
  },
  {
    icon: Info,
    label: '~5 MB disk space',
    detail: 'Lightweight install',
  },
]

const installationSteps = [
  'Download the DMG file from the link above.',
  'Open the downloaded DMG file.',
  'Drag Backup Bar to your Applications folder.',
  'Launch the app \u2014 it appears as a small LED indicator in your menu bar.',
  'Grant Full Disk Access for the best experience (recommended, see below).',
]

export default function DownloadPage() {
  return (
    <>
      <Navbar showFullNav={false} />

      <main id="main-content" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Download Backup Bar
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Free and open source.
            </p>
          </div>

          {/* Download Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 sm:p-10 text-center shadow-sm border border-slate-200 dark:border-slate-700 mb-16">
            <img
              src="/icon-512.png"
              alt="Backup Bar app icon"
              className="w-28 h-28 mx-auto mb-6 rounded-2xl"
            />
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
              Version 1.0.0
            </p>
            <a
              href="https://github.com/deltapapawhisky/backup-bar/releases/latest/download/TimeMachineMonitor-v1.0.app.zip"
              className="inline-flex items-center gap-2.5 bg-safe-600 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-safe-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download for macOS
            </a>
            <div className="mt-4">
              <a
                href="https://github.com/deltapapawhisky/backup-bar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors underline underline-offset-4"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* System Requirements */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              System Requirements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {systemRequirements.map((req) => (
                <div
                  key={req.label}
                  className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-safe-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {req.label}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {req.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Installation Steps */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Installation
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700">
              <ol className="space-y-5">
                {installationSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-safe-100 dark:bg-safe-900/40 text-safe-700 dark:text-safe-400 text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 pt-0.5">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Full Disk Access Setup */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Full Disk Access Setup
            </h2>
            <div className="rounded-2xl p-6 sm:p-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <h3 className="font-semibold text-amber-900 dark:text-amber-200">
                  Recommended: Grant Full Disk Access
                </h3>
              </div>
              <div className="space-y-4 text-sm text-amber-800 dark:text-amber-300 ml-8">
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Open{' '}
                    <span className="font-semibold">System Settings</span>{' '}
                    &gt;{' '}
                    <span className="font-semibold">
                      Privacy &amp; Security
                    </span>{' '}
                    &gt;{' '}
                    <span className="font-semibold">Full Disk Access</span>.
                  </li>
                  <li>
                    Find{' '}
                    <span className="font-semibold">
                      Backup Bar
                    </span>{' '}
                    in the list and toggle it on.
                  </li>
                </ol>
                <div className="pt-2 space-y-2">
                  <p>
                    <span className="font-semibold">Why?</span> Full Disk
                    Access allows the app to read detailed backup information
                    from <code className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 text-xs font-mono">tmutil</code>,
                    including backup history, storage details, and progress
                    data.
                  </p>
                  <p>
                    <span className="font-semibold">Without it:</span> The app
                    still shows basic backup status (green/red LED), but with
                    limited detail in the dropdown menu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gatekeeper Notice */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Opening for the First Time
            </h2>
            <div className="rounded-2xl p-6 sm:p-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <h3 className="font-semibold text-amber-900 dark:text-amber-200">
                  macOS Gatekeeper Notice
                </h3>
              </div>
              <div className="space-y-3 text-sm text-amber-800 dark:text-amber-300 ml-8">
                <p>
                  Since Backup Bar is downloaded from the internet
                  and not distributed through the Mac App Store, macOS may
                  show a warning the first time you open it.
                </p>
                <p className="font-semibold">To open the app:</p>
                <ul className="list-disc list-inside space-y-1.5">
                  <li>
                    <span className="font-semibold">Option A:</span>{' '}
                    Right-click (or Control-click) the app in your
                    Applications folder and select{' '}
                    <span className="font-semibold">Open</span>. Click{' '}
                    <span className="font-semibold">Open</span> again in the
                    dialog that appears.
                  </li>
                  <li>
                    <span className="font-semibold">Option B:</span> Go to{' '}
                    <span className="font-semibold">System Settings</span>{' '}
                    &gt;{' '}
                    <span className="font-semibold">
                      Privacy &amp; Security
                    </span>
                    , scroll down, and click{' '}
                    <span className="font-semibold">Open Anyway</span> next to
                    the Backup Bar message.
                  </li>
                </ul>
                <p>You only need to do this once.</p>
              </div>
            </div>
          </section>

          {/* Release Notes */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Release Notes
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-safe-100 dark:bg-safe-900/40 text-safe-700 dark:text-safe-400">
                  v1.0.0
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Initial Release
                </span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safe-500 mt-0.5 shrink-0" />
                  Menu bar LED indicator: green when safe, red during backups
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safe-500 mt-0.5 shrink-0" />
                  Dropdown with backup status, progress, history, and storage details
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safe-500 mt-0.5 shrink-0" />
                  Back Up Now: trigger a manual backup from the menu bar
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safe-500 mt-0.5 shrink-0" />
                  Notifications for backup completed and backup failed
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safe-500 mt-0.5 shrink-0" />
                  Launch at Login support
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safe-500 mt-0.5 shrink-0" />
                  Universal binary: Intel and Apple Silicon
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer compact />
    </>
  )
}
