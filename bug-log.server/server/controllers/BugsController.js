import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugsService.js'
import { notesService } from '../services/NotesService.js'
import BaseController from '../utils/BaseController'

export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .get('', this.getAllBugs)
      .get(':id', this.getBugById)
      .get(':id/notes', this.getNotesByBugId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNewBug)
      .put(':id', this.editBug)
      .delete(':id', this.closeBug)
  }

  async getAllBugs(req, res, next) {
    try {
      const bug = await bugsService.getAllBugs()
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getBugById(req, res, next) {
    try {
      const bug = await bugsService.getBugById(req.params.id)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getNotesByBugId(req, res, next) {
    try {
      const notes = await notesService.getNotesByBugId(req.params.id)
      return res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async createNewBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.createNewBug(req.body)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async editBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.editBug(req.params.id, req.body.creatorId, req.body)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async closeBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.closeBug(req.params.id, req.body.creatorId)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }
}
