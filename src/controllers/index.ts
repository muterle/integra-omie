import { Router, Request, Response } from 'express'

import authRouter from './auth.controller'
import customerRouter from './customer.controller'
import orderRouter from './order.controller'

import authVerify from '../middleware/auth.middleware'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    message: `Integração com sistema Omie`,
  })
})

router.use('/auth', authRouter)
router.use('/customer', authVerify, customerRouter)
router.use('/order', authVerify, orderRouter)

export default router
