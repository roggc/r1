import React from 'react'
import {Modal} from '../modal/modal'
import {ClearAllConfirm} from '../clearAllConfirm/clearAllConfirm'

export const ClearAll=
({state1,dispatch1,state2,dispatch2})=>
{
  const clearAllClick=
  e=>dispatch2({type:'MODAL_SET_SHOW',val:true})
  const el=
  <div data-testid='clearAll'>
    <button onClick={clearAllClick}>clearAll</button>
    <Modal state={state2} dispatch={dispatch2}>
      <ClearAllConfirm state={state1} dispatch={dispatch1}/>
    </Modal>    
  </div>
  return el
}
