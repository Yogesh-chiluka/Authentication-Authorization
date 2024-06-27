import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Product } from "../models/product.model.js"
import mongoose, { isValidObjectId } from "mongoose"


const getProductById = asyncHandler( async (req, res) => {

    const { productId } = req.body;

    if(!isValidObjectId(productId)){
        throw new ApiError(400, "Invalid productId");
    }

    const product = await Product.findById(productId);
    
    if(!product){
        throw new ApiError(400,"product doesn't exist or something went wrong")
    }

    res
    .status(200)
    .json(
        new ApiResponse(200, product, "product successfully fetched")
    );
})

const addNewProductFromExistingList = asyncHandler( async (req, res) => {

    const { title, description, price, stock, rating, brand, category, thumbnail, images} = req.body;
    
})

const updateProductData = asyncHandler( async(req, res) => {

    //const { productId, description, price, stock } = req.body;


    if(!isValidObjectId(product)){
        throw new ApiError(400, "Invalid productId");
    }

    const updateProduct = await Product.findByIdAndUpdate(
        productId,
        {
            $set:{
                description,
                price,
                stock
            }
        },
        {new: true}
    )

    await updataProduct.save();

    if(!updataProduct){
        throw new ApiError(400, "Error while updating product data");
    }

    res
    .status(200)
    .json(
        new ApiResponse(200, updataProduct, "product data updated successfully")
    )
})

const getAllProducts = asyncHandler( async(req, res) => {
    //const {query, sortBy, sortType, page = 1, limit = 10 } = req.body;

    const allProducts = await Product.find();

    if(!allProducts){
        throw new ApiError(400, "Error while fetching products");
    }


    res.status(200).json(
        new ApiResponse(400, allProducts, "Successfully fetched all products")
    )

    // title, description = query
    // sort by brand, category, salesperson,
})
export {
    getProductById,
    addNewProductFromExistingList,
    updateProductData,
    getAllProducts,
}


//const gettProucts by query and category

/*

add validations for controller funcions




models users, products, bag, 


owner -> create mangaes

// add status to user only for seller role
manager -> page verify, approve/reject

seller -> regestration


        -> salesPerson login 
        -> user login for add to bag, billing 

        -> login options seller/user or buyer
        -> admin/ will accept the seller after verifying

                   buyer ----------- userlogin , logout product list page, add to bag, billing
        ---------
                  seller  --------- registraion, login, logout, registraion process , add product list, update product list.

        register page -> register -> redirect to page state [ processing state ]
    

        seller registration process state register -> pending from approval -> verification in progress -> wating for manager approval -> approved.

        add status to user model
        status: pending || verification || approval || approved || rejected 


        regestered -> add items to product from add product page


        roles : user/buyer || seller || manager || owner

        || owner create managers 
         
        user directly created 

        seller register and approved from managers.



    */

