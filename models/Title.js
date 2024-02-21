import mongoose from "mongoose";

const titleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true 
  },
  createadAt: {
    type: Date,
    default: Date.now()
  } 
})

export default mongoose.model('Title', titleSchema)