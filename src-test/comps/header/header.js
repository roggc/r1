import React from 'react'
import {Menu} from '../menu/menu'

export const Header=
({state,dispatch})=>
{
  const el=
  <div>
    <div>
      <Menu state={state} dispatch={dispatch}/>
    </div>
  </div>
  return el
}
