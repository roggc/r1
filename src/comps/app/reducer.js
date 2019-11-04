import combine from '../../redux/combineReducers'
import menu from '../menu/reducer'
import addTodo from '../addTodo/reducer'
import todos from '../todos/reducer'

export default
combine(
  {
    menu,
    addTodo,
    todos
  }
)
