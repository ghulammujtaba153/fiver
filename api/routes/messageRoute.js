import express from "express";
import {
  createMessage,
  getMessages,
} from "../controllers/messageController.js";
import { verifyToken } from "../middleware/jwt.js";

const messageRoute = express.Router();

messageRoute.post("/", verifyToken, createMessage);
messageRoute.get("/:id", verifyToken, getMessages);

export default messageRoute;