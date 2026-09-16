import express from "express";
import { ENV } from "./lib/env.js";

const app = express();


console.log(ENV.PORT);
console.log(ENV.DB_URL);
app.get("/help", (req,res) => {
    res.status(200).json({msg: "success at this  api"});
});
app.listen(ENV.PORT,() => console.log("server is running on port 3000"))