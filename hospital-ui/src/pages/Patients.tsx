const mockPatients = [
  {
    id: 'P-10293',
    name: 'Jane Doe',
    dob: '1978-03-14',
    mrn: 'MRN-10001',
    location: 'CVC 3A · 312',
    status: 'Inpatient',
    primary: 'Cardiology',
  },
  {
    id: 'P-10421',
    name: 'Michael Smith',
    dob: '1985-11-02',
    mrn: 'MRN-10002',
    location: 'ED Pod B · 07',
    status: 'ED',
    primary: 'Emergency medicine',
  },
  {
    id: 'P-10987',
    name: 'Amina Patel',
    dob: '1992-07-25',
    mrn: 'MRN-10003',
    location: 'Virtual',
    status: 'Outpatient',
    primary: 'Endocrinology',
  },
]

export function Patients() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Patient registry</h2>
          <p className="mt-1 text-sm text-slate-500">
            Central list of patients with key identifiers and current care setting.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            placeholder="Search by name, MRN, or ID"
            className="w-56 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
          />
          <button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
            Filter
          </button>
          <button className="rounded-full bg-brand-600 px-3 py-1.5 text-xs font-medium text-white shadow-soft hover:bg-brand-700">
            New patient
          </button>
        </div>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white/80 shadow-soft/20 backdrop-blur">
        <table className="min-w-full divide-y divide-slate-100 text-sm">
          <thead className="bg-slate-50/60 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-2 text-left">Patient</th>
              <th className="px-3 py-2 text-left">MRN</th>
              <th className="px-3 py-2 text-left">DOB</th>
              <th className="px-3 py-2 text-left">Location</th>
              <th className="px-3 py-2 text-left">Service</th>
              <th className="px-3 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white/60">
            {mockPatients.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50/80">
                <td className="px-3 py-2 text-sm">
                  <div className="font-medium text-slate-900">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.id}</div>
                </td>
                <td className="px-3 py-2 text-xs text-slate-600">{p.mrn}</td>
                <td className="px-3 py-2 text-xs text-slate-600">{p.dob}</td>
                <td className="px-3 py-2 text-xs text-slate-600">{p.location}</td>
                <td className="px-3 py-2 text-xs text-slate-600">{p.primary}</td>
                <td className="px-3 py-2 text-xs">
                  <span
                    className={[
                      'rounded-full px-2 py-1 font-medium',
                      p.status === 'Inpatient' && 'bg-emerald-50 text-emerald-700',
                      p.status === 'ED' && 'bg-amber-50 text-amber-700',
                      p.status === 'Outpatient' && 'bg-slate-50 text-slate-700',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <form className="space-y-3 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
          <h3 className="text-sm font-semibold text-slate-900">Quick intake snapshot</h3>
          <p className="text-xs text-slate-500">
            This is a UI-only form for capturing PHI concepts: we&apos;ll wire storage and HIPAA safeguards later.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-slate-600">Full name</label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
                placeholder="e.g. Jane Doe"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">Date of birth</label>
              <input
                type="date"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 focus:border-brand-500 focus:ring-2"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">Medical record number (MRN)</label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
                placeholder="Hospital-wide unique ID"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">Primary service</label>
              <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 focus:border-brand-500 focus:ring-2">
                <option>Cardiology</option>
                <option>Internal Medicine</option>
                <option>Surgery</option>
                <option>Emergency Medicine</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">Chief complaint / reason for visit</label>
            <textarea
              rows={3}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none ring-brand-500/20 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2"
              placeholder="e.g. Chest pain x2 days, worse with exertion"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              Clear
            </button>
            <button
              type="button"
              className="rounded-full bg-brand-600 px-4 py-1.5 text-xs font-medium text-white shadow-soft hover:bg-brand-700"
            >
              Save snapshot
            </button>
          </div>
        </form>

        <div className="space-y-3 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft/20 backdrop-blur">
          <h3 className="text-sm font-semibold text-slate-900">Personal health information (PHI) examples</h3>
          <p className="text-xs text-slate-600">
            As we mature this UI, we&apos;ll mark all PHI fields, add access controls, audit logging, and storage
            encryption to meet HIPAA requirements.
          </p>
          <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1.5">
            <li>Identifiers: name, MRN, hospital patient ID, date of birth.</li>
            <li>Clinical context: chief complaint, diagnoses, medications, allergies.</li>
            <li>Location details: unit, room, and bed assignments tied to a person.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

