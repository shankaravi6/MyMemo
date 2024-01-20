import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'

const app = express()
dotenv.config()
app.use(cors())
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use('/posts', postRoutes)

// const CONNECTION_URL = 'mongodb+srv://shankaravi:shankaravi6@cluster0.mcqc3zk.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
