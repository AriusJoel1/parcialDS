export type EstadoIncidencia = 'Pendiente' | 'En proceso' | 'Resuelto' | 'Cancelado'
export type PrioridadIncidencia = 'Alta' | 'Media' | 'Baja'

export interface Incidencia {
  id: number
  titulo: string
  tipo: string
  estado: EstadoIncidencia
  prioridad: PrioridadIncidencia
  fecha: string
  distrito: string
  descripcion: string
}