import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: false 
  },
  email: {
    type: String,
    required: true
  },
  createadAt: {
    type: Date,
    default: Date.now()
  } 
})

export default mongoose.model('Client', clientSchema)