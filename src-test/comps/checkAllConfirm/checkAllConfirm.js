import React from 'react'

export const CheckAllConfirm=
({state,dispatch})=>
{
  const checkAllClick=
  e=>dispatch({type:'TODOS_CHECKALL'})
  const el=
  <div data-testid='checkAllConfirm'>
    <button onClick={checkAllClick}>check all</button>
  </div>
  return el
}
