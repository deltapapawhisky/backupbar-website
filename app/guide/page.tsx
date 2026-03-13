'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Download,
  Shield,
  CircleDot,
  LayoutList,
  PlayCircle,
  Bell,
  Power,
  Wrench,
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LEDIndicator } from '@/components/LEDIndicator'

const sidebarSections = [
  { id: 'getting-started', label: 'Getting Started', icon: Download },
  { id: 'full-disk-access', label: 'Full Disk Access', icon: Shield },
  { id: 'understanding-the-led', label: 'Understanding the LED', icon: CircleDot },
  { id: 'backup-details', label: 'Backup Details', icon: LayoutList },
  { id: 'back-up-now', label: 'Back Up Now', icon: PlayCircle },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'launch-at-login', label: 'Launch at Login', icon: Power },
  { id: 'troubleshooting', label: 'Troubleshooting', icon: Wrench },
]

export default function GuidePage() {
  const [activeSection, setActiveSection] = useState('getting-started')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sidebarSections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { rootMargin: '-20% 0px -60% 0px' }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  return (
    <>
      <Navbar showFullNav={false} />

      <main id="main-content" className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              User Guide
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Everything you need to know about using Backup Bar.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
            {/* Sidebar Navigation */}
            <aside className="md:w-56 lg:w-64 shrink-0">
              <nav className="md:sticky md:top-24">
                <ul className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 -mx-2 px-2 md:mx-0 md:px-0">
                  {sidebarSections.map(({ id, label, icon: Icon }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                          activeSection === id
                            ? 'bg-safe-100 dark:bg-safe-900/30 text-safe-700 dark:text-safe-400'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content Sections */}
            <div className="flex-1 min-w-0 space-y-20">
              {/* Getting Started */}
              <section id="getting-started">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Getting Started
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Get up and running in under a minute. Backup Bar is designed to stay out of your way while keeping you informed.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-safe-100 dark:bg-safe-900/40 text-safe-700 dark:text-safe-400 text-sm font-bold shrink-0">
                        1
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 pt-0.5">
                        <Link href="/download" className="text-safe-600 dark:text-safe-400 font-medium hover:underline underline-offset-4">Download</Link> Backup Bar from the releases page.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-safe-100 dark:bg-safe-900/40 text-safe-700 dark:text-safe-400 text-sm font-bold shrink-0">
                        2
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 pt-0.5">
                        Open the DMG and drag the app to your Applications folder.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-safe-100 dark:bg-safe-900/40 text-safe-700 dark:text-safe-400 text-sm font-bold shrink-0">
                        3
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 pt-0.5">
                        Grant Full Disk Access for the best experience (see the <a href="#full-disk-access" className="text-safe-600 dark:text-safe-400 font-medium hover:underline underline-offset-4">section below</a>).
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-safe-100 dark:bg-safe-900/40 text-safe-700 dark:text-safe-400 text-sm font-bold shrink-0">
                        4
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 pt-0.5">
                        Launch the app. A small LED indicator appears in your menu bar &mdash; that&apos;s it!
                      </p>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Full Disk Access */}
              <section id="full-disk-access">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Full Disk Access
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Full Disk Access is the single permission that unlocks all of Backup Bar&apos;s features. It allows the app to query <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-sm font-mono">tmutil</code> for detailed backup data.
                </p>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 mb-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                    How to grant Full Disk Access
                  </h3>
                  <ol className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-safe-600 dark:text-safe-400 shrink-0">1.</span>
                      Open <span className="font-semibold">System Settings</span>.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-safe-600 dark:text-safe-400 shrink-0">2.</span>
                      Navigate to <span className="font-semibold">Privacy &amp; Security</span> &gt; <span className="font-semibold">Full Disk Access</span>.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-safe-600 dark:text-safe-400 shrink-0">3.</span>
                      Find <span className="font-semibold">Backup Bar</span> in the list and toggle it on.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-safe-600 dark:text-safe-400 shrink-0">4.</span>
                      If prompted, enter your password to confirm.
                    </li>
                  </ol>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                    What degrades without Full Disk Access?
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-danger-500 shrink-0">&bull;</span>
                      Backup history is limited &mdash; only the most recent backup is available.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-danger-500 shrink-0">&bull;</span>
                      Storage details (space used, available capacity) are unavailable.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-danger-500 shrink-0">&bull;</span>
                      Destination disk information may be incomplete.
                    </li>
                  </ul>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                    The core LED indicator (green/red) always works, regardless of this permission.
                  </p>
                </div>
              </section>

              {/* Understanding the LED */}
              <section id="understanding-the-led">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Understanding the LED
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  The LED indicator in your menu bar communicates backup status at a glance. There are two states:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-4">
                      <LEDIndicator color="green" size="md" />
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Green &mdash; Safe
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      No backup is currently running. It is safe to disconnect your backup drive, eject external disks, or shut down your Mac.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-4">
                      <LEDIndicator color="red" size="md" pulse />
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Red &mdash; Backup in Progress
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      A Time Machine backup is actively running. Do not disconnect your backup drive or shut down your Mac until the LED turns green.
                    </p>
                  </div>
                </div>
              </section>

              {/* Backup Details */}
              <section id="backup-details">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Backup Details
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Click the LED in your menu bar to open a dropdown with detailed backup information:
                </p>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-slate-900 dark:text-white shrink-0 w-44">Current Status</span>
                      Whether a backup is idle, preparing, in progress, or completing.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-slate-900 dark:text-white shrink-0 w-44">Progress</span>
                      A percentage and progress bar shown during active backups.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-slate-900 dark:text-white shrink-0 w-44">Last Backup</span>
                      The date and time of the most recent completed backup.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-slate-900 dark:text-white shrink-0 w-44">Next Backup</span>
                      An estimate of when the next scheduled backup will start.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-slate-900 dark:text-white shrink-0 w-44">Destination</span>
                      The name and type of your backup drive.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-slate-900 dark:text-white shrink-0 w-44">Storage</span>
                      A visual bar showing used vs. available space on your backup drive.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-slate-900 dark:text-white shrink-0 w-44">Recent History</span>
                      The last 3 completed backups with their timestamps.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Back Up Now */}
              <section id="back-up-now">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Back Up Now
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  You can trigger a manual Time Machine backup directly from the menu bar without opening System Settings.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <ol className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-safe-600 dark:text-safe-400 shrink-0">1.</span>
                      Click the LED indicator in your menu bar to open the dropdown.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-safe-600 dark:text-safe-400 shrink-0">2.</span>
                      Click the <span className="font-semibold">Back Up Now</span> button.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-safe-600 dark:text-safe-400 shrink-0">3.</span>
                      The LED turns red and the dropdown shows progress as the backup runs.
                    </li>
                  </ol>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                    Make sure your backup drive is connected before triggering a manual backup.
                  </p>
                </div>
              </section>

              {/* Notifications */}
              <section id="notifications">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Notifications
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Backup Bar can send macOS notifications to keep you informed even when you&apos;re not looking at the menu bar.
                </p>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 mb-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Notification types
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-safe-400 mt-1.5 shrink-0" />
                      <div>
                        <span className="font-semibold">Backup Completed</span> &mdash; sent when a backup finishes successfully.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-danger-400 mt-1.5 shrink-0" />
                      <div>
                        <span className="font-semibold">Backup Failed</span> &mdash; sent when a backup encounters an error, so you can investigate.
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  You can toggle notifications on or off from the preferences section in the dropdown menu.
                </p>
              </section>

              {/* Launch at Login */}
              <section id="launch-at-login">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Launch at Login
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  For continuous monitoring, you can configure Backup Bar to start automatically when you log in to your Mac.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <ol className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-safe-600 dark:text-safe-400 shrink-0">1.</span>
                      Click the LED indicator in your menu bar to open the dropdown.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-safe-600 dark:text-safe-400 shrink-0">2.</span>
                      In the preferences section, toggle <span className="font-semibold">Launch at Login</span> on or off.
                    </li>
                  </ol>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                    When enabled, the app launches silently in the background and appears in your menu bar. No windows are opened.
                  </p>
                </div>
              </section>

              {/* Troubleshooting */}
              <section id="troubleshooting">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Troubleshooting
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Common issues and how to resolve them.
                </p>

                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      LED not appearing in the menu bar
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      The app may not be running, or may be hidden by other menu bar items.
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        Check Activity Monitor to confirm the app is running.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        If it is not running, open it from your Applications folder.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        If your menu bar is crowded, try holding <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-xs font-mono">Command</kbd> and dragging items to reorder.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Full Disk Access warning banner
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      The dropdown shows a banner asking you to grant Full Disk Access.
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        Follow the steps in the <a href="#full-disk-access" className="text-safe-600 dark:text-safe-400 font-medium hover:underline underline-offset-4">Full Disk Access</a> section above.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        After granting access, restart the app for changes to take effect.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Backup not being detected
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      The LED stays green even when you expect a backup to be running.
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        Open <span className="font-semibold">System Settings</span> &gt; <span className="font-semibold">General</span> &gt; <span className="font-semibold">Time Machine</span> and verify that Time Machine is enabled.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        Confirm your backup drive is connected and mounted.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        Try triggering a manual backup with the <span className="font-semibold">Back Up Now</span> button to see if the LED changes.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      App not updating status
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      The LED or dropdown information seems stale or frozen.
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        Quit the app (click the LED, then select <span className="font-semibold">Quit</span> from the dropdown).
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        Relaunch it from your Applications folder.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-safe-500 shrink-0">&bull;</span>
                        If the issue persists, check that Full Disk Access is still enabled, as macOS updates can sometimes reset permissions.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer compact />
    </>
  )
}
