import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
const mapStateToProps = (state, ownProps1) => {
 
  return ({
  active: ownProps1.filter === state.visibilityFilters
})}

const mapDispatchToProps = (dispatch, ownProps) => {
 
  return ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})}
//export default Link

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
