import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js"
import mongoose from "mongoose"

const registerUser = asyncHandler( async(req, res) => {
    const {fullname, username, email, password, role} = req.body

    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })

    if(existedUser){
        throw new ApiError(400, "User with email or username already exist")
    }

    const user = await User.create({
        fullname, 
        username: username.toLowerCase(),
        email,
        password,
        role
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshtoken"
    )

    if(!createdUser){
        throw new ApiError(400, "something went wrong while registering user")
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(201, createdUser, "User registered successfully")
    )
})


export{
    registerUser,
}