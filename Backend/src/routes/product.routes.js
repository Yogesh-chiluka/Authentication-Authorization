import { Router } from "express";
import { getProductById,
    addNewProductFromExistingList,
    updateProductData,
    getAllProducts,
} from "../controllers/products.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(getAllProducts);

router.route("/:productId").get(getProductById).patch(verifyJWT,updateProductData);




export default router;
