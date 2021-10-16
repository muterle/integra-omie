import { Router, Request, Response } from 'express'
import axios from 'axios'

import customerService from '../services/customer.service'

const customerRouter = Router()

customerRouter.get('/get', async (req: Request, res: Response) => {
  const { codigo_cliente_omie, codigo_cliente_integracao } = req.query

  return await customerService.get(res, codigo_cliente_omie, codigo_cliente_integracao)
})

customerRouter.get('/', async (req: Request, res: Response) => {
  const { pagina, registros_por_pagina, apenas_importado_api } = req.query

  return await customerService.list(res, pagina, registros_por_pagina, apenas_importado_api)
})

customerRouter.post('/', async (req: Request, res: Response) => {
  return await customerService.create(res, req.body)
})

customerRouter.delete('/', async (req: Request, res: Response) => {
  const { codigo_cliente_omie, codigo_cliente_integracao } = req.query

  return await customerService.remove(res, codigo_cliente_omie, codigo_cliente_integracao)
})

export default customerRouter
