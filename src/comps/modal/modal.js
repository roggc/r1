import React from 'react'

export const Modal=
({children,state,dispatch})=>
{
  const modalDisappears=
  e=>
  dispatch({type:'MODAL_SET_SHOW',val:false})
  const el=
  <div data-testid='modal' onClick={modalDisappears}>
  {children}
  </div>
  return el
}
