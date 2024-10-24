import mongoose from 'mongoose';

const todoSchema = new mongoose.schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubTodo' }],
  },
  { timeStamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
