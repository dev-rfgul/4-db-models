import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schemea.Types.ObjectId,
    ref: 'User',
  },
});

export const subTodo = mongoose.model('SubTodo', subTodoSchema);
