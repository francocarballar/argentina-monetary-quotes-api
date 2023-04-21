import { type Request, type Response, type NextFunction } from 'express'

export const corsMiddleware = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}
