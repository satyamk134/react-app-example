import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
const mapStateToProps = (state, ownProps1) => {
  console.log("map state to prop called",state);
  console.log("own props are",ownProps1)
  return ({
  active: ownProps1.filter === state.visibilityFilters
})}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("dispatch called")
  return ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})}
//export default Link

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
