import { Router } from "express";
import { registerUser,

} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { userRegisterValidation } from "../middlewares/validation.middleware.js";

const router = Router()

router.route("/register").post(userRegisterValidation, registerUser)





export default router 
