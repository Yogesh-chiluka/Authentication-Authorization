import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js"
import mongoose from "mongoose"


const getProductById = asyncHandler( async (req, res) => {

    const { productId } = req.body;

    
})