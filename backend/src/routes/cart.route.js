import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware";

const router = Router();

router.use(protectRoute)

router.get("/",getCart)
router.post("/",addToCart)
router.put("/:productId",updateCartItem)
router.delete("/:productId",removeFromCart)
router.delete("/",clearCart)