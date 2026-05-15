import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardPage from './pages/DashboardPage'
import IncidenciasPage from './pages/IncidenciasPage'
import RegistrarIncidenciaPage from './pages/RegistrarIncidenciaPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/incidencias" element={<IncidenciasPage />} />
          <Route path="/registrar" element={<RegistrarIncidenciaPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}