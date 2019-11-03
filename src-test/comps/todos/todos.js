import React from 'react'
import {AddTodo} from '../addTodo/addTodo'
import {ClearAll} from '../clearAll/clearAll'
import {CheckAll} from '../checkAll/checkAll'

export const Todos=
(props)=>
{
  const el=
  <div data-testid='todos'>
    <AddTodo {...props}/>
    <ClearAll/>
    <CheckAll/>
  </div>
  return el
}
