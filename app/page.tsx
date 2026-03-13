import Link from 'next/link'
import {
  Activity,
  Info,
  PlayCircle,
  Bell,
  Power,
  Feather,
  Download,
  ExternalLink,
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LEDIndicator } from '@/components/LEDIndicator'
import { MenuBarMockup } from '@/components/MenuBarMockup'

const steps = [
  {
    number: '1',
    title: 'Install the app',
    description: 'Download and drop it into Applications.',
  },
  {
    number: '2',
    title: 'Check the menu bar',
    description: 'A small LED appears in your menu bar.',
  },
  {
    number: '3',
    title: 'Green means go',
    description:
      'When the LED is green, it\u2019s safe to disconnect your backup drive.',
  },
]

const features = [
  {
    icon: Activity,
    title: 'LED Status',
    description:
      'Green or red LED in your menu bar. One glance tells you everything.',
  },
  {
    icon: Info,
    title: 'Backup Details',
    description:
      'Click the LED to see progress, last backup time, next scheduled backup, and storage info.',
  },
  {
    icon: PlayCircle,
    title: 'Back Up Now',
    description: 'Trigger a manual backup anytime with one click.',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Get notified when backups complete or fail.',
  },
  {
    icon: Power,
    title: 'Launch at Login',
    description:
      'Set it and forget it. Starts automatically with your Mac.',
  },
  {
    icon: Feather,
    title: 'Lightweight',
    description:
      'Lives in the menu bar only. No dock icon, no windows, no clutter.',
  },
]

const faqs = [
  {
    question: 'What does Full Disk Access do?',
    answer:
      'Full Disk Access lets the app read detailed backup information from tmutil. Without it, the app still works but with limited information about your backup status.',
  },
  {
    question: 'Does it work with APFS snapshots?',
    answer:
      'Yes. It monitors both local APFS snapshots and external Time Machine backups.',
  },
  {
    question: 'Is it really free?',
    answer:
      'Yes. Backup Bar is free and open source under the MIT license.',
  },
  {
    question: 'What macOS versions are supported?',
    answer: 'macOS 13 (Ventura) and later.',
  },
  {
    question: 'Does it work with network backup destinations?',
    answer:
      'Yes. It monitors whatever Time Machine is configured to use, including network drives and NAS devices.',
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar showFullNav={true} />

      <main id="main-content">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Know When It&apos;s{' '}
              <span className="gradient-text">Safe</span> to Disconnect
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
              A lightweight macOS menu bar app that monitors your Time Machine
              backups. Green means safe, red means wait.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/download"
                className="bg-safe-600 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-safe-700 transition-colors flex items-center gap-2.5 shadow-lg shadow-safe-600/20"
              >
                <Download className="w-5 h-5" />
                Download
              </Link>
              <a
                href="https://github.com/deltapapawhisky/TimeMachineMonitor"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2.5"
              >
                <ExternalLink className="w-5 h-5" />
                View on GitHub
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-safe-50 dark:bg-safe-900/20 text-safe-700 dark:text-safe-400 border border-safe-200 dark:border-safe-800">
                Free &amp; Open Source
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                macOS 13+
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                Menu Bar App
              </span>
            </div>

            {/* Menu Bar Mockup */}
            <MenuBarMockup />
          </div>
        </section>

        {/* ── How It Works ────────────────────────────────── */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
              Three steps. No configuration needed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-safe-100 dark:bg-safe-900/30 text-safe-700 dark:text-safe-400 flex items-center justify-center text-lg font-bold mx-auto mb-5">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ────────────────────────────────────── */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
              Features
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
              Everything you need, nothing you don&apos;t.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-safe-50 dark:bg-safe-900/20 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-safe-600 dark:text-safe-400" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── LED Explainer ───────────────────────────────── */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
              What the LED Means
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
              One indicator, two states. No guessing required.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Green */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 text-center shadow-sm">
                <div className="flex justify-center mb-6">
                  <LEDIndicator color="green" size="xl" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Safe to Disconnect
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                  No backup is running. You can safely eject your external drive
                  or disconnect from your network backup destination.
                </p>
              </div>

              {/* Red */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 text-center shadow-sm">
                <div className="flex justify-center mb-6">
                  <LEDIndicator color="red" size="xl" pulse={true} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Backup in Progress
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                  Time Machine is actively writing data. Wait for the LED to
                  turn green before disconnecting to avoid incomplete backups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────── */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
              Quick answers to common questions.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6"
                >
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Download CTA ───────────────────────────────── */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-safe-600 to-safe-700 rounded-3xl px-8 py-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to stop guessing?
              </h2>
              <p className="text-lg text-safe-100 mb-10 max-w-lg mx-auto">
                Download Backup Bar for free.
              </p>
              <Link
                href="/download"
                className="inline-flex items-center gap-2.5 bg-white text-safe-700 px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-safe-50 transition-colors shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download for macOS
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
