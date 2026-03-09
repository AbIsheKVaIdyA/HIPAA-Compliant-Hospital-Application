const cards = [
  { label: 'Admitted patients', value: '42', trend: '+6 today', tone: 'text-brand-700 bg-brand-50' },
  { label: 'ED waiting', value: '7', trend: 'avg 21 min', tone: 'text-amber-700 bg-amber-50' },
  { label: 'Discharges planned', value: '12', trend: 'next 24 hrs', tone: 'text-emerald-700 bg-emerald-50' },
]

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Operational overview</h2>
        <p className="mt-1 text-sm text-slate-500">
          Single view across inpatient, ED, and outpatient activity. Inspired by modern EHRs like Oystehr and HygieaEMR.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/30 backdrop-blur"
          >
            <p className="text-xs font-medium text-slate-500">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{card.value}</p>
            <p className={`mt-1 text-xs font-medium inline-flex rounded-full px-2 py-1 ${card.tone}`}>
              {card.trend}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Today&apos;s scheduled encounters</h3>
              <p className="mt-1 text-xs text-slate-500">
                Mix of inpatient rounding, ED follow-ups, and virtual visits.
              </p>
            </div>
            <button className="rounded-full bg-brand-600 px-3 py-1 text-xs font-medium text-white shadow-soft hover:bg-brand-700">
              New appointment
            </button>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
            <table className="min-w-full divide-y divide-slate-100 text-sm">
              <thead className="bg-slate-50/60 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-3 py-2 text-left">Time</th>
                  <th className="px-3 py-2 text-left">Patient</th>
                  <th className="px-3 py-2 text-left">Service</th>
                  <th className="px-3 py-2 text-left">Location</th>
                  <th className="px-3 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white/60">
                <tr>
                  <td className="px-3 py-2 text-xs text-slate-600">08:30</td>
                  <td className="px-3 py-2 text-sm font-medium text-slate-900">Jane Doe</td>
                  <td className="px-3 py-2 text-xs text-slate-600">Cardiology follow-up</td>
                  <td className="px-3 py-2 text-xs text-slate-600">CVC 3A · Room 312</td>
                  <td className="px-3 py-2 text-xs">
                    <span className="rounded-full bg-emerald-50 px-2 py-1 font-medium text-emerald-700">
                      Checked in
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs text-slate-600">09:15</td>
                  <td className="px-3 py-2 text-sm font-medium text-slate-900">Michael Smith</td>
                  <td className="px-3 py-2 text-xs text-slate-600">ED return visit</td>
                  <td className="px-3 py-2 text-xs text-slate-600">ED Pod B</td>
                  <td className="px-3 py-2 text-xs">
                    <span className="rounded-full bg-amber-50 px-2 py-1 font-medium text-amber-700">
                      Waiting triage
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs text-slate-600">10:00</td>
                  <td className="px-3 py-2 text-sm font-medium text-slate-900">Amina Patel</td>
                  <td className="px-3 py-2 text-xs text-slate-600">Virtual diabetes education</td>
                  <td className="px-3 py-2 text-xs text-slate-600">Telehealth</td>
                  <td className="px-3 py-2 text-xs">
                    <span className="rounded-full bg-slate-50 px-2 py-1 font-medium text-slate-700">
                      Not started
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Clinical alerts</h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2 rounded-lg bg-amber-50 px-3 py-2">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-500" />
                <span>
                  3 patients with critical labs not yet acknowledged.{' '}
                  <button className="font-semibold text-amber-800 underline-offset-2 hover:underline">
                    Review now
                  </button>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-brand-500" />
                <span>New telemetry events feed available for Cardiology service.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">HIPAA-readiness notes</h3>
            <p className="mt-2 text-xs text-slate-600">
              UI only, no real PHI or authentication. In the next phase we&apos;ll add proper user roles, audit
              trails, and encryption aligned with HIPAA guidance.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

