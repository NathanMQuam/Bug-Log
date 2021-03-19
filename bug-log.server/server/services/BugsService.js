// import { dbContext } from '../db/DbContext'

class BugsService {
  /**
    * Returns a list of all bugs
   */
  async getAllBugs() {

  }

  /**
   * Returns one bug by it's ID
   * @param {string} bugId
   */
  async getBugById(bugId) {

  }

  /**
   * Returns all Notes with the bugID
   * @param {string} bugId
   */
  async getNotesByBugId(bugId) {

  }

  async createNewBug(bugData) {

  }

  async editBug(bugId, creatorId, bugData) {

  }

  async closeBug(bugId, creatorId) {

  }
}

export const bugsService = new BugsService()
