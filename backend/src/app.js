import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import productsRoutes from './routes/products.routes.js'
import usersRoutes from './routes/users.routes.js'
import cartRoutes from './routes/cart.routes.js'

const app = express()

app.set("Port", process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(cors("*"))
app.use(express.json())

app.use("/api/products", productsRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/cart", cartRoutes);

export default app