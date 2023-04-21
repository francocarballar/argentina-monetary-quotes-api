# API de Cotizaciones Monetarias en Argentina

Esta API permite obtener las cotizaciones de diferentes monedas y datos financieros en tiempo real, incluyendo el dólar, euro, reservas, evolución y riesgo país.

## Idioma de la documentación:

[<img src="./public/img/english_flag.png" alt="English" width="20"> English](./README_EN.md) | [<img src="./public/img/spanish_flag.png" alt="Español" width="20"> Español](./README.md)

## Endpoints

URL base: `https://argentina-monetary-quotes-api.up.railway.app`

| Método | Endpoint                       | Descripción                                            |
| ------ | ------------------------------ | ------------------------------------------------------ |
| GET    | /api/all                       | Todos los valores disponibles                          |
| GET    | /api/dolar/oficial             | Cotización dólar oficial                               |
| GET    | /api/dolar/blue                | Cotización dólar blue                                  |
| GET    | /api/contadoliqui              | Cotización dólar contado con liqui                     |
| GET    | /api/dolar/promedio            | Cotización dólar promedio                              |
| GET    | /api/dolar/turista             | Cotización dólar turista                               |
| GET    | /api/dolar/bolsa               | Cotización dólar bolsa                                 |
| GET    | /api/dolar/mayorista           | Cotización dólar Mayorista Bancos                      |
| GET    | /api/riesgopais                | Valor riesgo país                                      |
| GET    | /api/bbva                      | Cotización dólar del Banco BBVA                        |
| GET    | /api/piano                     | Cotización dólar del Banco Piano                       |
| GET    | /api/hipotecario               | Cotización dólar del Banco Hipotecario                 |
| GET    | /api/galicia                   | Cotización dólar del Banco Galicia                     |
| GET    | /api/santander                 | Cotización dólar del Banco Santander                   |
| GET    | /api/ciudad                    | Cotización dólar del Banco Ciudad                      |
| GET    | /api/supervielle               | Cotización dólar del Banco Supervielle                 |
| GET    | /api/patagonia                 | Cotización dólar del Banco Patagonia                   |
| GET    | /api/comafi                    | Cotización dólar del Banco Comafi                      |
| GET    | /api/nacion                    | Cotización dólar del Banco Nación                      |
| GET    | /api/bind                      | Cotización dólar del Banco Industrial                  |
| GET    | /api/bancor                    | Cotización dólar del Banco de Córdoba                  |
| GET    | /api/chaco                     | Cotización dólar del Nuevo Banco del Chaco             |
| GET    | /api/pampa                     | Cotización dólar del Banco de La Pampa                 |
| GET    | /api/casas/caba/metropolis     | Cotización dólar de Metrópolis Compañía Financiera S.A |
| GET    | /api/casas/caba/alpe           | Cotización dólar de Cambio Alpe S.A                    |
| GET    | /api/casas/caba/vaccaro        | Cotización dólar de Francisco Vaccaro S.A              |
| GET    | /api/casas/caba/transatlantica | Cotización dólar de Transatlantica S.A                 |
| GET    | /api/casas/lp/tilos            | Cotización dólar de Casa de Cambio Los Tilos S.A       |
| GET    | /api/casas/mdp/jonestur        | Cotización dólar de Jonestur S.A                       |
| GET    | /api/casas/mdp/moneta          | Cotización dólar de La Moneta Cambio S.A               |
| GET    | /api/casas/mdp/exchange        | Cotización dólar de Mar del Plata Exchange S.A         |
| GET    | /api/casas/rosario/daminato    | Cotización dólar de Daminato Viajes y Cambios S.A.     |
| GET    | /api/casas/mendoza/montemar    | Cotización dólar de Montemar Compañía Financiera S.A   |
| GET    | /api/casas/tucuman/maguitur    | Cotización dólar de Maguitur S.A                       |
| GET    | /api/euro/nacion               | Cotización del Euro del Banco Nación                   |
| GET    | /api/euro/galicia              | Cotización del Euro del Banco Galicia                  |
| GET    | /api/euro/bbva                 | Cotización del Euro del Banco BBVA                     |
| GET    | /api/euro/pampa                | Cotización del Euro del Banco de La Pampa              |
| GET    | /api/euro/chaco                | Cotización del Euro del Nuevo Banco del Chaco          |
| GET    | /api/euro/hipotecario          | Cotización del Euro del Banco Hipotecario              |
| GET    | /api/real/nacion               | Cotización del Real del Banco Nación                   |
| GET    | /api/real/bbva                 | Cotización del Real del Banco BBVA                     |
| GET    | /api/real/chaco                | Cotización del Real del Nuevo Banco del Chaco          |
| GET    | /api/bcra/reservas             | Reservas del BCRA en dólares                           |
| GET    | /api/bcra/circulante           | Total de pesos en circulación                          |
| GET    | /api/evolucion/dolar/oficial   | Evolución mensual anualizada del dólar oficial         |
| GET    | /api/evolucion/dolar/blue      | Evolución mensual anualizada del dólar blue            |
| GET    | /api/evolucion/real/oficial    | Evolución mensual anualizada del Real oficial          |
| GET    | /api/evolucion/euro/oficial    | Evolución mensual anualizada del Euro oficial          |

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/22004185-1fbecbc9-3258-4d41-bb3e-a9fddc57408a?action=collection%2Ffork&collection-url=entityId%3D22004185-1fbecbc9-3258-4d41-bb3e-a9fddc57408a%26entityType%3Dcollection%26workspaceId%3Dacd253cd-93e0-43b2-8df5-ad85bc2cd82d)

