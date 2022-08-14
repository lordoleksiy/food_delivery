import express from "express";
import shopController from "../controllers/shopController.js"
const router = express.Router()

router.get("/shop/get", shopController.getShops)
router.post("/add_shop", shopController.addShop)

export default router;
