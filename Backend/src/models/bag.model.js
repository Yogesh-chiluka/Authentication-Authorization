

import mongoose, {Schema} from "mongoose";

const bagSchema = new Schema(
    {
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ]
    }
)



export const Bag = mongoose.model('Bag',bagSchema);