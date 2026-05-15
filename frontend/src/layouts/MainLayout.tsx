import { NavLink, Outlet } from 'react-router-dom'
import {
  LayoutDashboard,
  ClipboardList,
  PlusCircle,
  Bell,
  Search,
  Menu,
  MapPin,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/incidencias', label: 'Incidencias', icon: ClipboardList },
  { to: '/registrar', label: 'Registrar', icon: PlusCircle },
]

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col bg-slate-950 text-white shadow-2xl lg:flex">
          <div className="border-b border-white/10 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500">
                <MapPin size={22} />
              </div>
              <div>
                <h1 className="text-lg font-bold leading-tight">Incidencias Viales</h1>
                <p className="text-xs text-slate-400">Panel de control</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navegación
            </p>

            <div className="space-y-2">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
                      isActive
                        ? 'bg-white text-slate-950 shadow-lg'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white',
                    ].join(' ')
                  }
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="p-5">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-sm font-semibold">Sistema listo para demo</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Frontend presentable, responsive y preparado para conectar con backend.
              </p>
            </div>
          </div>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-slate-200 p-2 lg:hidden">
                  <Menu size={18} />
                </button>

                <div>
                  <h2 className="text-lg font-bold sm:text-xl">Panel de incidencias</h2>
                  <p className="text-sm text-slate-500">
                    Gestión y seguimiento de reportes urbanos
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 md:flex">
                  <Search size={16} className="text-slate-400" />
                  <span className="text-sm text-slate-400">Buscar incidencia...</span>
                </div>

                <button className="relative rounded-2xl border border-slate-200 p-3 hover:bg-slate-50">
                  <Bell size={18} />
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />
                </button>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-sm font-bold text-white">
                  AJ
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}