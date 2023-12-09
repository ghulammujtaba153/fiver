import createError from "../utils/createError.js"
import Review from '../models/review-model.js'


export const createReview = async(req, res, next)=>{
    try {
        if(req.isSeller) return next(createError(403, "seller cannot add Review"));

        const newReview= new Review({
            userId : req.userId,
            gigId: req.body.gigId,
            desc: req.body.desc,
            star: req.body.star
        })

        const duplicate = await Review.findOne({
            gigId: req.body.gigId,
            userId: req.userId
        })
        if (duplicate) return next(createError(403, "you have already review on this gig"))

        const savedReview = await newReview.save();
        res.status(201).send(savedReview);
    } catch (error) {
        next(err)
    }
}

export const getReviews = async(req, res, next)=>{
    try {
        const reviews= await Review.find({ gigId: req.params.gigId });
        res.status(200).send(reviews);
    } catch (error) {
        next(err)
    }
}

export const deleteReview = async(req, res, next)=>{
    try {
        
    } catch (error) {
        next(err)
    }
}