import React,{useRef} from 'react'
import {Popup} from '../popup/popup'
import {useOuterClick} from '../../hooks/useOuterClick'

export const Menu=
({state,dispatch})=>
{
  const menuRef=useRef(null)
  useOuterClick(e=>dispatch({type:'MENU_HIDE_POPUP'}),menuRef)
  const togglePopup=
  e=>
  dispatch({type:'MENU_TOGGLE_POPUP'})
  const el=
  <div onClick={togglePopup} data-testid='menu' ref={menuRef}>
    <div data-testid='icon'>menu</div>
    {state.menu.showPopup&& <Popup state={state} dispatch={dispatch}/>}
  </div>
  return el
}
