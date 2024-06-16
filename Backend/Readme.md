# Backend for Authentication and Authorization

Backend with Javascript

## Data Base connection

The `src/db/index.js` file connects MongoDB database

```javascript
import mongoose from "mongoose"
import { DB_Name } from "../constants.js"

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGODB connection error",error)
        process.exit(1)
    }
}

export default connectDB
```

## Authenticaion Middleware

The `src/middlewares/auth.middleware.js` file connects MongoDB database

```javascript
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"


export const verifyJWT = asyncHandler( async(req, _, next) => {

    try{
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","")

        if(!token){
            throw new ApiError(401, "Unauthorized request")
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select("-password -refreshtoken")

        if(!user){
            throw new ApiError(401, "Invalid Access Token")
        }

        req.user = user

        next();
    }catch(error){
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }
})
```

## Register new User
![Register new User](http://url/to/img.png)