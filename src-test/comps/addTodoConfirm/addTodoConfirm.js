import React from 'react'

export const AddTodoConfirm=
({state,dispatch})=>
{
  const confirmAdd=
  e=>
  {
    if(state.addTodo.input!=='')
    {
      dispatch({type:'TODOS_ADD',val:state.addTodo.input})
    }
    dispatch({type:'ADDTODO_SET_SHOW_MODAL',val:false})
  }
  const el=
  <div data-testid='addTodoConfirm'>
    <button onClick={confirmAdd}>add</button>
  </div>
  return el
}
