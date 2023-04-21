import express from 'express'
import { Util } from '@util/index'
import { DolarSiService } from '@services/index'
import { DolarController } from '@controller/dolar'
import { BancosController } from '@controller/banks'
import { RiesgoController } from '@controller/risk'
import { EuroController } from '@controller/euro'
import { RealController } from '@controller/real'
import { BCRAController } from '@controller/bcra'
import { CasasController } from '@controller/houses'
import { configureDolarRoutes } from './dolar.routes'
import { configureBanksRoutes } from './banks.routes'
import { configureHousesRoutes } from './houses.routes'
import { configureEuroRoutes } from './euro.routes'
import { configureRealRoutes } from './real.routes'
import { configureBCRARoutes } from './bcra.routes'
import { configureRiskRoutes } from './risk.routes'

const router = express.Router()
const utilInstance = new Util()
const dolarSiServiceInstance = new DolarSiService()
const dolarInstance = new DolarController(dolarSiServiceInstance, utilInstance)
const bankInstance = new BancosController(dolarSiServiceInstance, utilInstance)
const riesgoInstance = new RiesgoController(
  dolarSiServiceInstance,
  utilInstance
)
const euroInstance = new EuroController(dolarSiServiceInstance, utilInstance)
const realInstance = new RealController(dolarSiServiceInstance, utilInstance)
const bcraInstance = new BCRAController(dolarSiServiceInstance, utilInstance)
const housesInstance = new CasasController(dolarSiServiceInstance, utilInstance)

/**
 * @description Rutas dolar
 */
configureDolarRoutes(router, dolarInstance)

/**
 * @description Rutas bancos
 */
configureBanksRoutes(router, bankInstance)

/**
 * @description Ruta riesgo pais
 */
configureRiskRoutes(router, riesgoInstance)

/**
 * @description Rutas euro
 */
configureEuroRoutes(router, euroInstance)

/**
 * @description Rutas real
 */
configureRealRoutes(router, realInstance)

/**
 * @description Rutas Reservas y Circulante
 */
configureBCRARoutes(router, bcraInstance)

/**
 * @description Rutar casas de cambio
 */
configureHousesRoutes(router, housesInstance)

export default router
