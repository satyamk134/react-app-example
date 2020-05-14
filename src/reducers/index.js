import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilters from './visibilityFilters'
import userStatus from './userStatus';
import registerStep from './registerStep'
import personalInfo from'./personalInfo'
import paymentInfo  from './paymentInfo'
export default combineReducers({
  todos,
  visibilityFilters,
  userStatus,
  registerStep,
  personalInfo,
  paymentInfo
})