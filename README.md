# HIPAA-Compliant Hospital Application

Modern, React-based hospital web UI that will be extended with **HIPAA-compliant** security and back-end services.  
Right now this is a **UI-only** prototype focused on clinical workflows (doctor console, nurse console, patient console, patient registry, dashboards).

---

## Overview

- **Purpose**: Hospital operations UI that can later be wired to a secure, HIPAA-aligned backend.
- **Current state**: No real PHI is persisted or transmitted; everything is front-end only.
- **Main screens**:
  - **Dashboard** – operational overview (admissions, ED waiting, discharges, alerts).
  - **Patients** – patient registry + intake snapshot with PHI examples.
  - **Doctor console** – rounding list, progress note shell, key vitals/labs.
  - **Nurse console** – task list, vitals capture, safety checks, handoff notes.
  - **Patient portal** – upcoming appointments, secure-message concept, education.

---

## Tech stack

- **Frontend**: React + TypeScript
- **Build tool**: Vite
- **Routing**: React Router (`react-router-dom`)
- **Styling**: Tailwind CSS

### Dependencies (with versions)

Pulled from `hospital-ui/package.json`:

- **Runtime**
  - `react` — `^18.3.1`
  - `react-dom` — `^18.3.1`
  - `react-router-dom` — `^7.1.3`

- **Dev / tooling**
  - `vite` — `^7.3.1`
  - `@vitejs/plugin-react-swc` — `^4.2.3`
  - `typescript` — `~5.9.3`
  - `tailwindcss` — `^3.4.15`
  - `postcss` — `^8.5.8`
  - `autoprefixer` — `^10.4.27`
  - `@types/react` — `^18.3.12`
  - `@types/react-dom` — `^18.3.1`

---

## Project structure (high level)

- `hospital-ui/` – Vite React app
  - `src/main.tsx` – React root + router setup
  - `src/App.tsx` – route definitions
  - `src/components/layout/Layout.tsx` – shared layout (sidebar + header shell)
  - `src/pages/Dashboard.tsx` – hospital operational overview
  - `src/pages/Patients.tsx` – patient registry & intake snapshot
  - `src/pages/DoctorConsole.tsx` – doctor console (rounding & notes)
  - `src/pages/NurseConsole.tsx` – nurse console (tasks & vitals)
  - `src/pages/PatientPortal.tsx` – patient-facing portal
  - `src/style.css` – Tailwind entry + base styles
  - `tailwind.config.js` – Tailwind configuration (custom brand palette)
  - `vite.config.ts` – Vite config with React plugin

---

## Getting started

### 1. Prerequisites

- **Node.js**: v18 or newer  
- **npm**: included with Node.js

### 2. Clone the repository

```bash
git clone https://github.com/AbIsheKVaIdyA/HIPAA-Compliant-Hospital-Application.git
cd HIPAA-Compliant-Hospital-Application
```

### 3. Install dependencies

```bash
cd hospital-ui
npm install
```

### 4. Run the application (development)

```bash
cd hospital-ui
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`) in your browser.

### 5. Build for production

```bash
cd hospital-ui
npm run build
```

This generates an optimized build in `hospital-ui/dist`.

---

## Roadmap / HIPAA alignment (future work)

- Add authentication & role-based access (doctor, nurse, patient, admin).
- Implement detailed audit logging for PHI access and changes.
- Encrypt PHI in transit and at rest; integrate with a secure backend (e.g. FHIR-based).
- Add consent management, session handling, and secure messaging that meets HIPAA guidance.

> ⚠️ **Important**: This project is not yet production-ready and should **not** be used with real patient data until the HIPAA-related features are fully implemented and reviewed.

# HIPAA-Compliant-Hospital-Application

React-based hospital web application UI designed to be extended with HIPAA-compliant security and back-end services.  
Currently this is a **UI-only** prototype for clinical workflows (doctor, nurse, patient consoles, patient registry, etc.).

## Tech stack

- **Frontend framework**: React + TypeScript
- **Build tool**: Vite
- **Routing**: React Router
- **Styling**: Tailwind CSS

### Dependencies (with versions)

From `hospital-ui/package.json`:

- **Runtime**
  - `react` `^18.3.1`
  - `react-dom` `^18.3.1`
  - `react-router-dom` `^7.1.3`

- **Dev / tooling**
  - `vite` `^7.3.1`
  - `@vitejs/plugin-react-swc` `^4.2.3`
  - `typescript` `~5.9.3`
  - `tailwindcss` `^3.4.15`
  - `postcss` `^8.5.8`
  - `autoprefixer` `^10.4.27`
  - `@types/react` `^18.3.12`
  - `@types/react-dom` `^18.3.1`

## Project structure

- `hospital-ui/` – Vite React app
  - `src/main.tsx` – React root + router
  - `src/App.tsx` – App routes
  - `src/components/layout/Layout.tsx` – Shared layout (sidebar + header)
  - `src/pages/Dashboard.tsx` – Operational overview
  - `src/pages/Patients.tsx` – Patient registry + intake snapshot
  - `src/pages/DoctorConsole.tsx` – Doctor console (rounding, notes)
  - `src/pages/NurseConsole.tsx` – Nurse console (tasks, vitals)
  - `src/pages/PatientPortal.tsx` – Patient-facing console
  - `src/style.css` – Tailwind entry + global styles
  - `tailwind.config.js` – Tailwind configuration
  - `vite.config.ts` – Vite config with React plugin

## Getting started

### Prerequisites

- **Node.js**: v18+ (recommended)  
- **npm**: comes with Node.js

### Clone the repository

```bash
git clone https://github.com/AbIsheKVaIdyA/HIPAA-Compliant-Hospital-Application.git
cd HIPAA-Compliant-Hospital-Application
```

### Install dependencies

```bash
cd hospital-ui
npm install
```

### Run the application (development)

```bash
cd hospital-ui
npm run dev
```

Then open the URL printed by Vite (typically `http://localhost:5173`) in your browser.

### Build for production

```bash
cd hospital-ui
npm run build
```

This generates a production build in the `hospital-ui/dist` directory.

## Notes

- This repository currently focuses on **frontend UI only**. No real PHI is stored or transmitted.
- Future work will add authentication, authorization, audit logging, encryption, and back-end integration to align with HIPAA requirements.

