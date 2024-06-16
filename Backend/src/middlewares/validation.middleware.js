import { 
    userRegisterSchema,
    userLoginSchema
 } from "../schemas/user.schema.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"



const userRegisterValidation = asyncHandler(async(req,res,next) => {
    const {error, value} = userRegisterSchema.validate(req.body)
    
    if(error) {
        throw new ApiError(400, "Invalid user details", error.details[0].message)
    }

    next()
})

const userLoginValidation = asyncHandler( async(req, res, next) => {
    const {error, value} = userLoginSchema.validate(req.body)
    
    if(error) {
        throw new ApiError(400, "Invalid user details", error.details[0].message)
    }

    next()
})


export {
    userRegisterValidation,
    userLoginValidation
}