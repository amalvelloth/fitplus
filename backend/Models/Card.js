const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: true, // Card must have a title
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users', // Reference to the User model
      required: true, // A card must belong to a user
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the creation date
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

const CardModel = mongoose.model('Card', CardSchema);
module.exports = CardModel;
