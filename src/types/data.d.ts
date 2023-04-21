export interface TypeGetData {
  fecha: string
  compra: string
  venta: string
}

export interface Months {
  anio: string
  mes: string
  valor: string
}

export interface TypeGetEvolution {
  fecha: string
  meses: Months[]
}

export interface TypeGetReservations {
  fecha: string
  valor: string
  moneda: string
}

export interface TypeGetRisk {
  fecha: string
  valor: string
}
