import 'module-alias/register'
import path from 'path'
import fs from 'fs'
import express, { type ErrorRequestHandler } from 'express'
import helmet from 'helmet'
import router from './routes/router'
import { corsMiddleware } from './middlewares/cors'

const PORT = process.env.PORT ?? 7070
const app = express()

app.get('/', (_req, res) => {
  try {
    const htmlPath = path.join(__dirname, 'index.html')
    const html = fs.readFileSync(htmlPath, 'utf8')
    res.send(html)
  } catch (e) {
    console.error('Ocurrió un error al hacer la petición get en la ruta / ', e)
    res.send(500)
  }
})

// Settings
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(corsMiddleware)
app.use('/', router)

// Error handling middleware
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack)
  res.status(500).send('Ocurrió un error interno.')
}

// Add the error handling middleware after other middlewares and routes
app.use(errorHandler)

// Starting the server
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
