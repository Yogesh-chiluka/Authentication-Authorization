import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Product } from "../models/product.model.js"
import mongoose, { isValidObjectId } from "mongoose"
import { Bag } from "../models/bag.model.js"

const addProductById = asyncHandler( async(req, res) => {
    const { productId } = req.body;

    if(!isValidObjectId(productId)){
        throw new ApiError(400, "Invalid product Id");
    }

    const product = await Product.findById(productId);

    if(!product){
        throw new ApiError(400, "Product doesn't exist");
    }
    
    const addToBag = await Bag.findByIdAndUpdate(
        producyId,
        {
            $push: { 
                products: productId
        } 
        },
        {
            new: true
        }
    )
    await updateComment.save()
    if(!addToBag){
        throw new ApiError(400, "Error while updating bag")
    }

    res
    .status(200)
    .json(
        new ApiResponse(200, removeProduct, "product successfully added")
    );
})


const removeProductById = asyncHandler( async(req, res) => {
    const { productId } = req.body;

    if(!isValidObjectId(productId)){
        throw new ApiError(400, "Invalid product ID");
    }

    const product = await Product.findById(productId);

    if(!product){
        throw new ApiError(400, "Product doesn't exist");
    }

    const removeProduct = await Bag.findByIdAndUpdate(
        productId,
        {
            $pull: {
                products: productId
            }
        },
        {
            new: true
        }
    )
    await updateComment.save()
    if(!removeProduct){
        throw new ApiError(400, "Error while updating bag");
    }

    res
        .status(200)
        .json(
            new ApiResponse(200, removeProduct, "product successfully removed")
        );
})





//const addToBag 

//const removeFromBag

// billing on front end only



