import mongoose from 'mongoose';

const orderedItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: ture,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        ordereditem: {
            type: [orderedItemSchema],
        },
        address: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['PENDING', 'DELIVERED', 'CANCELLED'],
            default: 'PENDING',
        },
    },
    { timestamps: true }
);
export const Order = mongoose.model('Order', orderSchema);
