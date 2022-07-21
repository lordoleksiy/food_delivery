import express from "express";
import  path  from "path";
import mongoose from "mongoose";
import Shop from "./models/shop.js"

const app = express()

app.use(express.json())
app.use(express.static(path.resolve(path.resolve(), "views")))

const PORT = 3000;

app.post("/add_shop", (req, res)=>{
    const {name} = req.body
    new Shop({name})
    .save()
    .then((result)=>{res.send(result)})
    .catch((error)=>{console.log(error)})
})

function launch(){
    try {
        mongoose.connect('mongodb+srv://LordOleksiy:kl3004@cluster0.md0ynza.mongodb.net/InternetShop?retryWrites=true&w=majority', {
            useNewUrlParser: true,
        })
        app.listen(PORT, ()=>{
            console.log(`Express Server is running on port: http://localhost:${PORT}`);
        })
    } catch (e) {
        console.log(e)
    }
}

launch()