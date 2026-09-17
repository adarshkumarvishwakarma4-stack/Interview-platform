import express from "express";
import path from "path"
import { ENV } from "./lib/env.js";

const app = express();


const __dirname= path.resolve()
app.get("/help", (req,res) => {
    res.status(200).json({msg: "success at this  api"});
});
app.get("/books", (req,res) => {
    res.status(200).json({msg: "this is the books endpoint"});
});
// make ready for deploy 
if(ENV.NODE_ENV== "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
app.get("/{*any}" ,(req,res) =>{
    res.sendFile(path.join(__dirname, "../frontend", "dist" , "index.html"));
    
}) 

}

app.listen(ENV.PORT,() => console.log("server is running on port 3000"))