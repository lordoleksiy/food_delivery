import express from "express";
import  path  from "path";
import mongoose from "mongoose";

const app = express()

app.set("view engine", "ejs")
app.use(express.static(path.resolve() + '\\demo'))
app.use(express.json())
app.set("views", path.resolve(path.resolve(), "ejs"))

const PORT = 3000;

app.get('/', (req, res)=>{
    res.render("index")
})

app.get('/cart', (req, res)=>{
    res.render("cart")
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