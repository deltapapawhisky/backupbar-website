import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function TermsPage() {
  return (
    <>
      <Navbar showFullNav={false} />

      <main id="main-content" className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* ── Header ────────────────────────────────────── */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Effective date: March 2026
            </p>
          </div>

          {/* ── Content ───────────────────────────────────── */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Acceptance of Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                By downloading, installing, or using Backup Bar, you
                agree to be bound by these Terms of Service. If you do not
                agree to these terms, do not use the software.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                License
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Backup Bar is free and open source software released
                under the MIT License. You may use, copy, modify, merge,
                publish, distribute, sublicense, and/or sell copies of the
                software, subject to the conditions of the MIT License.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                The Software
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Backup Bar is a macOS menu bar application that
                monitors Time Machine backup status and displays information
                to the user. The software is provided as-is and is intended to
                help users understand when it is safe to disconnect their
                backup drives.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                System Access
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The app requires Full Disk Access to function optimally. By
                granting this permission, you authorize the app to read Time
                Machine status information from system commands. The app does
                not access, modify, or delete any of your personal files,
                documents, or other data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                No Warranty
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The software is provided &ldquo;as is&rdquo;, without warranty
                of any kind, express or implied, including but not limited to
                the warranties of merchantability, fitness for a particular
                purpose, and noninfringement. We do not guarantee that the
                software will be error-free, uninterrupted, or free of harmful
                components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Limitation of Liability
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                In no event shall the developers or contributors be liable for
                any direct, indirect, incidental, special, exemplary, or
                consequential damages (including, but not limited to, loss of
                data, procurement of substitute goods or services, or business
                interruption) arising from the use or inability to use the
                software, even if advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Data and Privacy
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                For information about how the app handles data, please see
                our{' '}
                <Link
                  href="/privacy"
                  className="text-safe-600 dark:text-safe-400 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Changes to These Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We reserve the right to modify these terms at any time.
                Changes will be posted on this page with an updated effective
                date. Continued use of the software after changes are posted
                constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Governing Law
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                These terms shall be governed by and construed in accordance
                with the laws of Sweden, without regard to its conflict of law
                provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Contact
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Questions about these terms can be directed to our{' '}
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
