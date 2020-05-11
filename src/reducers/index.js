import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilters from './visibilityFilters'
import userStatus from './userStatus'
export default combineReducers({
  todos,
  visibilityFilters,
  userStatus
})