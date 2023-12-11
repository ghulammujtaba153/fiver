import express from "express";
import {
  createConversation,
  getConversations,
  getSingleConversation,
  updateConversation,
} from "../controllers/conversationController.js";
import { verifyToken } from "../middleware/jwt.js";

const conversationRoute = express.Router();

conversationRoute.get("/", verifyToken, getConversations);
conversationRoute.post("/", verifyToken, createConversation);
conversationRoute.get("/single/:id", verifyToken, getSingleConversation);
conversationRoute.put("/:id", verifyToken, updateConversation);

export default conversationRoute;