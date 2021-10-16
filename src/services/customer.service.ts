import { Response } from 'express'
import axios from 'axios'

const get = async (res: Response, codigo_cliente_omie: any, codigo_cliente_integracao: any) => {
  const body = {
    call: 'ConsultarCliente',
    app_key: process.env.OMIE_APP_KEY,
    app_secret: process.env.OMIE_APP_SECRET,
    param: [
      {
        codigo_cliente_omie,
        codigo_cliente_integracao,
      },
    ],
  }

  await axios
    .post(`${process.env.BASE_URL_OMIE}/geral/clientes/`, body, {
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
    call: 'ListarClientes',
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
    .post(`${process.env.BASE_URL_OMIE}/geral/clientes/`, body, {
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
    call: 'IncluirCliente',
    app_key: process.env.OMIE_APP_KEY,
    app_secret: process.env.OMIE_APP_SECRET,
    param: [data],
  }

  await axios
    .post(`${process.env.BASE_URL_OMIE}/geral/clientes/`, body, {
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

const remove = async (res: Response, codigo_cliente_omie: any, codigo_cliente_integracao: any) => {
  const body = {
    call: 'ExcluirCliente',
    app_key: process.env.OMIE_APP_KEY,
    app_secret: process.env.OMIE_APP_SECRET,
    param: [
      {
        codigo_cliente_omie,
        codigo_cliente_integracao,
      },
    ],
  }

  await axios
    .post(`${process.env.BASE_URL_OMIE}/geral/clientes/`, body, {
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

export default { get, list, create, remove }
