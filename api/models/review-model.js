import { Schema, model } from 'mongoose';
import User from './user-model.js';

const reviewSchema = new Schema({
    gigId:{
        type: String,
        required: true,
    },
  user: {
    type: Schema.Types.ObjectId,
    ref: User, 
    required: true,
  },
  star: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  desc: {
    type: String,
    required: true,
  }
},{
    timestamps: true,
});

const Review = model('Review', reviewSchema);

export default Review;
