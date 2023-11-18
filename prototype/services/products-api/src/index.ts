import express from 'express'
import * as path from 'path'
import { getProducts } from './seed'
import cors from 'cors'

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/api/products', async (req, res) => {
  await res.send(getProducts)
})

const port = 3001
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)
