import { type Response, type Request, type NextFunction } from 'express'
import { type DolarSiService } from '@services/index'
import { type Util } from '@util/index'
import { type TypeGetEvolution, type TypeGetData } from '@src/types/data'

export class DolarController {
  private readonly dolarSiService: DolarSiService
  private readonly util: Util

  constructor (dolarSiService: DolarSiService, util: Util) {
    this.dolarSiService = dolarSiService
    this.util = util
  }

  private readonly getDolarData = async (
    _req: Request,
    res: Response,
    bankCode: number
  ): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetData = {
        fecha: this.util.getDateTime(),
        compra: this.util.formatNumber(
          data.cotiza.Dolar[`casa${bankCode}`].compra._text
        ),
        venta: this.util.formatNumber(
          data.cotiza.Dolar[`casa${bankCode}`].venta._text
        )
      }
      res.send(values)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  }

  private readonly getCoreValues = async (
    _req: Request,
    res: Response,
    bankCode: number
  ): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetData = {
        fecha: this.util.getDateTime(),
        compra: this.util.formatNumber(
          data.cotiza.valores_principales[`casa${bankCode}`].compra._text
        ),
        venta: this.util.formatNumber(
          data.cotiza.valores_principales[`casa${bankCode}`].venta._text
        )
      }
      res.send(values)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  }

  getAllValues = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values = { valores: data.cotiza }
      res.send(values)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
      next(e)
    }
  }

  getDolarOficial = async (req: Request, res: Response): Promise<void> => {
    await this.getDolarData(req, res, 344)
  }

  getDolarBlue = async (req: Request, res: Response): Promise<void> => {
    await this.getDolarData(req, res, 380)
  }

  getContadoConLiqui = async (req: Request, res: Response): Promise<void> => {
    await this.getCoreValues(req, res, 312)
  }

  getDolarPromedio = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetData = {
        fecha: this.util.getDateTime(),
        compra: this.util.formatNumber(
          data.cotiza.cotizador.casa302.compra._text
        ),
        venta: this.util.formatNumber(data.cotiza.cotizador.casa302.venta._text)
      }
      res.send(values)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  }

  getDolarBolsa = async (req: Request, res: Response): Promise<void> => {
    await this.getCoreValues(req, res, 313)
  }

  getDolarTurista = async (req: Request, res: Response): Promise<void> => {
    await this.getCoreValues(req, res, 406)
  }

  getDolarMayorista = async (req: Request, res: Response): Promise<void> => {
    await this.getDolarData(req, res, 44)
  }

  getEvolucionDolarOficial = async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetEvolution = this.util.getEvolucion(
        data.cotiza.evolucion_dolar.oficial.anio
      )

      res.send(values)
    } catch (e) {
      res.send(e).status(500)
      console.error(e)
    }
  }

  getEvolucionDolarBlue = async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetEvolution = this.util.getEvolucion(
        data.cotiza.evolucion_dolar.blue.anio
      )
      res.send(values)
    } catch (e) {
      res.send(e).status(500)
      console.error(e)
    }
  }
}
