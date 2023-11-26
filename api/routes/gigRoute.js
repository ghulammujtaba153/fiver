import express from 'express'
import { verifyToken } from './../middleware/jwt.js';
import { createGig, deleteGig, getGig, getGigs } from '../controllers/gigController.js';

const Gigrouter =express.Router();

Gigrouter.post('/', verifyToken, createGig);
Gigrouter.delete('/:id', verifyToken, deleteGig)
Gigrouter.get('/single/:id', getGig)
Gigrouter.get('/',  getGigs)

export default Gigrouter;