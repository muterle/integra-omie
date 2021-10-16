import { Router, Request, Response } from 'express'
import axios from 'axios'

import orderService from '../services/order.service'

const orderRouter = Router()

orderRouter.get('/:codigo_pedido', async (req: Request, res: Response) => {
  const { codigo_pedido } = req.params

  return await orderService.get(res, codigo_pedido)
})

orderRouter.get('/', async (req: Request, res: Response) => {
  const { pagina, registros_por_pagina, apenas_importado_api } = req.query

  return await orderService.list(res, pagina, registros_por_pagina, apenas_importado_api)
})

orderRouter.post('/', async (req: Request, res: Response) => {
  return await orderService.create(res, req.body)
})

orderRouter.patch('/', async (req: Request, res: Response) => {
  const { codigo_pedido, codigo_pedido_integracao, etapa } = req.query

  return await orderService.changeStep(res, codigo_pedido, codigo_pedido_integracao, etapa)
})

export default orderRouter
