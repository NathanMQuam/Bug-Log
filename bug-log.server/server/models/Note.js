import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Note = new Schema({
  body: { type: String, required: true },
  bug: { type: ObjectId, ref: 'Bug', required: true },
  creatorId: { type: String, required: true }
}, {
  timestamps: true, toJSON: { virtuals: true }
})

Note.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

// Note.virtual('bug', {
//   localField: 'bug',
//   ref: 'Bug',
//   foreignField: '_id',
//   justOne: true
// })

export default Note
