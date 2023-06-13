import express from "express"
import colors from "colors"
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js"
import categoryRoute from "./routes/categoryRoute.js"
import productRoutes from "./routes/productRoutes.js";

import cors from "cors"
const app = express();
const port=8080;

// config env//
dotenv.config();

//database config
connectDB();

// middlewares//
app.use(cors());
app.use(express.json())
app.use(morgan("dev"))

//router
app.use('/api/v1/auth/',authRoute)
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/product/',productRoutes)

// rest api//
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on mode ${process.env.DEV_MODE} port ${process.env.port}`.bgCyan.bgGreen)
  })