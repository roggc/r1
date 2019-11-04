import React from 'react'
import {Modal} from '../modal/modal'
import {AddTodoConfirm} from '../addTodoConfirm/addTodoConfirm'

export const AddTodo=
({state,dispatch})=>
{
  const showModal=
  e=>
  dispatch({type:'MODAL_SET_SHOW',val:true})
  const inputChange=
  e=>
  dispatch({type:'ADDTODO_SET_INPUT',val:e.target.value})
  const inputClick=
  e=>e.stopPropagation()
  const el=
  <div data-testid='addTodo'>
    <button onClick={showModal}>add</button>
    <Modal state={state} dispatch={dispatch}>
      <input type='text' onChange={inputChange}
        value={state.addTodo.input} onClick={inputClick}/>
      <AddTodoConfirm state={state} dispatch={dispatch}/>
    </Modal>
  </div>
  return el
}
