import React,{useRef} from 'react'
import {Menu} from '../menu/menu'
import {useOuterClick} from '../../hooks/useOuterClick'

export const Header=
({state,dispatch})=>
{
  const menuRef=useRef(null)
  useOuterClick(e=>dispatch({type:'MENU_HIDE_POPUP'}),menuRef)
  const el=
  <div>
    <div>
      <Menu state={state} dispatch={dispatch} ref={menuRef}/>
    </div>
  </div>
  return el
}
