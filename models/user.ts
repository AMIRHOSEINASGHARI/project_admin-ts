// mongoos
import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  displayName: { type: String, default: "" },
  password: { type: String, required: true },
  avatar: { type: String, default: "" },
  phoneNumber: { type: Number, default: 0 },
  address: { type: String, default: "" },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order", default: [] }],
  likes: [{ type: Schema.Types.ObjectId, ref: "Like", default: [] }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment", default: [] }],
  cart: {
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 0 },
      },
    ],
    selectedItems: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    totalProductsCount: { type: Number, default: 0 },
    checkoutStatus: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

const UserModel = models?.User || model("User", userSchema);

export default UserModel;
