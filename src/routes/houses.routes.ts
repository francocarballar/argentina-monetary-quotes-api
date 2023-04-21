import { type Router } from 'express'
import { type CasasController } from '@controller/houses'

export const configureHousesRoutes = (
  router: Router,
  controller: CasasController
): void => {
  router.get('/api/casas/caba/metropolis', controller.getDolarMetro)
  router.get('/api/casas/caba/alpe', controller.getDolarAlpe)
  router.get('/api/casas/caba/vaccaro', controller.getDolarVaccaro)
  router.get(
    '/api/casas/caba/transatlantica',
    controller.getDolarTransatlantica
  )
  router.get('/api/casas/lp/tilos', controller.getDolarLosTilos)
  router.get('/api/casas/mdp/jonestur', controller.getDolarJonestur)
  router.get('/api/casas/mdp/moneta', controller.getDolarMoneta)
  router.get('/api/casas/mdp/exchange', controller.getDolarExchange)
  router.get('/api/casas/rosario/daminato', controller.getDolarDaminato)
  router.get('/api/casas/mendoza/montemar', controller.getDolarMontemar)
  router.get('/api/casas/tucuman/maguitur', controller.getDolarMaguitur)
}
