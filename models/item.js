import mongoose from 'mongoose';

const Schema = mongoose.Schema
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    shopId: {
        type: String,
        required: true
    }
})

const Item = mongoose.model("Item", itemSchema)
export default Item