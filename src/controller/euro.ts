import { type Request, type Response } from 'express'
import { type DolarSiService } from '@services/index'
import { type Util } from '@util/index'
import { type TypeGetEvolution, type TypeGetData } from '@src/types/data'

export class EuroController {
  constructor (
    private readonly dolarSiService: DolarSiService,
    private readonly util: Util
  ) {}

  private readonly getEuroData = async (
    _req: Request,
    res: Response,
    bankCode: number
  ): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetData = {
        fecha: this.util.getDateTime(),
        compra: this.util.formatNumber(
          data.cotiza.Euro[`casa${bankCode}`].compra._text
        ),
        venta: this.util.formatNumber(
          data.cotiza.Euro[`casa${bankCode}`].venta._text
        )
      }
      res.send(values)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  }

  getEuroNacion = async (req: Request, res: Response): Promise<void> => {
    await this.getEuroData(req, res, 176)
  }

  getEuroGalicia = async (req: Request, res: Response): Promise<void> => {
    await this.getEuroData(req, res, 356)
  }

  getEuroBBVA = async (req: Request, res: Response): Promise<void> => {
    await this.getEuroData(req, res, 358)
  }

  getEuroPampa = async (req: Request, res: Response): Promise<void> => {
    await this.getEuroData(req, res, 359)
  }

  getEuroChaco = async (req: Request, res: Response): Promise<void> => {
    await this.getEuroData(req, res, 360)
  }

  getEuroHipotecario = async (req: Request, res: Response): Promise<void> => {
    await this.getEuroData(req, res, 361)
  }

  /**
   * @description Obtiene la evolución anual del valor del euro
   * @returns Un objeto con el valor promedio por mes, el mes y el año.
   */
  getEvolucionEuro = async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetEvolution = this.util.getEvolucion(
        data.cotiza.evolucion_dolar.euro.anio
      )

      res.send(values)
    } catch (e) {
      res.sendStatus(500)
      console.error(e)
    }
  }
}
