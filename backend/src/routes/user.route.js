import { Router } from "express";
import {
  addAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
  addToWishList,
  getWishList,
  removeFromWishList,
} from "../controllers/user.controller.js";

const router = Router();
//optimization - DRY
router.use(protectRoute);

//address routes

router.post("/addresses", addAddress);
router.get("/addresses", getAddresses);
router.put("/addresses/:addressId", updateAddress);
router.delete("/addresses/:addressId", deleteAddress);

//wishlist routes
router.post("/wishlist", addToWishList);
router.get("/wishlist", getWishList);
router.delete("/wishlist/:productId", removeFromWishList);

export default router;
