import { type TypeGetEvolucion } from '@src/types/util'

export class Util {
  /**
   * Obtiene la fecha y hora actual formateada.
   */
  getDateTime (): string {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hour = String(now.getHours()).padStart(2, '0')
    const minute = String(now.getMinutes()).padStart(2, '0')
    const second = String(now.getSeconds()).padStart(2, '0')

    const dateTime = `${year}/${month}/${day} ${hour}:${minute}:${second}`
    return dateTime
  }

  /**
   * Formatea un texto numérico a formato moneda.
   * @param value Texto que contiene el valor numérico a convertir.
   * @param decimalPlaces Cantidad de caracteres decimales a conservar.
   */
  formatNumber (value: string, decimalPlaces = 2): string {
    const convertedValue = parseFloat(value.replace('.', '').replace(',', '.'))
    return !isNaN(convertedValue)
      ? convertedValue.toFixed(decimalPlaces)
      : 'No cotiza'
  }

  /**
   * Devuelve un objeto que contiene los valores de la cotización anual por mes.
   * @param evolucionAnual Objeto que contiene el valor de cada mes del año.
   */
  getEvolucion (
    evolucionAnual: Record<string, { _text: string }>
  ): TypeGetEvolucion {
    const now = new Date()
    const mesActual = now.getMonth() + 1

    let meses = Object.entries(evolucionAnual).map(([key, value], index) => {
      const monthIndex = index + 1
      const anio =
        monthIndex < mesActual ? now.getFullYear() : now.getFullYear() - 1
      return {
        anio: anio.toString(),
        mes: monthIndex.toString(),
        valor: this.formatNumber(value._text).toString()
      }
    })

    meses = meses.sort((a, b) => parseInt(a.anio) - parseInt(b.anio))

    const values = {
      fecha: this.getDateTime(),
      meses
    }

    return values
  }
}
