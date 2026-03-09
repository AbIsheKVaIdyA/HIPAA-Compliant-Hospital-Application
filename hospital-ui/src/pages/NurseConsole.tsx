const nurseTasks = [
  { time: '08:00', patient: 'Jane Doe', task: 'Morning meds + vitals', status: 'In progress' },
  { time: '09:30', patient: 'Michael Smith', task: 'Pain reassessment', status: 'Pending' },
  { time: '10:15', patient: 'Amina Patel', task: 'Discharge teaching – insulin', status: 'Scheduled' },
]

export function NurseConsole() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Nurse console</h2>
          <p className="mt-1 text-sm text-slate-500">
            Task-oriented view for vitals, medications, and patient education.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-800">
            RN: Taylor Lee · Unit CVC 3A
          </span>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Task list</h3>
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-100">
              <table className="min-w-full divide-y divide-slate-100 text-sm">
                <thead className="bg-slate-50/60 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-3 py-2 text-left">Time</th>
                    <th className="px-3 py-2 text-left">Patient</th>
                    <th className="px-3 py-2 text-left">Task</th>
                    <th className="px-3 py-2 text-left">Status</th>
                    <th className="px-3 py-2 text-left">Complete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white/60">
                  {nurseTasks.map((t) => (
                    <tr key={t.patient + t.time} className="hover:bg-slate-50/80">
                      <td className="px-3 py-2 text-xs text-slate-600">{t.time}</td>
                      <td className="px-3 py-2 text-sm font-medium text-slate-900">{t.patient}</td>
                      <td className="px-3 py-2 text-xs text-slate-600">{t.task}</td>
                      <td className="px-3 py-2 text-xs">
                        <span
                          className={[
                            'rounded-full px-2 py-1 font-medium',
                            t.status === 'In progress' && 'bg-brand-50 text-brand-800',
                            t.status === 'Pending' && 'bg-slate-50 text-slate-700',
                            t.status === 'Scheduled' && 'bg-amber-50 text-amber-700',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        >
                          {t.status}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-xs">
                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-brand-600" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <form className="space-y-3 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Vitals capture</h3>
            <p className="text-xs text-slate-500">
              Example UI for structured vitals documentation; in production this would feed into flowsheets.
            </p>
            <div className="grid gap-3 sm:grid-cols-4">
              <div>
                <label className="text-xs font-medium text-slate-600">Temp (°C)</label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 focus:border-brand-500 focus:ring-2"
                  placeholder="36.7"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">HR (bpm)</label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 focus:border-brand-500 focus:ring-2"
                  placeholder="78"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">BP (mmHg)</label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 focus:border-brand-500 focus:ring-2"
                  placeholder="118/72"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">SpO₂ (%)</label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 focus:border-brand-500 focus:ring-2"
                  placeholder="99"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">Nursing note</label>
              <textarea
                rows={3}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
                placeholder="Patient tolerated activity well..."
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-full bg-brand-600 px-4 py-1.5 text-xs font-medium text-white shadow-soft hover:bg-brand-700"
              >
                Save vitals
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Safety checks</h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-brand-500" />
                <span>2 medication administrations due within the next 30 minutes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-500" />
                <span>1 patient flagged as high fall risk – hourly rounding required.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Handoff notes</h3>
            <p className="mt-2 text-xs text-slate-600">
              Shift-to-shift handoff is a key workflow we can expand later with structured fields and PHI protection
              rules.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

