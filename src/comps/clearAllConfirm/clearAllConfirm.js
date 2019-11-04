import React from 'react'

export const ClearAllConfirm=
({state,dispatch})=>
{
  const clearAllClick=
  e=>
  dispatch({type:'TODOS_DELETEALL'})
  const el=
  <div data-testid='clearAllConfirm'>
    <button onClick={clearAllClick}>clear all</button>
  </div>
  return el
}
