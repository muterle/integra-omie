import { Response } from 'express'
import axios from 'axios'

const get = async (res: Response, codigo_pedido: any) => {
  const body = {
    call: 'ConsultarPedido',
    app_key: process.env.OMIE_APP_KEY,
    app_secret: process.env.OMIE_APP_SECRET,
    param: [
      {
        codigo_pedido,
      },
    ],
  }

  await axios
    .post(`${process.env.BASE_URL_OMIE}/produtos/pedido/`, body, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((resp) => {
      return res.status(resp.status).json(resp.data)
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data)
    })
}

const list = async (
  res: Response,
  pagina: any,
  registros_por_pagina: any,
  apenas_importado_api: any
) => {
  const body = {
    call: 'ListarPedidos',
    app_key: process.env.OMIE_APP_KEY,
    app_secret: process.env.OMIE_APP_SECRET,
    param: [
      {
        pagina,
        registros_por_pagina,
        apenas_importado_api,
      },
    ],
  }

  await axios
    .post(`${process.env.BASE_URL_OMIE}/produtos/pedido/`, body, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((resp) => {
      return res.status(resp.status).json(resp.data)
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data)
    })
}

const create = async (res: Response, data: any) => {
  const body = {
    call: 'IncluirPedido',
    app_key: process.env.OMIE_APP_KEY,
    app_secret: process.env.OMIE_APP_SECRET,
    param: [data],
  }

  await axios
    .post(`${process.env.BASE_URL_OMIE}/produtos/pedido/`, body, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((resp) => {
      return res.status(resp.status).json(resp.data)
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data)
    })
}

const changeStep = async (
  res: Response,
  codigo_pedido: any,
  codigo_pedido_integracao: any,
  etapa: any
) => {
  const body = {
    call: 'TrocarEtapaPedido',
    app_key: process.env.OMIE_APP_KEY,
    app_secret: process.env.OMIE_APP_SECRET,
    param: [
      {
        codigo_pedido,
        codigo_pedido_integracao,
        etapa,
      },
    ],
  }

  await axios
    .post(`${process.env.BASE_URL_OMIE}/produtos/pedido/`, body, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((resp) => {
      return res.status(resp.status).json(resp.data)
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data)
    })
}

export default { get, list, create, changeStep }
