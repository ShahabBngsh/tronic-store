// import path from 'path';
import express from 'express';

import connectDb from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
// import 

connectDb()

const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// app.get('*', (req, res) => {
//   res.senfFile(path.resolve(__dirname, 'frontend', 'build'))
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on PORT ${PORT}`))