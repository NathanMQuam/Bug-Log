import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService.js'
import BaseController from '../utils/BaseController'

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNoteForBug)
      .put(':id', this.editNote)
      .delete(':id', this.deleteNote)
  }

  async createNoteForBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.bug = req.params.id
      const note = await notesService.createNoteForBug(req.body)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }

  // NOTE: Optional stretch-goal
  async editNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = await notesService.editNote(req.params.id, req.body.creatorId, req.body)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async deleteNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = await notesService.deleteNote(req.params.id, req.body.creatorId)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }
}
