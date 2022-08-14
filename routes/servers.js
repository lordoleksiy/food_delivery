import {Router} from "express";
import Shop from "./models/shop.js";
const router = Router();

router.post("/add_shop", (req, res)=>{
    const {name} = req.body
    new Shop({name})
    .save()
    .then((result)=>{res.send(result)})
    .catch((error)=>{console.log(error)})
})

export default router;
