import 'reflect-metadata'
import { createConnection } from 'typeorm'

import express, { Application, Request, Response } from 'express'
import cors from 'cors'

import routes from './controllers'

require('dotenv').config()

createConnection()
  .then(async () => {
    const app = express()
    const port = process.env.PORT || 3000

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use('/api/v1', routes)

    try {
      app.listen(port, () => {
        console.log(`Server running on port:${port}`)
      })
    } catch (error: any) {
      console.log(`Error occurred: ${error.message}`)
    }
  })
  .catch((error) => console.log('Connection error: ', error))
