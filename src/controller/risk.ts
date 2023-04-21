import { type Request, type Response } from 'express'
import { type DolarSiService } from '@services/index'
import { type Util } from '@util/index'
import { type TypeGetRisk } from '@src/types/data'

export class RiesgoController {
  private readonly dolarSiService: DolarSiService
  private readonly util: Util

  constructor (dolarSiService: DolarSiService, util: Util) {
    this.dolarSiService = dolarSiService
    this.util = util
  }

  public getRiesgoPais = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.dolarSiService.getInfoDolar()
      const values: TypeGetRisk = {
        fecha: this.util.getDateTime(),
        valor: this.util.formatNumber(
          data.cotiza.Riesgo_pais.casa141.compra._text,
          3
        )
      }

      res.send(values)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  }
}
