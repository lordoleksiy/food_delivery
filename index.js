import express from "express";
import  path  from "path";
import mongoose from "mongoose";
import serverRoutes from './routes/servers.js';
import pageController from './controllers/pageController.js';

const app = express()
const db = 'mongodb+srv://LordOleksiy:kl3004@cluster0.md0ynza.mongodb.net/InternetShop?retryWrites=true&w=majority'

app.use(express.json())
app.use(serverRoutes)
app.set("view engine", "ejs")
app.use(express.static(path.resolve() + '\\demo'))
app.set("views", path.resolve(path.resolve(), "ejs"))

const PORT = 3000;

app.get('/', pageController.renderIndex)

app.get('/cart', (req, res)=>{
    res.render("cart")
})

function launch(){
    try {
        mongoose.connect(db, {
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