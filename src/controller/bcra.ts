import { type Request, type Response } from 'express'
import { type DolarSiService } from '@services/index'
import { type Util } from '@util/index'
import { type TypeGetReservations } from '@src/types/data'

export class BCRAController {
  constructor (
    private readonly dolarSiService: DolarSiService,
    private readonly util: Util
  ) {}

  /**
   * @description Obtener el valor de las reservas del BCRA expresadas en dólares.
   * @returns Un objeto con el valor de las reservas, la moneda y la fecha-hora de la consulta
   */
  getReservas = async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      let reservasDolares = this.util.formatNumber(
        data.cotiza.Reservas_y_circulante.casa394.compra._text
      )
      if (reservasDolares !== '?') {
        reservasDolares = String(
          BigInt(Number(reservasDolares) * 1000) * BigInt(1000000)
        )
      }
      const values: TypeGetReservations = {
        fecha: this.util.getDateTime(),
        valor: reservasDolares.toString(),
        moneda: 'USD'
      }

      res.send(values)
    } catch (e) {
      res.sendStatus(500)
      console.error(e)
    }
  }

  /**
   * @description Obtener el valor del total circulante expresado en pesos argentinos.
   * @returns Un objeto con el valor del circulante, la moneda y la fecha-hora de la consulta
   */
  getCirculante = async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      let circulantePesos = this.util.formatNumber(
        data.cotiza.Reservas_y_circulante.casa395.compra._text
      )
      if (circulantePesos !== '?') {
        circulantePesos = String(
          BigInt(Number(circulantePesos) * 1000) * BigInt(1000000)
        )
      }
      const values: TypeGetReservations = {
        fecha: this.util.getDateTime(),
        valor: circulantePesos.toString(),
        moneda: 'ARS'
      }

      res.send(values)
    } catch (e) {
      res.sendStatus(500)
      console.error(e)
    }
  }
}
