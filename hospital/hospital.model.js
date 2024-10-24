import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  pinCode: {
    type: String,
    required: true,
  },
  specializedIn: [
    {
      type: String,
    },
  ],
});

export const Hospital = mongoose.model('Hospital', hospitalSchema);
