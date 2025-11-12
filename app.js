import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js';
import './models/studentSchema.js';
// import { studentDoc } from './models/studentSchema.js';
import { allstudentDoc } from './models/studentSchema.js';

dotenv.config();
const app = express();

//database URI
const DATABASE_URL = "mongodb://localhost:27017/mall";
// const DATABASE_URL = "mongodb://root:12345@0.0.0.0:27017/mall?authSource=mall";
// connecting to database with db name is auth
connectDB(DATABASE_URL);

// function to insert documents
// studentDoc();

// function to retrieve documents
allstudentDoc();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// pwd  "admin@123.co"
