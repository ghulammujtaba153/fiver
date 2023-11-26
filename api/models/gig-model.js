import { Schema, model } from 'mongoose';

const gigSchema = new Schema({
    userId:{
        type: String,
        required: true,
    },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
  },
  totalStars: {
    type: Number,
    default: 0,
  },
  starNumber: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  shortTitle: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  deliveryTime: {
    type: Number,
    required: true,
  },
  revisions: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
    required: false,
  },
  sales: {
    type: Number,
    default: 0,
  },
 
},{
    timestamps: true,
});

const Gig = model('Gig', gigSchema);

export default Gig;
