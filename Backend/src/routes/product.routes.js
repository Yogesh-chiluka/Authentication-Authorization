import { Router } from "express";
import { getProductById,
    addNewProductFromExistingList,
    updateProductData,
} from "../controllers/products.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/:productId").get(getProductById).patch(verifyJWT,updateProductData);


export default router;
