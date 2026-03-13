import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Navbar showFullNav={false} />

      <main id="main-content" className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* ── Header ────────────────────────────────────── */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Last updated: March 2026
            </p>
          </div>

          {/* ── Content ───────────────────────────────────── */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Overview
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Backup Bar is a privacy-first, offline macOS
                application. It does not collect, store, or transmit personal
                data. Your privacy is fundamental to the design of this app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Information We Don&apos;t Collect
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Backup Bar includes no analytics, no tracking, no
                telemetry, no crash reporting, and no personal data collection
                of any kind within the app. We do not know who uses the app,
                how often it is used, or any details about your system or
                backups.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Local Data Only
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                All data stays on your Mac. The app reads Time Machine status
                from system commands (tmutil) and displays it locally in your
                menu bar. Nothing leaves your computer. No data is sent to our
                servers or any third party.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Full Disk Access
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The app requests Full Disk Access to read backup information
                from macOS system tools. This permission is used solely for
                reading Time Machine status and is never used to access
                personal files, documents, or other data on your computer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Update Checks
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The app checks for updates via the GitHub API. This sends a
                standard HTTPS request to GitHub&apos;s servers, which may log
                your IP address per GitHub&apos;s own privacy policy. No
                personal information is included in update requests.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Website
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                This website may use basic, privacy-respecting analytics to
                understand general traffic patterns. No cookies are used for
                tracking, and no personally identifiable information is
                collected through the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Your Rights
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Under GDPR, CCPA, and similar regulations, you have rights
                regarding your personal data. Since the app collects no
                personal data, these rights are inherently satisfied. There is
                nothing to access, correct, delete, or export because nothing
                is collected.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Changes to This Policy
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We may update this privacy policy from time to time. Any
                changes will be posted on this page with an updated revision
                date. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Contact
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                If you have questions about this privacy policy, please reach
                out through our{' '}
                <Link
                  href="/support"
                  className="text-safe-600 dark:text-safe-400 hover:underline"
                >
                  support page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer compact />
    </>
  )
}
