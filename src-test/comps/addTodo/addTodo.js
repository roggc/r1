import React from 'react'
import {Modal} from '../modal/modal'
import {AddTodoConfirm} from '../addTodoConfirm/addTodoConfirm'

export const AddTodo=
({state,dispatch})=>
{
  const showModal=
  e=>
  dispatch({type:'ADD_TODO_SHOW_MODAL'})
  const el=
  <div data-testid='addTodo'>
    <button onClick={showModal}>add</button>
    {
      state.addTodo.modal&&
      <Modal>
        <input type='text'/>
        <AddTodoConfirm/>
      </Modal>
    }
  </div>
  return el
}
