export class Bug {
  constructor(data = {}) {
    this.id = data.id || data._id || ''
    this.title = data.title || ''
    this.description = data.description || ''
    this.creator = data.creator || data.creatorId || ''
    this.lastModified = data.updatedAt || ''
    this.closed = data.closed || false
    this.closedDate = data.closedDate || ''
  }
}
