import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { Note } from '../models/Note.js'

class NotesService {
  async getNotesByBugId(id) {
    try {
      const res = await api.get('/api/bugs/' + id + '/notes')
      AppState.notes = res.data.map(n => new Note(n))
    } catch (error) {
      logger.error(error)
    }
  }

  async createNote(data = new Note()) {
    try {
      data.creator = AppState.user.id
      await api.post('/api/notes/', new Note(data))
      this.getNotesByBugId(data.bug)
    } catch (error) {
      logger.error(error)
    }
  }

  async editNote(id, data = new Note()) {
    try {
      //
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteNote(data) {
    try {
      await api.delete('/api/notes/' + data.id)
      this.getNotesByBugId(data.bug)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const notesService = new NotesService()
