import request from 'supertest'
import express from 'express'
import routes from '@src/routes/router'

const app = express()
app.use(express.json())
app.use('/', routes)

describe('API Endpoints', () => {
  it('GET /api/all - success', async () => {
    const res = await request(app).get('/api/all')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('valores')
  })

  it('GET /api/dolar/oficial - success', async () => {
    const res = await request(app).get('/api/dolar/oficial')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/dolar/blue - success', async () => {
    const res = await request(app).get('/api/dolar/blue')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/contadoliqui - success', async () => {
    const res = await request(app).get('/api/contadoliqui')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/dolar/promedio - success', async () => {
    const res = await request(app).get('/api/dolar/promedio')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/dolar/bolsa - success', async () => {
    const res = await request(app).get('/api/dolar/bolsa')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/dolar/turista - success', async () => {
    const res = await request(app).get('/api/dolar/turista')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/dolar/mayorista - success', async () => {
    const res = await request(app).get('/api/dolar/mayorista')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/bbva - success', async () => {
    const res = await request(app).get('/api/bbva')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/piano - success', async () => {
    const res = await request(app).get('/api/piano')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/hipotecario - success', async () => {
    const res = await request(app).get('/api/hipotecario')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/galicia - success', async () => {
    const res = await request(app).get('/api/galicia')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/santander - success', async () => {
    const res = await request(app).get('/api/santander')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/ciudad - success', async () => {
    const res = await request(app).get('/api/ciudad')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/supervielle - success', async () => {
    const res = await request(app).get('/api/supervielle')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/patagonia - success', async () => {
    const res = await request(app).get('/api/patagonia')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/comafi - success', async () => {
    const res = await request(app).get('/api/comafi')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/nacion - success', async () => {
    const res = await request(app).get('/api/nacion')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/bind - success', async () => {
    const res = await request(app).get('/api/bind')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/chaco - success', async () => {
    const res = await request(app).get('/api/chaco')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/pampa - success', async () => {
    const res = await request(app).get('/api/pampa')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/bancor - success', async () => {
    const res = await request(app).get('/api/bancor')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/riesgopais - success', async () => {
    const res = await request(app).get('/api/riesgopais')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('valor')
  })

  it('GET /api/euro/nacion - success', async () => {
    const res = await request(app).get('/api/euro/nacion')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/euro/galicia - success', async () => {
    const res = await request(app).get('/api/euro/galicia')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/euro/bbva - success', async () => {
    const res = await request(app).get('/api/euro/bbva')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/euro/pampa - success', async () => {
    const res = await request(app).get('/api/euro/pampa')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/euro/chaco - success', async () => {
    const res = await request(app).get('/api/euro/chaco')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/euro/hipotecario - success', async () => {
    const res = await request(app).get('/api/euro/hipotecario')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/real/nacion - success', async () => {
    const res = await request(app).get('/api/real/nacion')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/real/bbva - success', async () => {
    const res = await request(app).get('/api/real/bbva')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/real/chaco - success', async () => {
    const res = await request(app).get('/api/real/chaco')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/bcra/reservas - success', async () => {
    const res = await request(app).get('/api/bcra/reservas')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('valor')
    expect(res.body).toHaveProperty('moneda')
  })

  it('GET /api/bcra/circulante - success', async () => {
    const res = await request(app).get('/api/bcra/circulante')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('valor')
    expect(res.body).toHaveProperty('moneda')
  })

  it('GET /api/evolucion/dolar/oficial - success', async () => {
    const res = await request(app).get('/api/evolucion/dolar/oficial')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('meses')
  })

  it('GET /api/evolucion/dolar/blue - success', async () => {
    const res = await request(app).get('/api/evolucion/dolar/blue')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('meses')
  })

  it('GET /api/evolucion/real/oficial - success', async () => {
    const res = await request(app).get('/api/evolucion/real/oficial')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('meses')
  })

  it('GET /api/evolucion/euro/oficial - success', async () => {
    const res = await request(app).get('/api/evolucion/euro/oficial')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('meses')
  })

  it('GET /api/casas/caba/metropolis - success', async () => {
    const res = await request(app).get('/api/casas/caba/metropolis')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/casas/caba/alpe - success', async () => {
    const res = await request(app).get('/api/casas/caba/alpe')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/casas/caba/vaccaro - success', async () => {
    const res = await request(app).get('/api/casas/caba/vaccaro')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/casas/caba/transatlantica - success', async () => {
    const res = await request(app).get('/api/casas/caba/transatlantica')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/casas/lp/tilos - success', async () => {
    const res = await request(app).get('/api/casas/lp/tilos')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/casas/mdp/jonestur - success', async () => {
    const res = await request(app).get('/api/casas/mdp/jonestur')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/casas/mdp/moneta - success', async () => {
    const res = await request(app).get('/api/casas/mdp/moneta')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/casas/mdp/exchange - success', async () => {
    const res = await request(app).get('/api/casas/mdp/exchange')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/casas/rosario/daminato - success', async () => {
    const res = await request(app).get('/api/casas/rosario/daminato')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/casas/mendoza/montemar - success', async () => {
    const res = await request(app).get('/api/casas/mendoza/montemar')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })

  it('GET /api/casas/tucuman/maguitur - success', async () => {
    const res = await request(app).get('/api/casas/tucuman/maguitur')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('fecha')
    expect(res.body).toHaveProperty('compra')
    expect(res.body).toHaveProperty('venta')
  })
})
