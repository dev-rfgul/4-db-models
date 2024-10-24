import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timeStamps: true }
);

export const User = mongoose.model('User', userSchema);
