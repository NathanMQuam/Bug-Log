import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Bug = new Schema({
  closed: { type: Boolean, required: true, default: false },
  description: { type: String, required: true },
  title: { type: String, required: true },
  closedDate: { type: Date },
  creatorId: { type: String, required: true }
}, {
  timestamps: true, toJSON: { virtuals: true }
})

export default Bug
