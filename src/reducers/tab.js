import {TOGGLE_TAB} from '../actions/tab'

export default function tab(state = "unanswered", action) {
  switch (action.type) {
    case TOGGLE_TAB:
      return action.tab
    default:
      return state
  }
}