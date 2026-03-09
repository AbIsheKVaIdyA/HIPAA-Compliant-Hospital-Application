import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Overview' },
  { to: '/patients', label: 'Patients' },
  { to: '/doctor-console', label: 'Doctor console' },
  { to: '/nurse-console', label: 'Nurse console' },
  { to: '/patient-portal', label: 'Patient portal' },
]

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="hidden w-64 flex-shrink-0 flex-col border-r bg-white/80 px-4 py-6 shadow-soft/40 backdrop-blur sm:flex">
        <div className="mb-8 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-soft">
            <span className="text-lg font-semibold">HC</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">HarmonyCare</p>
            <p className="text-xs text-slate-500">HIPAA-ready hospital app</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-brand-50 text-brand-800'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-6 text-xs text-slate-400">
          Based on modern EHR patterns (e.g. Oystehr, HygieaEMR). No real PHI stored here yet.
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3 sm:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-xs font-semibold text-white">
              HC
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">HarmonyCare</p>
              <p className="text-[11px] text-slate-500">Hospital web console</p>
            </div>
          </div>
          <h1 className="text-base font-semibold text-slate-900 sm:text-lg">Clinical operations workspace</h1>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-emerald-600 sm:inline-flex rounded-full bg-emerald-50 px-3 py-1 font-medium">
              PHI sandbox · HIPAA-ready later
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
              AD
            </div>
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto bg-slate-50/80 px-4 py-4 sm:px-6 sm:py-6">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  )
}

