# Argentine Monetary Quotes API

This API allows you to obtain real-time quotes for different currencies and financial data, including the US dollar, euro, reserves, evolution, and country risk.

## Documentation language:

[<img src="./public/img/english_flag.png" alt="English" width="20"> English](./README_EN.md) | [<img src="./public/img/spanish_flag.png" alt="Español" width="20"> Español](./README.md)

## Endpoints

Base URL: `https://github.com/francocarballar/`

| Method | Endpoint                       | Description                                  |
| ------ | ------------------------------ | -------------------------------------------- |
| GET    | /api/all                       | All available values                         |
| GET    | /api/dolar/oficial             | Official USD quote                           |
| GET    | /api/dolar/blue                | Blue USD quote                               |
| GET    | /api/contadoliqui              | USD Cash with Liquidation quote              |
| GET    | /api/dolar/promedio            | Average USD quote                            |
| GET    | /api/dolar/turista             | Tourist USD quote                            |
| GET    | /api/dolar/bolsa               | Stock Exchange USD quote                     |
| GET    | /api/dolar/mayorista           | Wholesale Bank USD quote                     |
| GET    | /api/riesgopais                | Country risk value                           |
| GET    | /api/bbva                      | BBVA Bank USD quote                          |
| GET    | /api/piano                     | Piano Bank USD quote                         |
| GET    | /api/hipotecario               | Hipotecario Bank USD quote                   |
| GET    | /api/galicia                   | Galicia Bank USD quote                       |
| GET    | /api/santander                 | Santander Bank USD quote                     |
| GET    | /api/ciudad                    | Ciudad Bank USD quote                        |
| GET    | /api/supervielle               | Supervielle Bank USD quote                   |
| GET    | /api/patagonia                 | Patagonia Bank USD quote                     |
| GET    | /api/comafi                    | Comafi Bank USD quote                        |
| GET    | /api/nacion                    | Nación Bank USD quote                        |
| GET    | /api/bind                      | Industrial Bank USD quote                    |
| GET    | /api/bancor                    | Córdoba Bank USD quote                       |
| GET    | /api/chaco                     | New Chaco Bank USD quote                     |
| GET    | /api/pampa                     | La Pampa Bank USD quote                      |
| GET    | /api/casas/caba/metropolis     | Metrópolis Financial Company USD quote       |
| GET    | /api/casas/caba/alpe           | Alpe Exchange USD quote                      |
| GET    | /api/casas/caba/vaccaro        | Francisco Vaccaro USD quote                  |
| GET    | /api/casas/caba/transatlantica | Transatlantica USD quote                     |
| GET    | /api/casas/lp/tilos            | Los Tilos Exchange USD quote                 |
| GET    | /api/casas/mdp/jonestur        | Jonestur USD quote                           |
| GET    | /api/casas/mdp/moneta          | La Moneta Exchange USD quote                 |
| GET    | /api/casas/mdp/exchange        | Mar del Plata Exchange USD quote             |
| GET    | /api/casas/rosario/daminato    | Daminato Travel and Exchange USD quote S.A.  |
| GET    | /api/casas/mendoza/montemar    | Montemar Financial Company USD quote         |
| GET    | /api/casas/tucuman/maguitur    | Maguitur USD quote                           |
| GET    | /api/euro/nacion               | Nación Bank EUR quote                        |
| GET    | /api/euro/galicia              | Galicia Bank EUR quote                       |
| GET    | /api/euro/bbva                 | BBVA Bank EUR quote                          |
| GET    | /api/euro/pampa                | La Pampa Bank EUR quote                      |
| GET    | /api/euro/chaco                | New Chaco Bank EUR quote                     |
| GET    | /api/euro/hipotecario          | Hipotecario Bank EUR quote                   |
| GET    | /api/real/nacion               | Nación Bank BRL quote                        |
| GET    | /api/real/bbva                 | BBVA Bank BRL quote                          |
| GET    | /api/real/chaco                | New Chaco Bank BRL quote                     |
| GET    | /api/bcra/reservas             | BCRA reserves in USD                         |
| GET    | /api/bcra/circulante           | Total amount of pesos in circulation         |
| GET    | /api/evolucion/dolaroficial    | Annualized monthly evolution of official USD |
| GET    | /api/evolucion/dolarblue       | Annualized monthly evolution of blue USD     |
| GET    | /api/evolucion/realoficial     | Annualized monthly evolution of official BRL |
| GET    | /api/evolucion/eurooficial     | Annualized monthly evolution of official EUR |

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/22004185-1fbecbc9-3258-4d41-bb3e-a9fddc57408a?action=collection%2Ffork&collection-url=entityId%3D22004185-1fbecbc9-3258-4d41-bb3e-a9fddc57408a%26entityType%3Dcollection%26workspaceId%3Dacd253cd-93e0-43b2-8df5-ad85bc2cd82d)

### Responses

All quote endpoints return the date and time, the purchase value, and the sale value. Example:

```javascript
{
  fecha: "2023/04/21 05:26:42",
  compra: "418.00",
  venta: "422.00"
}
```

Evolution endpoints return the date and time, and an array of months with year, month, and value. Sorted by year and month. Example:

```javascript
{
  "fecha": "2023/04/21 05:14:01",
  "valor": "37220000000",
  "moneda": "USD"
}
```

Evolution endpoints return the date and time, and an array of months with year, month, and value. Sorted by year and month. Example:

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

The information is obtained from various reliable financial sources, providing up-to-date and accurate data.

### Contributions and suggestions

If you find any errors or have any suggestions to improve this API, please do not hesitate to open an Issue or a Pull Request in our GitHub repository. Your collaboration is welcome

### License

This API is distributed under the MIT license. Check the `LICENSE` file in our GitHub repository for more information.

### Credits

This project has been developed by [Franco Carballar](https://github.com/francocarballar/) and inspired by the repository of [Ramiro Castrogiovanni](https://github.com/Castrogiovanni20/). If you wish to get in touch with me, you can do so through:

<a href="https://linkedin.com/in/francocarballar">
    <img src="./public/img/logo-linkedin.png" alt="Franco Carballar Linkedin Profile" width="50px" height="50px">
</a>
<a href="https://twitter.com/francocarballa">
    <img src="./public/img/logo-twitter.png" alt="Franco Carballar Twitter Profile" width="50px" height="50px">
</a>
