import { type TypeGetData } from '@src/types/data'
import { type Request, type Response } from 'express'

export class BancosController {
  constructor (
    private readonly dolarSiService: any,
    private readonly util: any
  ) {}

  private readonly getExchangeRate = async (
    _req: Request,
    res: Response,
    bankCode: number
  ): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetData = {
        fecha: this.util.getDateTime(),
        compra: this.util.formatNumber(
          data.cotiza.Capital_Federal[`casa${bankCode}`].compra._text
        ),
        venta: this.util.formatNumber(
          data.cotiza.Capital_Federal[`casa${bankCode}`].venta._text
        )
      }
      res.send(values)
    } catch (e) {
      res.sendStatus(500)
      console.error(e)
    }
  }

  getDolarBBVA = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 336)
  }

  getDolarPiano = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 37)
  }

  getDolarHipotecario = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 217)
  }

  getDolarGalicia = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 342)
  }

  getDolarSantander = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 401)
  }

  getDolarCiudad = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 402)
  }

  getDolarSupervielle = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 403)
  }

  getDolarPatagonia = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 404)
  }

  getDolarComafi = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 405)
  }

  getDolarNacion = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 6)
  }

  getDolarBIND = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 22)
  }

  getDolarChaco = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 334)
  }

  getDolarPampa = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 335)
  }

  getDolarBancor = async (req: Request, res: Response): Promise<void> => {
    await this.getExchangeRate(req, res, 341)
  }
}
