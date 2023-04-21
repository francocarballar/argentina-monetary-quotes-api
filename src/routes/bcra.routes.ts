import { type Router } from 'express'
import { type BCRAController } from '@controller/bcra'

export const configureBCRARoutes = (
  router: Router,
  controller: BCRAController
): void => {
  router.get('/api/bcra/reservas', controller.getReservas)
  router.get('/api/bcra/circulante', controller.getCirculante)
}
