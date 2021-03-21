export class Note {
  constructor(data = {}) {
    this.bugId = data.bug || ''
    this.body = data.body || ''
    this.creator = data.creator || ''
  }
}
