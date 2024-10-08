// mongoose
import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Completed", "Canceled", "Refunded"],
  },
  deliveryAddress: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  phoneNumber: { type: Number, required: true },
  displayName: { type: String, required: true },
  paymentMethod: { type: String, required: true, default: "Credit Card" },
  items: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
      cost: { type: Number, required: true },
      discount: { type: Number, required: true },
    },
  ],
  summary: {
    totalProducts: { type: Number },
    totalPrice: { type: Number },
    totalDiscount: { type: Number },
    totalPayable: { type: Number },
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

const OrderModel = models?.Order || model("Order", orderSchema);

export default OrderModel;
