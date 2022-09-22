
import express from "express";
import config from "./database/config.js";
const app = express()
import cors from 'cors'
import web from './routes/web.js'
import contact from './routes/ContactRoutes.js'
import feedbackRoute from './routes/FeedbackRoute.js'
import authRouter from './routes/AuthRoutes.js'
const DATABASE_URL = "mongodb://localhost:27017"
config(DATABASE_URL)
const port = 4000
app.use(express.json())
app.use(cors())
app.use('/blog', web)
app.use('/contact', contact)
app.use('/feedback', feedbackRoute)
app.use('/', authRouter)

app.use(express.static('public/upload/img'))
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});