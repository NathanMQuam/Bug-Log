import { reactive } from 'vue'
import { Bug } from './models/Bug.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  bugs: [],
  activeBug: new Bug(),
  notes: []
})
