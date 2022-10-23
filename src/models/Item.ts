import mongoose, { Document } from "mongoose";

export interface IItem {
  name: string;
  description?: string;
  isFragile: boolean;
  price: number;
}

export type ItemDocument = Document & IItem;

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  isFragile: { type: Boolean, required: true, default: false },
  price: { type: Number, required: true },
});

export const Item = mongoose.model<ItemDocument>("Item", ItemSchema);
