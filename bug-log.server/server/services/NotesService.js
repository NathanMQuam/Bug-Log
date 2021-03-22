import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getNotesByBugId(bugId) {
    const notes = await dbContext.Note.find({ bug: bugId }).populate('creator')
    return notes
  }

  async createNoteForBug(noteData) {
    const note = await dbContext.Note.create(noteData)
    return note
  }

  // NOTE: Optional stretch-goal
  async editNote(noteId, creatorId, noteData) {
    if (creatorId === dbContext.Note.findById(noteId).creatorId) {
      const note = await dbContext.Note.findOneAndReplace({ _id: noteId, creatorId: creatorId }, noteData, { new: true })
      return note
    } else {
      throw new BadRequest('You are not the creator of this note')
    }
  }

  async deleteNote(noteId, userId) {
    const note = await dbContext.Note.findById(noteId)
    const creatorId = note.creatorId
    if (userId === creatorId) {
      await dbContext.Note.findByIdAndRemove(noteId)
    } else {
      throw new BadRequest('You are not the creator of this note')
    }
  }
}

export const notesService = new NotesService()
