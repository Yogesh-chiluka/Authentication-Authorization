import Joi from "joi"

// Defining Joi Schema for user

const userRegisterSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    fullname: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(50).required(),
    role: Joi.string().regex(/^(Owner|Admin|User)$/).required()
})

const userLoginSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(50).required(),
}).or('username','email')

export {
    userRegisterSchema,
    userLoginSchema
}