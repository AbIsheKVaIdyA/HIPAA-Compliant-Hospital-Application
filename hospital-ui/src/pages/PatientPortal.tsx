const appointments = [
  { date: 'Today · 3:30 PM', type: 'Cardiology follow-up', location: 'CVC Clinic 2B', status: 'Confirmed' },
  { date: 'Apr 12 · 11:00 AM', type: 'Lab draw', location: 'Main hospital lab', status: 'Scheduled' },
]

export function PatientPortal() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Patient console</h2>
          <p className="mt-1 text-sm text-slate-500">
            A simple view of upcoming visits, education, and secure messaging concepts.
          </p>
        </div>
        <div className="flex flex-col items-end text-xs text-slate-600">
          <span className="font-medium text-slate-900">Signed in as: Jane Doe</span>
          <span className="text-[11px]">Demo-only, no real patient identity here yet.</span>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Upcoming appointments</h3>
            <div className="mt-3 space-y-2">
              {appointments.map((a) => (
                <div
                  key={a.date + a.type}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2 text-sm"
                >
                  <div>
                    <p className="font-medium text-slate-900">{a.type}</p>
                    <p className="text-xs text-slate-600">
                      {a.date} · {a.location}
                    </p>
                  </div>
                  <span
                    className={[
                      'rounded-full px-2 py-1 text-xs font-medium',
                      a.status === 'Confirmed' && 'bg-emerald-50 text-emerald-700',
                      a.status === 'Scheduled' && 'bg-slate-50 text-slate-700',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {a.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Secure message (concept)</h3>
            <p className="mt-1 text-xs text-slate-600">
              In a HIPAA-compliant version, messages would be encrypted end-to-end and logged for compliance.
            </p>
            <form className="mt-3 space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-600">To</label>
                <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 focus:border-brand-500 focus:ring-2">
                  <option>Cardiology care team</option>
                  <option>Primary care clinic</option>
                  <option>Nurse navigator</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">Subject</label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
                  placeholder="e.g. Question about today’s medication changes"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
                  placeholder="Write your question or update for the team..."
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="rounded-full bg-brand-600 px-4 py-1.5 text-xs font-medium text-white shadow-soft hover:bg-brand-700"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Education</h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-600 list-disc pl-4">
              <li>What to expect during your cardiology follow-up visit.</li>
              <li>How to track your blood pressure at home.</li>
              <li>When to call the clinic versus 911.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Privacy reminder</h3>
            <p className="mt-2 text-xs text-slate-600">
              This is a design prototype. Later we&apos;ll connect it to a back end that enforces HIPAA controls:
              authentication, consent management, and protected communication channels.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

