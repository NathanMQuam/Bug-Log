import { reactive } from 'vue'
import { Bug } from './models/Bug.js'
import { Note } from './models/Note.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  bugs: [],
  activeBug: new Bug(),
  notes: [new Note({
    body: 'AppState note test',
    creator: {
      name: 'AppState creator name'
    }
  }),
  new Note({
    body: 'AppState note test2',
    creator: {
      name: 'AppState creator2 name'
    }
  })]
})
