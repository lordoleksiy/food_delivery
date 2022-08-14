import Shop from "../models/shop.js"


class pageController{
    renderIndex = (req, res) =>{
        Shop
        .find()
        .then((shops)=>{
            res.render('index', {'shops': shops})
        })
        .catch((error)=>{console.log(console.error())})
    }
}

export default new pageController()
