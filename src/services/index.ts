import convert from 'xml-js'
import axios from 'axios'

export class DolarSiService {
  /**
   * @description Obtener un json parseado con los valores de dolarSi
   */
  async getInfoDolar (): Promise<any> {
    try {
      const dataDolar = await axios.get(
        'https://www.dolarsi.com/api/dolarSiInfo.xml'
      )
      const json = convert.xml2json(dataDolar.data, {
        compact: true,
        spaces: 4
      })
      const jsonParsed = JSON.parse(json)
      return jsonParsed
    } catch (e) {
      console.error(e)
    }
  }
}
