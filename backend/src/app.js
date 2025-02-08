import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import productsRoutes from './routes/products.routes.js'

const app = express()

app.set("Port", process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(cors("*"))
app.use(express.json())

app.use("/api/products", productsRoutes)

export default app