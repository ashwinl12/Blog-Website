import mongoose from "mongoose";


const Connection = (URL)=>{
    // const url = "mongodb+srv://user:user123@blogweb.uwo44.mongodb.net/blogdata?retryWrites=true&w=majority";
    console.log("about to connect")
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }).then(()=>{
            console.log("Connection to database successful :)");
        })
        .catch((err)=>{
            console.log("connection not established", err);
        })
}

export default Connection;