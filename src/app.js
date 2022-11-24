import express from 'express'
import billRoutes from './routes/bills.routes.js'

// settings
const app = express()

// middleware
app.use(express.json())
app.use("/api", billRoutes)

// Routes
app.get('/', (req, res) => {
    res.send('Pizza Central API')
})

export default app