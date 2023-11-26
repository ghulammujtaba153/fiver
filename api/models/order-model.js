import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
    gigId:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: false,
    },
    title:{
        type: String,
        required: true,
    },

    Price: {
        type: Number,
        required: true,
    },
    sellerId:{
        type: String,
        required: true,
    },
    buyerId:{
        type: String,
        required: true,
    },
    isCompleted:{
        type: Boolean,
        default: false,
    },
    payment_intent:{
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

const Order = model('Order', orderSchema);

export default Order;
