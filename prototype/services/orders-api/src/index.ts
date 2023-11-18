import express from 'express'
import * as path from 'path'
import cors from 'cors'

import { getOrders } from './seed'

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/orders', async (req, res) => {
  await res.send(getOrders())
})

const port = 8080

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

server.on('error', console.error)
