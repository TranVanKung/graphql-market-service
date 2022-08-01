import mongoose, { Schema } from 'mongoose';

export interface MarketInterface {
  token?: string;
  sparkLine?: string;
}

const reviewSchema = new Schema(
  {
    token: { type: Schema.Types.ObjectId, require: true, unique: true },
    sparkLine: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model('Review', reviewSchema);
