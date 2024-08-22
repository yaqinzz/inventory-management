import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
// ROUTE IMPORTS
import dasboardRoutes from './routes/dashboardRoutes'
import userRouters from './routes/userRoutes'
import productRoutes from './routes/productRoutes'
import expenseRoutes from './routes/expenseRoutes'

// CONFIGURATIONS
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES
app.use('/dashboard', dasboardRoutes)
app.use('/products', productRoutes)
app.use('/users', userRouters)
app.use('/expenses', expenseRoutes)
app.get('/', (req, res) => {
	res.status(200).json({ message: 'Server is up and running!' })
})
// SERVER

const port = process.env.PORT || 3001
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
