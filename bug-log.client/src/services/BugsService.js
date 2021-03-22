import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { Bug } from '../models/Bug.js'
import router from '../router.js'

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

  async createBug(data) {
    try {
      const res = await api.post('api/bugs', new Bug(data))
      AppState.activeBug = new Bug(res.data)
      router.push({ name: 'BugPage', params: { id: res.data.id } })
    } catch (error) {
      logger.error(error)
    }
  }

  async editBug(id, data) {
    try {
      //
    } catch (error) {
      logger.error(error)
    }
  }

  async closeBug(id) {
    try {
      //
    } catch (error) {
      logger.error(error)
    }
  }
}

export const bugsService = new BugsService()
