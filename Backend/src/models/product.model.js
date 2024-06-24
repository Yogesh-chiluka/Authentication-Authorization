import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const productSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description:{
            type: String,
            required: true,
        },
        price:{
            type:Number,
            required: true,
        },
        rating:{
            type: Schema.Types.Decimal128,
            default: mongoose.Types.Decimal128.fromString('0'),
        },
        stock:{
            type:Number,
            default:0,
        },
        brand:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        thumbnail:{
            type: String,
            required: true,
        },
        images:{
            type: [String],
            required: true,
        },
        salesperson:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {
        timestamps: true
    }
)


export const Product = mongoose.model("Product",productSchema);