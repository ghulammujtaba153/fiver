import { Schema, model } from 'mongoose';

const conversationSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    sellerId:{
        type: String,
        required: true,
    },
    buyerId:{
        type: String,
        required: true,
    },
    readBySeller:{
        type: Boolean,
        required: true,
    },
    readByBuyer:{
        type: Boolean,
        required: true,
    },
    lastMessage:{
        type: String,
        required: false,
    },

});


const Conversation = model('Conversation', conversationSchema);

export default Conversation;
