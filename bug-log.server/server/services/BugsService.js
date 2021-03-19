import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugsService {
  /**
    * Returns a list of all bugs
   */
  async getAllBugs() {
    const bugs = await dbContext.Bug.find({}).populate('creator')
    return bugs
  }

  /**
   * Returns one bug by it's ID
   * @param {string} bugId
   */
  async getBugById(bugId) {
    const bug = await dbContext.Bug.findOne({ _id: bugId }).populate('creator')
    return bug
  }

  async createNewBug(bugData) {
    const bug = await dbContext.Bug.create(bugData)
    return bug
  }

  async editBug(bugId, creatorId, bugData) {
    // if (!dbContext.Bug.findById(bugId).closed) {
    const bug = await dbContext.Bug.findOneAndUpdate({ _id: bugId, creatorId: creatorId }, bugData, { new: true })
    if (!bug) {
      throw new BadRequest('You are not the CREATOR or BAD ID.')
    }

    return bug
    // } else {
    // throw new BadRequest('This bug has been closed and can no longer be changed')
    // }
  }

  async closeBug(bugId, creatorId) {
    // if (!dbContext.Bug.findById(bugId).closed) {
    const bug = await dbContext.Bug.findOneAndUpdate({ _id: bugId, creatorId: creatorId }, { closed: true }, { new: true })
    return bug
    // } else {
    // throw new BadRequest('This bug has been closed and can no longer be changed')
    // }
  }
}

export const bugsService = new BugsService()
