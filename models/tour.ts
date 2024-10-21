// mongoose
import { Schema, model, models } from "mongoose";

const tourSchema = new Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  images: { type: [String], required: true },
  tourGuide: { type: Schema.Types.ObjectId, ref: "Admin" },
  startDate: {
    type: Date,
    default: () => Date.now(),
  },
  endDate: {
    type: Date,
    default: () => Date.now(),
  },
  duration: { type: String, required: true },
  destination: { type: String, required: true },
  services: { type: [String], default: [], required: true },
  tags: { type: [String], default: [], required: true },
  published: { type: Boolean, default: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true, default: 0 },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

const TourModel = models?.Tour || model("Tour", tourSchema);

export default TourModel;
