import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: "https://ubiquitous-giggle-rwqwjqwwjw6fp9g7-8000.app.github.dev/",
    credentials: true
}))
//origin: process.env.CORS_ORIGIN ,
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import logger from "./utils/logger.js";
import morgan from 'morgan';

const morganFormat = ':method :url :status :response-time ms';

app.use(morgan(morganFormat, {
  stream: {
    write: (message) => {
      const logObject = {
        method: message.split(' ')[0],
        url: message.split(' ')[1],
        status: message.split(' ')[2],
        responseTime: message.split(' ')[3],

      };
      logger.info(JSON.stringify(logObject));
    }
  }
}));

import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'

app.use('/api/v1/users',userRouter);
app.use('/api/v1/products',productRouter);

export { app }