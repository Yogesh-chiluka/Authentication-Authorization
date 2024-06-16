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
            
        }
        price:{
            type:Number,
            required: true,
        },
        salesperson:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        rating:{
            type: Schema.Types.Decimal128,
            required: true,
            default: mongoose.Types.Decimal128.fromString('0'),
        },
        stock:{
            type:Number,
            required: true,
            default:0,
        },
        brand:{
            type: String,
            required: true,
        },
        category:{
            typeof: String,
            required: true,
        },
        images:{
            type: [String],
            required: true,
        },
        {

        }

    },{
        timestamps: true
    }
)