import cloudinary from "../config/cloudinary.js";
import { Product } from "../models/product.model.js";
import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import { json } from "express";

export async function createProduct(req, res) {
  try {
    const { name, description, price, stock, category } = req.body;
    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one image is required" });
    }

    if (req.files.length > 3) {
      return res.status(400).json({ message: "Maximum 3 images allowed" });
    }
    const uploadPromises = req.files.map((file) => {
      return cloudinary.uploader.upload(file.path, {
        folder: "products",
      });
    });

    const uploadResults = await Promise.all(uploadPromises);

    //secure_url

    const imageUrls = uploadResults.map((result) => result.secure_url);

    const product = await Product.create({
      name,
      description,
      price: parseFloat(price),
      stock: parseInt(stock),
      category,
      images: imageUrls,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function addAddress(req, res) {
  try {
    const {
      label,
      fullName,
      streetAddress,
      city,
      state,
      zipCode,
      phoneNumber,
      isDefault,
    } = req.body;

    const user = req.user;

    //  if it is default , unset all other default

    if (isDefault) {
      user.addresses.forEach((addr) => {
        addr.isDefault = false;
      });
    }
    user.addresses.push({
      label,
      fullName,
      streetAddress,
      city,
      state,
      zipCode,
      phoneNumber,
      isDefault: isDefault || false,
    });

    await user.save();

    res.status(201).json({
      message: "Address added successflly",
      addresses: user.addresses,
    });
  } catch (error) {
    console.error("Error in addAddress product", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function getAddresses(req, res) {
  try {
    const user = req.user;

    res.status(200).json({ addresses: user.addresses });
  } catch (error) {
    console.error("Error in getAddress controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function updateAddress(req, res) {
  try {
    const {
      label,
      fullName,
      streetAddress,
      city,
      state,
      zipCode,
      phoneNumber,
      isDefault,
    } = req.body;

    const { addressId } = req.params;

    const user = req.user;
    const address = user.addresses.id(addressId);
    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    }

    if (isDefault) {
      user.addresses.forEach((addr) => {
        addr.isDefault = false;
      });
    }

    address.label = label || address.label;
    address.fullName = fullName || address.fullName;
    address.streetAddress = streetAddress || address.streetAddress;
    address.city = city || address.city;
    address.state = state || address.state;
    address.zipCode = zipCode || address.zipCode;
    address.phoneNumber = phoneNumber || address.phoneNumber;
    address.isDefault = isDefault !== undefined ? isDefault : address.isDefault;
    await user.save();

    res.status(200).json({
      message: "Address updated successfully",
      addresses: user.addresses,
    });
  } catch (error) {
    console.error("Error in updateAddress controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function deleteAddress(req, res) {
  try {
    const { addressId } = req.params;
    const user = req.user;
    user.addresses.pull(addressId);
    await user.save();

    res.status(200).json({
      message: "Address deleted successfully",
      addresses: user.addresses,
    });
  } catch (error) {
    console.error("Error in deleteAddress controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function addToWishList(req, res) {
  try {
    const user = req.user;
    const { productId } = req.body;

    // check if already in the wishList

    if (user.wishlist.includes(productId)) {
      return res.status(400).json({ error: "Product already in the wishList" });
    }
    user.wishlist.push(productId);
    await user.save();
  } catch (error) {
    console.error("Error in addToWishList controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function getWishList(req, res) {
  try {
    const user = req.user;
    res.status(200).json({ wishlist: user.wishlist });
  } catch (error) {
    console.error("Error in getWishList controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function removeFromWishList(req, res) {
  try {
    const user = req.user;
    const { productId } = req.params;

    if (!user.wishlist.includes(productId)) {
      return res.status(400).json({ error: "Product is not in wishList" });
    }

    user.wishlist.pull(productId);
    await user.save();
    // check if already in the wishList
  } catch (error) {
    console.error("Error in removeFromWishList controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
