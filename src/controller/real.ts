import { type Request, type Response } from 'express'
import { type DolarSiService } from '@services/index'
import { type Util } from '@util/index'
import { type TypeGetEvolution, type TypeGetData } from '@src/types/data'

export class RealController {
  constructor (
    private readonly dolarSiService: DolarSiService,
    private readonly util: Util
  ) {}

  private readonly getRealData = async (
    _req: Request,
    res: Response,
    bankCode: number
  ): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetData = {
        fecha: this.util.getDateTime(),
        compra: this.util.formatNumber(
          data.cotiza.Real[`casa${bankCode}`].compra._text
        ),
        venta: this.util.formatNumber(
          data.cotiza.Real[`casa${bankCode}`].venta._text
        )
      }
      res.send(values)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  }

  getRealNacion = async (req: Request, res: Response): Promise<void> => {
    await this.getRealData(req, res, 230)
  }

  getRealBBVA = async (req: Request, res: Response): Promise<void> => {
    await this.getRealData(req, res, 365)
  }

  getRealChaco = async (req: Request, res: Response): Promise<void> => {
    await this.getRealData(req, res, 366)
  }

  /**
   * @description Obtiene la evolución anual del valor del Real
   * @returns Un objeto con el valor promedio por mes, el mes y el año.
   */
  getEvolucionReal = async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetEvolution = this.util.getEvolucion(
        data.cotiza.evolucion_dolar.real.anio
      )

      res.send(values)
    } catch (e) {
      res.sendStatus(500)
      console.error(e)
    }
  }
}
