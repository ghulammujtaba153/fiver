import Order from '../models/order-model.js'
import Gig from '../models/gig-model.js'

export const createOrder = async (req, res, next) => {
  
    try {
        const gig = await Gig.findById(req.params.gigId);
        console.log(gig)
      const order = new Order({
        gigId: gig._id,
        img: gig.cover,
        title: gig.title,
        price: gig.price,
        sellerId: gig.userId,
        buyerId: req.userId,
        payment_intent: "temporary",
      })
      await order.save()
      res.status(200).send(order);
    } catch (err) {
      next(err);
    }
  };



export const getOrders = async (req, res, next) => {
    try {
      
      const orders = await Order.find({
        ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
        isCompleted: false,
      });
  
      res.status(200).send(orders);
    } catch (err) {
      next(err);
    }
  };