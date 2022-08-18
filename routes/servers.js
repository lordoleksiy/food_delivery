import express from "express";
import shopController from "../controllers/shopController.js"
import pageController from "../controllers/pageController.js";
import itemController from "../controllers/itemController.js";
const router = express.Router()

router.get("/shop/get", shopController.getShops)
router.post("/add_shop", shopController.addShop)

router.get("/renderItems", pageController.renderItems)
router.post("/item/add", itemController.addItem)
router.post("/order", pageController.postOrder)

export default router;
