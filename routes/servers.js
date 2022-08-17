import express from "express";
import shopController from "../controllers/shopController.js"
import pageController from "../controllers/pageController.js";
const router = express.Router()

router.get("/shop/get", shopController.getShops)
router.post("/add_shop", shopController.addShop)
router.get("/renderItems", pageController.renderItems)

export default router;
