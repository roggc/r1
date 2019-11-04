import React from 'react'
import {Modal} from '../modal/modal'
import {AddTodoConfirm} from '../addTodoConfirm/addTodoConfirm'

export const AddTodo=
({state,dispatch})=>
{
  const showModal=
  e=>
  dispatch({type:'ADDTODO_SET_SHOW_MODAL',val:true})
  const inputChange=
  e=>
  dispatch({type:'ADDTODO_SET_INPUT',val:e.target.value})
  const el=
  <div data-testid='addTodo'>
    <button onClick={showModal}>add</button>
    {
      state.addTodo.modal&&
      <Modal>
        <input type='text' onChange={inputChange} value={state.addTodo.input}/>
        <AddTodoConfirm state={state} dispatch={dispatch}/>
      </Modal>
    }
  </div>
  return el
}
