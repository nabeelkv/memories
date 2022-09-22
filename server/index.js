import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true })); //to receive request
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); //to send request
app.use(cors());

app.use('/posts', postRoutes); //added prefix for all posts.js routes for posts

//Datbase setup (MangoDB Atlas Cluster - Online Cloud Database)
const CONNECTION_URL = 'mongodb+srv://nabeel:nabeel123@cluster0.ma6in1j.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));