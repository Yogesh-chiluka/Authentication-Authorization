import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js"
import mongoose from "mongoose"

const generateAccessTokenAndRefreshToken = async(userId) => {
    try{
        const user = await User.findById(userId)

        const accessToken = user.generateAccessToken()

        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken

        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}

    }catch(error){

        throw new ApiError(400, "Something went wrong while generating token")
    }
}

const registerUser = asyncHandler( async(req, res) => {
    const {fullname, username, email, password, role} = req.body

    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })
    let registrationStatus = 'accepted'
    if(role === 'Seller'){
        registrationStatus = 'registered';
    }

    if(existedUser){
        throw new ApiError(400, "User with email or username already exist")
    }

    const user = await User.create({
        fullname, 
        username: username.toLowerCase(),
        email,
        password,
        role,
        registrationStatus,
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshtoken"
    )

    if(!createdUser){
        throw new ApiError(400, "something went wrong while registering user")
    }

    return res.status(200)
    .json(
        new ApiResponse(201, createdUser, "User registered successfully")
    )
})


const loginUser = asyncHandler( async(req, res) => {
    const {email, role, password} = req.body

    const user = await User.findOne({
        email,
        role
    })

    if(!user){
        throw new ApiError(400, "User dosen't exist")
    }
    
    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(400, "Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessTokenAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select(" -password -refreshtoken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
            
                loggedInUser, accessToken, refreshToken
                ,
                "User logged in successfully"
            )
        )
})

const logoutUser = asyncHandler( async(req, res) => {
    User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken",options)
        .clearCookie("refreshToken",options)
        .json(
           new ApiResponse(200, "User successfully loggedout")
        )
})

const refreshAccessToken = asyncHandler(async(req,res) => {
    
    const incomingRefreshTokenn = req.cookie.refreshToken || req.body.refreshToken

    if(!incomingRefreshTokenn){
        throw new ApiError(401,"Unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshTokenn,
            process.env.ACCESS_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if(!user){
            throw new ApiError(401,"Invalid refresh token")
        }
    
        if(incomingRefreshTokenn !== user?.refreshtoken){
            throw new ApiError(401,"Refresh token is expired or used")
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefreshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken",accessToken, options)
        .cookie("refreshToken",refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    accessToken,
                    refreshToken : newRefreshToken 
                },
                "Access token refreshed"
            )
        )
    
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token" )
    }
})

const getAllUsers = asyncHandler( async(req,res) => {
    
    const { page = 1, limit = 10} = req.query;

    const getAllUsers = User.find();


})

const registerSeller = asyncHandler( async(req, res) => {

    const {fullname, username, email, password, role, registrationStatus} = req.body

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
        role,
        registrationStatus,
    })

    const registeredSellerInfo = await User.findById(user._id).select(
        "-password -refreshtoken"
    )

    if(!registeredSellerInfo){
        throw new ApiError(400, "something went wrong while registering user")
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(201, registeredSellerInfo, "Seller registered successfully")
    )

})

const registerManager = asyncHandler( async(req, res) => {

    const {fullname, username, email, password, role, registrationStatus} = req.body

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
        role,
        registrationStatus,
    })

    const registedManagerInfo = await User.findById(user._id).select(
        "-password -refreshtoken"
    )

    if(!registedManagerInfo){
        throw new ApiError(400, "something went wrong while registering user")
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(201, registedManagerInfo, "Seller registered successfully")
    )

})


export{
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    getAllUsers,
    registerSeller,
    registerManager,
    
}