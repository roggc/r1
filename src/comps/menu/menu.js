import React from 'react'
import {Popup} from '../popup/popup'

export const Menu=
({state,dispatch})=>
{
  const togglePopup=
  e=>
  dispatch({type:'MENU_TOGGLE_POPUP'})
  const el=
  <div onClick={togglePopup} data-testid='menu'>
    <div data-testid='icon'></div>
    {state.menu.showPopup&& <Popup state={state} dispatch={dispatch}/>}
  </div>
  return el
}
