const roundingList = [
  {
    name: 'Jane Doe',
    id: 'P-10293',
    location: 'CVC 3A · 312',
    acuity: 'High',
    primaryProblem: 'NSTEMI',
  },
  {
    name: 'Carlos Rivera',
    id: 'P-11008',
    location: 'Med/Surg 5B · 521',
    acuity: 'Medium',
    primaryProblem: 'CHF exacerbation',
  },
]

export function DoctorConsole() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Doctor console</h2>
          <p className="mt-1 text-sm text-slate-500">
            Lightweight view for daily rounding, orders, and clinical documentation.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
            Attending: Dr. Alex Doe
          </span>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Rounding list</h3>
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-100">
              <table className="min-w-full divide-y divide-slate-100 text-sm">
                <thead className="bg-slate-50/60 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-3 py-2 text-left">Patient</th>
                    <th className="px-3 py-2 text-left">Location</th>
                    <th className="px-3 py-2 text-left">Primary problem</th>
                    <th className="px-3 py-2 text-left">Acuity</th>
                    <th className="px-3 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white/60">
                  {roundingList.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/80">
                      <td className="px-3 py-2 text-sm">
                        <div className="font-medium text-slate-900">{p.name}</div>
                        <div className="text-xs text-slate-500">{p.id}</div>
                      </td>
                      <td className="px-3 py-2 text-xs text-slate-600">{p.location}</td>
                      <td className="px-3 py-2 text-xs text-slate-600">{p.primaryProblem}</td>
                      <td className="px-3 py-2 text-xs">
                        <span
                          className={[
                            'rounded-full px-2 py-1 font-medium',
                            p.acuity === 'High' && 'bg-rose-50 text-rose-700',
                            p.acuity === 'Medium' && 'bg-amber-50 text-amber-700',
                            p.acuity === 'Low' && 'bg-emerald-50 text-emerald-700',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        >
                          {p.acuity}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-xs">
                        <button className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white hover:bg-slate-800">
                          Open chart
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <form className="space-y-3 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Progress note shell</h3>
            <p className="text-xs text-slate-500">
              Common subjective/objective/assessment/plan sections. In a real HIPAA environment notes would be stored
              securely with full audit trails.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-slate-600">Encounter date</label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 focus:border-brand-500 focus:ring-2"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">Attending / service</label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
                  placeholder="e.g. Cardiology – Dr. Doe"
                />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-slate-600">Subjective</label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
                  placeholder="Patient reports..."
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">Objective</label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
                  placeholder="Vital signs, labs, imaging..."
                />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-slate-600">Assessment</label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
                  placeholder="Problem-based assessment..."
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">Plan</label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
                  placeholder="Medications, labs, consults..."
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Discard
              </button>
              <button
                type="button"
                className="rounded-full bg-brand-600 px-4 py-1.5 text-xs font-medium text-white shadow-soft hover:bg-brand-700"
              >
                Sign note
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Key vitals & labs</h3>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="rounded-lg bg-slate-50 px-3 py-2">
                <dt className="text-[11px] uppercase tracking-wide text-slate-500">BP (latest)</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">118/72</dd>
              </div>
              <div className="rounded-lg bg-slate-50 px-3 py-2">
                <dt className="text-[11px] uppercase tracking-wide text-slate-500">HR</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">78 bpm</dd>
              </div>
              <div className="rounded-lg bg-slate-50 px-3 py-2">
                <dt className="text-[11px] uppercase tracking-wide text-slate-500">Creatinine</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">0.9 mg/dL</dd>
              </div>
              <div className="rounded-lg bg-slate-50 px-3 py-2">
                <dt className="text-[11px] uppercase tracking-wide text-slate-500">Hgb A1c</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">7.1%</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-900">Order shortcuts</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <button className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white hover:bg-slate-800">
                Admission orders
              </button>
              <button className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 hover:bg-slate-200">
                Daily labs
              </button>
              <button className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 hover:bg-slate-200">
                Cardiology consult
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

