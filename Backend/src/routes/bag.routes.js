import { Router } from "express";
import { 
    addProductById,
    removeProductById,
    getAllUserProductsInBag,
 } from '../controllers/bag.controller.js';
 import { verifyJWT } from "../middlewares/auth.middleware.js";


 const router = Router();
 
 router.use(verifyJWT);

 router.route("/bag").get(getAllUserProductsInBag).patch(addProductById).patch(removeProductById);