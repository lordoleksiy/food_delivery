import Item from "../models/item.js"

class itemController{
    addItem = (req, res) =>{
        const {name, cost, shopId} = req.body
        if (name && cost && shopId){
            new Item({name, cost, shopId})
            .save()
            .then(result => res.send(result))
            .catch(error => console.log(error))
        }
    }
}

export default new itemController()