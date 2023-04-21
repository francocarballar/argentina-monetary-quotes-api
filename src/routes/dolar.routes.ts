import { type Router } from 'express'
import { type DolarController } from '@controller/dolar'

export const configureDolarRoutes = (
  router: Router,
  controller: DolarController
): void => {
  router.get('/api/all', controller.getAllValues)

  router.get('/api/dolar/oficial', controller.getDolarOficial)
  router.get('/api/dolar/blue', controller.getDolarBlue)
  router.get('/api/contadoliqui', controller.getContadoConLiqui)
  router.get('/api/dolar/promedio', controller.getDolarPromedio)
  router.get('/api/dolar/bolsa', controller.getDolarBolsa)
  router.get('/api/dolar/turista', controller.getDolarTurista)
  router.get('/api/dolar/mayorista', controller.getDolarMayorista)
  router.get(
    '/api/evolucion/dolar/oficial',
    controller.getEvolucionDolarOficial
  )
  router.get('/api/evolucion/dolar/blue', controller.getEvolucionDolarBlue)
}
