import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  MapPinned,
  Plus,
  ArrowUpRight,
} from 'lucide-react'
import { mockIncidencias } from '../data/mockIncidencias'

const badgeStyles: Record<string, string> = {
  Pendiente: 'bg-amber-100 text-amber-800',
  'En proceso': 'bg-blue-100 text-blue-800',
  Resuelto: 'bg-emerald-100 text-emerald-800',
  Cancelado: 'bg-slate-200 text-slate-700',
}

export default function DashboardPage() {
  const total = mockIncidencias.length
  const pendientes = mockIncidencias.filter((i) => i.estado === 'Pendiente').length
  const proceso = mockIncidencias.filter((i) => i.estado === 'En proceso').length
  const resueltas = mockIncidencias.filter((i) => i.estado === 'Resuelto').length

  const cards = [
    { label: 'Total incidencias', value: total, icon: MapPinned, hint: 'Registros activos' },
    { label: 'Pendientes', value: pendientes, icon: AlertTriangle, hint: 'Requieren atención' },
    { label: 'En proceso', value: proceso, icon: Clock3, hint: 'Ya asignadas' },
    { label: 'Resueltas', value: resueltas, icon: CheckCircle2, hint: 'Atendidas correctamente' },
  ]

  const recientes = [...mockIncidencias].slice(0, 4)

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 text-white shadow-2xl sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-400">
              Sistema de gestión urbana
            </p>
            <h1 className="text-3xl font-black leading-tight sm:text-4xl">
              Controla el registro y seguimiento de incidencias en la vía pública
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
              Panel preparado para presentar: visual, ordenado y listo para conectar con el backend.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/registrar"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
            >
              <Plus size={18} />
              Nueva incidencia
            </Link>
            <Link
              to="/incidencias"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver listado
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon, hint }) => (
          <article
            key={label}
            className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-2xl bg-slate-100 p-3">
                <Icon size={20} className="text-slate-700" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                KPI
              </span>
            </div>

            <h3 className="mt-5 text-sm font-medium text-slate-500">{label}</h3>
            <p className="mt-2 text-4xl font-black text-slate-950">{value}</p>
            <p className="mt-2 text-sm text-slate-500">{hint}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Estado general</h2>
              <p className="text-sm text-slate-500">Distribución de incidencias registradas</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Pendientes', value: pendientes, total },
              { label: 'En proceso', value: proceso, total },
              { label: 'Resueltas', value: resueltas, total },
            ].map((item) => {
              const percent = total ? Math.round((item.value / total) * 100) : 0
              return (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="text-slate-500">{percent}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold">Acciones rápidas</h2>
          <div className="mt-5 space-y-3">
            <Link
              to="/registrar"
              className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 hover:bg-slate-100"
            >
              <div>
                <p className="font-semibold">Registrar incidencia</p>
                <p className="text-sm text-slate-500">Crear nuevo reporte</p>
              </div>
              <Plus size={18} />
            </Link>

            <Link
              to="/incidencias"
              className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 hover:bg-slate-100"
            >
              <div>
                <p className="font-semibold">Revisar incidencias</p>
                <p className="text-sm text-slate-500">Ver listado y estados</p>
              </div>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </article>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Últimas incidencias</h2>
            <p className="text-sm text-slate-500">Resumen de los reportes más recientes</p>
          </div>
          <Link to="/incidencias" className="text-sm font-semibold text-indigo-600 hover:underline">
            Ver todo
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {recientes.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-slate-900">{item.titulo}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.tipo} · {item.distrito}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[item.estado]}`}>
                  {item.estado}
                </span>
              </div>

              <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                {item.descripcion}
              </p>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Fecha: {item.fecha}</span>
                <span>Prioridad: {item.prioridad}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}