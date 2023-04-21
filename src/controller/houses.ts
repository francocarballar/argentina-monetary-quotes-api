import { type Request, type Response } from 'express'
import { type DolarSiService } from '@services/index'
import { type Util } from '@util/index'
import { type TypeGetData } from '@src/types/data'

type CasaControllerMethod = (req: Request, res: Response) => Promise<void>

export class CasasController {
  private readonly dolarSiService: DolarSiService
  private readonly util: Util

  constructor (dolarSiService: DolarSiService, util: Util) {
    this.dolarSiService = dolarSiService
    this.util = util
  }

  private createCasaControllerMethod (casaPath: string): CasaControllerMethod {
    return async (_req: Request, res: Response): Promise<void> => {
      try {
        const data = await this.dolarSiService.getInfoDolar()

        // Divide el casaPath en un array de claves
        const pathKeys: string[] = casaPath.split('.')

        // Accede a las propiedades anidadas utilizando las claves extraídas
        const casaData =
          pathKeys[0] !== undefined &&
          pathKeys[1] !== undefined &&
          pathKeys.length > 0
            ? data.cotiza[pathKeys[0]][pathKeys[1]]
            : ''

        const values: TypeGetData = {
          fecha: this.util.getDateTime(),
          compra: this.util.formatNumber(casaData.compra._text),
          venta: this.util.formatNumber(casaData.venta._text)
        }
        res.send(values)
      } catch (e) {
        console.error(e)
        res.sendStatus(500)
      }
    }
  }

  getDolarMetro = this.createCasaControllerMethod('Capital_Federal.casa340')
  getDolarAlpe = this.createCasaControllerMethod('Capital_Federal.casa338')
  getDolarVaccaro = this.createCasaControllerMethod('Capital_Federal.casa339')
  getDolarTransatlantica = this.createCasaControllerMethod(
    'Capital_Federal.casa343'
  )

  getDolarJonestur = this.createCasaControllerMethod('Mar_del_Plata.casa23')
  getDolarMoneta = this.createCasaControllerMethod('Mar_del_Plata.casa24')
  getDolarExchange = this.createCasaControllerMethod('Mar_del_Plata.casa400')
  getDolarDaminato = this.createCasaControllerMethod('Rosario.casa28')
  getDolarMontemar = this.createCasaControllerMethod('Mendoza.casa58')
  getDolarLosTilos = this.createCasaControllerMethod('La_Plata.casa350')
  getDolarMaguitur = this.createCasaControllerMethod('Tucuman.casa115')
}
