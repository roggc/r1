import React from 'react'
import {Modal} from '../modal/modal'
import {CheckAllConfirm} from '../checkAllConfirm/checkAllConfirm'

export const CheckAll=
({state1,dispatch1,state2,dispatch2})=>
{
  const checkAllClick=
  e=>dispatch2({type:'MODAL_SET_SHOW',val:true})
  const el=
  <div data-testid='checkAll'>
    <button onClick={checkAllClick}>checkAll</button>
    <Modal state={state2} dispatch={dispatch2}>
      <CheckAllConfirm state={state1} dispatch={dispatch1}/>
    </Modal>  
  </div>
  return el
}
