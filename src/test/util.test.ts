import { Util } from '@src/util'
import { type TypeGetEvolucion } from '@src/types/util'

describe('Util', () => {
  const util = new Util()

  describe('getDateTime', () => {
    it('should return the current date and time formatted', () => {
      const dateTimeRegex = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/
      expect(util.getDateTime()).toMatch(dateTimeRegex)
    })
  })

  describe('formatNumber', () => {
    it('should format a numeric string to currency format', () => {
      const value = '1.234,56'
      const formattedValue = util.formatNumber(value)
      expect(formattedValue).toBe('1234.56')
    })

    it('should return "No cotiza" for non-numeric input', () => {
      const value = 'Not a number'
      const formattedValue = util.formatNumber(value)
      expect(formattedValue).toBe('No cotiza')
    })

    it('should format a number with specified decimal places', () => {
      const value = '1.234,5678'
      const formattedValue = util.formatNumber(value, 4)
      expect(formattedValue).toBe('1234.5678')
    })
  })

  describe('getEvolucion', () => {
    it('should return an object with annual exchange rate values per month', () => {
      const evolucionAnualMock: Record<string, { _text: string }> = {
        Ene: { _text: '1.000,00' },
        Feb: { _text: '1.100,00' },
        Mar: { _text: '1.200,00' }
        // ... other months ...
      }

      const evolucion = util.getEvolucion(evolucionAnualMock)
      const expectedOutput: TypeGetEvolucion = {
        fecha: expect.any(String),
        meses: expect.arrayContaining([
          {
            anio: expect.any(String),
            mes: expect.any(String),
            valor: expect.any(String)
          }
        ])
      }

      expect(evolucion).toMatchObject(expectedOutput)
    })
  })
})
