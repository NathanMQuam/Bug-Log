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
      return res
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

  async editBug(id, bugData) {
    try {
      delete bugData.closed
      const res = await this.getBugById(id)
      if (!res.data.closed) {
        await api.put('/api/bugs/' + id, bugData)
      }
      this.getBugById(id)
    } catch (error) {
      logger.error(error)
    }
  }

  async closeBug(id) {
    try {
      await api.delete('/api/bugs/' + id)
      this.getBugById(id)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const bugsService = new BugsService()
