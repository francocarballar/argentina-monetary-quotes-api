import { type Router } from 'express'
import { type RiesgoController } from '@controller/risk'

export const configureRiskRoutes = (
  router: Router,
  controller: RiesgoController
): void => {
  router.get('/api/riesgopais', controller.getRiesgoPais)
}
