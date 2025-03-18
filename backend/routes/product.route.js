import express from "express";

import {getproducts, createproducts, updateproducts, deleteproducts}  from '../controllers/product.controller.js';




const router = express.Router();

router.get("/", getproducts);

router.post("/", createproducts);

router.put("/:id", updateproducts);

router.delete("/:id", deleteproducts);
export default router;