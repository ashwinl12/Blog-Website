import express from "express";
import cors from "cors";
import DotEnv from "dotenv";

const app = express();
DotEnv.config();

/* components */
import Connection from "./database/db.js";
import Router from "./routes/route.js";

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', Router);

if( process.env.NODE_ENV === 'production' ) {
    app.use(express.static('client/build'));
}

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`server up and running on port ${port}`);
})

const URL = "mongodb+srv://user:user123@blogweb.uwo44.mongodb.net/blogdata?retryWrites=true&w=majority"
Connection(process.env.MONGODB_URI || URL);  