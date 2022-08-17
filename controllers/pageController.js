import Shop from "../models/shop.js"
import Item from "../models/item.js"


class pageController{
    renderIndex = (req, res) =>{
        Shop
        .find()
        .then((shops)=>{
            res.render('index', {'shops': shops})
        })
        .catch((error)=>{console.log(console.error())})
    }

    renderItems = (req, res) =>{
        const id = req.query.item
        Item
        .find({shopId: id})
        .then((items)=>{
            res.send(items)
        })
    }
}

export default new pageController()
