

import mongoose, {Schema} from "mongoose";

const bagSchema = new Schema(
    {
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        ],
        owner: {
            type: Schema.Types.ObjectId;
            ref: "User"
        }
    }
)



export const Bag = mongoose.model('Bag',bagSchema);