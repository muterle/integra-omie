import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import userService from '../services/user.service'

const authRouter = Router()

authRouter.post('/token', async (req: Request, res: Response) => {
  const { username, password } = req.body

  const user = await userService.login(username, password)

  if (user) {
    const token = jwt.sign(user, process.env.SECRET_KEY || 'secretKey', {
      expiresIn: 300,
    })
    return res.json({ auth: true, access_token: token })
  }

  res.status(401).json({ message: 'Invalid login!' })
})

export default authRouter
