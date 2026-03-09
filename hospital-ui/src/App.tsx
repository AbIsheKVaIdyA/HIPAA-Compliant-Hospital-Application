import { Route, Routes, Navigate } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Dashboard } from './pages/Dashboard'
import { Patients } from './pages/Patients'
import { DoctorConsole } from './pages/DoctorConsole'
import { NurseConsole } from './pages/NurseConsole'
import { PatientPortal } from './pages/PatientPortal'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctor-console" element={<DoctorConsole />} />
        <Route path="/nurse-console" element={<NurseConsole />} />
        <Route path="/patient-portal" element={<PatientPortal />} />
      </Routes>
    </Layout>
  )
}

