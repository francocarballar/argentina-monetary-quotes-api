import { type Router } from 'express'
import { type BancosController } from '@controller/banks'

export const configureBanksRoutes = (
  router: Router,
  controller: BancosController
): void => {
  router.get('/api/bbva', controller.getDolarBBVA)
  router.get('/api/piano', controller.getDolarPiano)
  router.get('/api/hipotecario', controller.getDolarHipotecario)
  router.get('/api/galicia', controller.getDolarGalicia)
  router.get('/api/santander', controller.getDolarSantander)
  router.get('/api/ciudad', controller.getDolarCiudad)
  router.get('/api/supervielle', controller.getDolarSupervielle)
  router.get('/api/patagonia', controller.getDolarPatagonia)
  router.get('/api/comafi', controller.getDolarComafi)
  router.get('/api/nacion', controller.getDolarNacion)
  router.get('/api/bind', controller.getDolarBIND)
  router.get('/api/chaco', controller.getDolarChaco)
  router.get('/api/pampa', controller.getDolarPampa)
  router.get('/api/bancor', controller.getDolarBancor)
}
