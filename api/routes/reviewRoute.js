import express from "express";
import {verifyToken} from '../middleware/jwt.js' 
import {
    createReview,
    getReviews,
    deleteReview,
  } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", verifyToken, createReview )
reviewRouter.get("/:gigId", getReviews )
reviewRouter.delete("/:id", deleteReview)

export default reviewRouter;