import combine from '../../redux/combineReducers'
import menu from '../menu/reducer'
import addTodo from '../addTodo/reducer'
import todos from '../todos/reducer'
import clearAll from '../clearAll/reducer'
import modal from '../modal/reducer'

export default
combine(
  {
    menu,
    addTodo,
    todos,
    clearAll,
    modal
  }
)
