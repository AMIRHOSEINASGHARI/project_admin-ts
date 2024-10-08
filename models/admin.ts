import { Schema, model, models } from "mongoose";

const adminSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  address: { type: String, default: "" },
  country: { type: String, default: "" },
  avatar: { type: String, default: "" },
  roll: { type: String, default: "USER" },
  productsCreated: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  blogsCreated: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

const AdminModel = models?.Admin || model("Admin", adminSchema);

export default AdminModel;
