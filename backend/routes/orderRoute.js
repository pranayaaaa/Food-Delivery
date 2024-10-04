import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, userOrders, verifyOrder,listOrders,updateStatus} from "../controllers/orderController.js"

const orderRoute=express.Router();

orderRoute.post("/place",authMiddleware,placeOrder);
orderRoute.post("/verify",verifyOrder)
orderRoute.post("/userOrders",authMiddleware,userOrders)
orderRoute.get('/list',listOrders)
orderRoute.post("/status",updateStatus)

export default orderRoute;