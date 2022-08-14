import Shop from "../models/shop.js"


class shopController{
    getShops = (req, res)=>{
        Shop
        .find()
        .then((shops)=>{res.send(shops)})
        .catch((error)=>{console.log(console.error())})
    }

    addShop = (req, res)=>{
        const {name} = req.body
        new Shop({name})
        .save()
        .then((result)=>{res.send(result)})
        .catch((error)=>{console.log(error)})
    }
}

export default new shopController()
