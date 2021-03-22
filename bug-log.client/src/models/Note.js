export class Note {
  constructor(data = {}) {
    this.bug = data.bug || ''
    this.body = data.body || ''
    this.creator = data.creator || ''
    this.id = data.id || data._id || ''
  }
}
