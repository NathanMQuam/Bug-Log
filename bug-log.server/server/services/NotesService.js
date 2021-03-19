import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getNotesByBugId(query) {
    const notes = await dbContext.Note.findById(query)
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

  async deleteNote(noteId, creatorId) {
    if (creatorId === dbContext.Note.findById(noteId).creatorId) {
      const note = await dbContext.Note.findByIdAndDelete(noteId)
      return note
    } else {
      throw new BadRequest('You are not the creator of this note')
    }
  }
}

export const notesService = new NotesService()
