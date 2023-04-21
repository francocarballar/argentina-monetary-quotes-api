import { type Router } from 'express'
import { type RealController } from '@controller/real'

export const configureRealRoutes = (
  router: Router,
  controller: RealController
): void => {
  router.get('/api/real/nacion', controller.getRealNacion)
  router.get('/api/real/bbva', controller.getRealBBVA)
  router.get('/api/real/chaco', controller.getRealChaco)
  router.get('/api/evolucion/real/oficial', controller.getEvolucionReal)
}
