import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  console.log("filter is ",filter)
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => {
  console.log("map state inside visible to do list",state)
  return ({
  todos: getVisibleTodos(state.todos, state.visibilityFilters)
})}

const mapDispatchToProps = dispatch => {
  console.log("dispatch called in visible to do list",dispatch)
  return ({
  toggleTodo: id => dispatch(toggleTodo(id))
})}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
