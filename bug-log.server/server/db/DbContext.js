import mongoose from 'mongoose'
import AccountSchema from '../models/Account'
import BugSchema from '../models/Bug'
import NoteSchema from '../models/Note'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Bug = mongoose.model('Bug', BugSchema);
  Note = mongoose.model('Note', NoteSchema);
}

export const dbContext = new DbContext()
