import React from 'react'
import {AddTodo} from '../addTodo/addTodo'
import {ClearAll} from '../clearAll/clearAll'
import {CheckAll} from '../checkAll/checkAll'
import {Todo} from '../todo/todo'

export const Todos=
({state1,dispatch1,state2,dispatch2,state3,dispatch3})=>
{
  const el=
  <div data-testid='todos'>
    <AddTodo state={state1} dispatch={dispatch1}/>
    <ClearAll state1={state1} dispatch1={dispatch1}
      state2={state2} dispatch2={dispatch2}/>
    <CheckAll state1={state1} dispatch1={dispatch1}
      state2={state3} dispatch2={dispatch3}/>
    <div>
      {
        state1.todos.todos.map(
          (todo,i)=>
          <Todo key={i} state={state1} dispatch={dispatch1} i={i}/>
        )
      }
    </div>
  </div>
  return el
}