### Respuestas

Todos los endpoints de cotización devuelven la fecha y hora, el valor de compra y el valor de venta. Ejemplo:

```javascript
{
  fecha: "2023/04/21 05:26:42",
  compra: "418.00",
  venta: "422.00"
}
```

Los endpoints de reservas y circulante devuelven la fecha y hora, el valor y la moneda. Ejemplo:

```javascript
{
  "fecha": "2023/04/21 05:14:01",
  "valor": "37220000000",
  "moneda": "USD"
}
```

Los endpoints de evolución devuelven la fecha y hora, y un array de meses con año, mes y valor. Ordenado por año y mes. Ejemplo:

```javascript
{
  "fecha": "2023/04/21 05:11:48",
  "meses": [
    {
      "anio": "2022",
      "mes": "4",
      "valor": "198.97"
    },
    {
      "anio": "2022",
      "mes": "5",
      "valor": "197.39"
    },
    {
      "anio": "2022",
      "mes": "6",
      "valor": "215.77"
    },
    {
      "anio": "2022",
      "mes": "7",
      "valor": "280.68"
    },
    {
      "anio": "2022",
      "mes": "8",
      "valor": "291.55"
    },
    {
      "anio": "2022",
      "mes": "9",
      "valor": "281.30"
    },
    {
      "anio": "2022",
      "mes": "10",
      "valor": "278.90"
    },
    {
      "anio": "2022",
      "mes": "11",
      "valor": "300.17"
    },
    {
      "anio": "2022",
      "mes": "12",
      "valor": "306.42"
    },
    {
      "anio": "2023",
      "mes": "1",
      "valor": "364.61"
    },
    {
      "anio": "2023",
      "mes": "2",
      "valor": "378.36"
    },
    {
      "anio": "2023",
      "mes": "3",
      "valor": "369.29"
    }
  ]
}
```

La información es obtenida de diversas fuentes financieras confiables, proporcionando datos actualizados y precisos.

### Contribuciones y sugerencias

Si encuentras algún error o tienes alguna sugerencia para mejorar esta API, no dudes en abrir un Issue o un Pull Request en nuestro repositorio de GitHub. ¡Tu colaboración es bienvenida!

### Licencia

Esta API está distribuida bajo la licencia MIT. Consulta el archivo `LICENSE` en nuestro repositorio de GitHub para obtener más información.

### Créditos

Este proyecto ha sido desarrollado por [Franco Carballar](https://github.com/francocarballar/) y inspirado en el repositorio de [Ramiro Castrogiovanni](https://github.com/Castrogiovanni20/). Si deseas ponerte en contacto con migo, puedes hacerlo a través de:

<a href="https://linkedin.com/in/francocarballar">
    <img src="./public/img/logo-linkedin.png" alt="Perfil de Linkedin de Franco Carballar" width="50px" height="50px">
</a>
<a href="https://twitter.com/francocarballa">
    <img src="./public/img/logo-twitter.png" alt="Perfil de Twiiter de Franco Carballar" width="50px" height="50px">
</a>
