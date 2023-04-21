import { DolarSiService } from '@services/index'
import nock from 'nock'

describe('DolarSiService', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('getInfoDolar() should return parsed JSON from dolarSi API', async () => {
    // Define la URL y el contenido XML de la respuesta simulada
    const url = 'https://www.dolarsi.com'
    const path = '/api/dolarSiInfo.xml'
    const mockResponse =
      '<?xml version="1.0" encoding="UTF-8"?><data><cotiza><test><value>_text</value></test></cotiza></data>'

    // Usa nock para interceptar la solicitud HTTP y simular la respuesta
    nock(url).get(path).reply(200, mockResponse)

    // Crea una instancia de DolarSiService e invoca getInfoDolar()
    const dolarSiService = new DolarSiService()
    const result = await dolarSiService.getInfoDolar()

    // Verifica que la función devuelva el objeto JSON esperado
    expect(result).toEqual({
      _declaration: {
        _attributes: {
          encoding: 'UTF-8',
          version: '1.0'
        }
      },
      data: {
        cotiza: {
          test: {
            value: {
              _text: '_text'
            }
          }
        }
      }
    })
  })
})
