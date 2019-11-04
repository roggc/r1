import React from 'react'
import {AddTodo} from '../addTodo/addTodo'
import {ClearAll} from '../clearAll/clearAll'
import {CheckAll} from '../checkAll/checkAll'
import {Todo} from '../todo/todo'

export const Todos=
({state,dispatch})=>
{
  const el=
  <div data-testid='todos'>
    <AddTodo state={state} dispatch={dispatch}/>
    <ClearAll/>
    <CheckAll/>
    <div>
      {
        state.todos.todos.map(
          (todo,i)=>
          <Todo key={i} val={todo.text} check={todo.done}/>
        )
      }
    </div>
  </div>
  return el
}
