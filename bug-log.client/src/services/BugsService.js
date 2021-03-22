import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { Bug } from '../models/Bug.js'

class BugsService {
  async getAllBugs() {
    try {
      const res = await api.get('/api/bugs')
      AppState.bugs = res.data.map(b => new Bug(b))
    } catch (error) {
      logger.error(error)
    }
  }

  async getBugById(id) {
    try {
      AppState.activeBug = new Bug()
      const res = await api.get('/api/bugs/' + id)
      AppState.activeBug = new Bug(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const bugsService = new BugsService()
