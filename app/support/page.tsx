import Link from 'next/link'
import { BookOpen, Mail, MessageSquare } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const faqs = [
  {
    question: 'Why does Backup Bar need Full Disk Access?',
    answer:
      'Full Disk Access allows the app to read detailed backup information from the tmutil system command. Without it, the app still works but shows limited backup status details.',
  },
  {
    question: 'The LED is stuck on red. What should I do?',
    answer:
      'A persistent red LED usually means a backup is still running or has stalled. Open the popover to check backup progress. If the backup appears stuck, try restarting Time Machine from System Settings.',
  },
  {
    question: 'Can I use Backup Bar with multiple backup destinations?',
    answer:
      'Yes. The app monitors whatever Time Machine is configured to use, including multiple destinations, network drives, and NAS devices.',
  },
  {
    question: 'How do I uninstall the app?',
    answer:
      'Quit Backup Bar from the menu bar, then drag it from your Applications folder to the Trash. The app stores no data outside its own bundle, so nothing else needs to be cleaned up.',
  },
]

export default function SupportPage() {
  return (
    <>
      <Navbar showFullNav={false} />

      <main id="main-content" className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* ── Header ────────────────────────────────────── */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Support
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Need help? We&apos;re here for you.
            </p>
          </div>

          {/* ── Support Options ───────────────────────────── */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Link
              href="/guide"
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-safe-50 dark:bg-safe-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-safe-600 dark:text-safe-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                User Guide
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Read the documentation
              </p>
            </Link>

            <a
              href="https://github.com/deltapapawhisky/TimeMachineMonitor/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-7 h-7 text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                GitHub Issues
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Report bugs or request features
              </p>
            </a>

            <a
              href="mailto:d@nielwhite.com"
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-safe-50 dark:bg-safe-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-safe-600 dark:text-safe-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Email Support
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Get in touch directly
              </p>
            </a>
          </div>

          {/* ── FAQ ───────────────────────────────────────── */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer compact />
    </>
  )
}
