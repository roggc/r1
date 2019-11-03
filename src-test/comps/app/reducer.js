import combine from '../../redux/combineReducers'
import menu from '../menu/reducer'
import addTodo from '../addTodo/reducer'

export default
combine(
  {
    menu,
    addTodo
  }
)
