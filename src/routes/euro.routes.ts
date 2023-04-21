import { type Router } from 'express'
import { type EuroController } from '@controller/euro'

export const configureEuroRoutes = (
  router: Router,
  controller: EuroController
): void => {
  router.get('/api/euro/nacion', controller.getEuroNacion)
  router.get('/api/euro/galicia', controller.getEuroGalicia)
  router.get('/api/euro/bbva', controller.getEuroBBVA)
  router.get('/api/euro/pampa', controller.getEuroPampa)
  router.get('/api/euro/chaco', controller.getEuroChaco)
  router.get('/api/euro/hipotecario', controller.getEuroHipotecario)
  router.get('/api/evolucion/euro/oficial', controller.getEvolucionEuro)
}
