import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createPaymenyIntent } from "../controllers/payment.controller.js";
import { handleWebhook } from "../controllers/product.controller.js";


const router = Router();

router.post("/create-intent", protectRoute,createPaymenyIntent)
//No auth needed - Stripe validates via signature
router.post("/webhook", handleWebhook,)


export default router;