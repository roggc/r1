import React from 'react'
import {Menu} from '../menu/menu'

export const Header=
()=>
{
  const el=
  <div>
    <div data-testid='menu'><Menu/></div>
  </div>
  return el
}
