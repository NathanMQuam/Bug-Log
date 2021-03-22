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
}

export const notesService = new NotesService()
