import type { Incidencia } from '../types/incidencia'

export const mockIncidencias: Incidencia[] = [
  {
    id: 1,
    titulo: 'Bache profundo en avenida principal',
    tipo: 'Vía pública',
    estado: 'Pendiente',
    prioridad: 'Alta',
    fecha: '2026-05-15',
    distrito: 'Menacho',
    descripcion: 'Bache grande que dificulta el tránsito y representa riesgo para motociclistas.'
  },
  {
    id: 2,
    titulo: 'Alumbrado público apagado',
    tipo: 'Iluminación',
    estado: 'En proceso',
    prioridad: 'Media',
    fecha: '2026-05-14',
    distrito: 'Centro',
    descripcion: 'Poste sin luz desde hace varios días en una zona de alto tránsito peatonal.'
  },
  {
    id: 3,
    titulo: 'Acumulación de basura',
    tipo: 'Limpieza',
    estado: 'Resuelto',
    prioridad: 'Media',
    fecha: '2026-05-13',
    distrito: 'Urb. San José',
    descripcion: 'Montículos de basura en la esquina de una intersección residencial.'
  },
  {
    id: 4,
    titulo: 'Semáforo intermitente',
    tipo: 'Tránsito',
    estado: 'Pendiente',
    prioridad: 'Alta',
    fecha: '2026-05-12',
    distrito: 'Av. Universitaria',
    descripcion: 'El semáforo cambia de estado de manera irregular y genera congestión.'
  },
  {
    id: 5,
    titulo: 'Vereda rota',
    tipo: 'Infraestructura',
    estado: 'Cancelado',
    prioridad: 'Baja',
    fecha: '2026-05-10',
    distrito: 'Parque Central',
    descripcion: 'Rotura menor en la vereda, sin afectación grave en el momento.'
  },
  {
    id: 6,
    titulo: 'Caída de señalización vial',
    tipo: 'Seguridad vial',
    estado: 'En proceso',
    prioridad: 'Alta',
    fecha: '2026-05-09',
    distrito: 'Av. España',
    descripcion: 'Señal doblada por impacto, requiere reposición urgente.'
  }
]