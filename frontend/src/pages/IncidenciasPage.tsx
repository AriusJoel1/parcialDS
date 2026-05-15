import { useMemo, useState } from 'react'
import { Filter, Search, Eye, PencilLine, CheckCircle2 } from 'lucide-react'
import { mockIncidencias } from '../data/mockIncidencias'
import type { EstadoIncidencia, Incidencia } from '../types/incidencia'

const statusStyles: Record<EstadoIncidencia, string> = {
  Pendiente: 'bg-amber-100 text-amber-800',
  'En proceso': 'bg-blue-100 text-blue-800',
  Resuelto: 'bg-emerald-100 text-emerald-800',
  Cancelado: 'bg-slate-200 text-slate-700',
}

export default function IncidenciasPage() {
  const [query, setQuery] = useState('')
  const [estado, setEstado] = useState<'Todos' | EstadoIncidencia>('Todos')
  const [items, setItems] = useState<Incidencia[]>(mockIncidencias)

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesQuery =
        item.titulo.toLowerCase().includes(query.toLowerCase()) ||
        item.distrito.toLowerCase().includes(query.toLowerCase()) ||
        item.tipo.toLowerCase().includes(query.toLowerCase())

      const matchesState = estado === 'Todos' || item.estado === estado
      return matchesQuery && matchesState
    })
  }, [items, query, estado])

  const markResolved = (id: number) => {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, estado: 'Resuelto' } : item))
    )
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-black">Incidencias</h1>
            <p className="mt-1 text-sm text-slate-500">
              Consulta, filtra y administra los reportes registrados.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:w-[560px]">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Search size={16} className="text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por título, distrito o tipo"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Filter size={16} className="text-slate-400" />
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value as typeof estado)}
                className="w-full bg-transparent text-sm outline-none"
              >
                <option value="Todos">Todos los estados</option>
                <option value="Pendiente">Pendiente</option>
                <option value="En proceso">En proceso</option>
                <option value="Resuelto">Resuelto</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-[0.18em] text-slate-500">
              <tr>
                <th className="px-6 py-4">Título</th>
                <th className="px-6 py-4">Tipo</th>
                <th className="px-6 py-4">Distrito</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Prioridad</th>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">{item.titulo}</div>
                    <div className="mt-1 max-w-md text-sm text-slate-500">{item.descripcion}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{item.tipo}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{item.distrito}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.estado]}`}>
                      {item.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{item.prioridad}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{item.fecha}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-100">
                        <Eye size={16} />
                        Ver
                      </button>
                      <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-100">
                        <PencilLine size={16} />
                        Editar
                      </button>
                      <button
                        onClick={() => markResolved(item.id)}
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                      >
                        <CheckCircle2 size={16} />
                        Resolver
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-sm text-slate-500">
                    No se encontraron incidencias con esos filtros.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}