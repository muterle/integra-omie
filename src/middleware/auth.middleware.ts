import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export default (req: Request, res: Response, next: any) => {
  console.log(req.headers)

  const token = req.headers['authorization']?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' })

  jwt.verify(token, process.env.SECRET_KEY || '', function (err, decoded: any) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
    next()
  })
}
