import express from 'express'
import morgan from 'morgan'

const app = express()

app.set("Port", process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(express.json())

app.use("/products")

export default app