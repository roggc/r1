import React from 'react'
import {Link} from 'react-router-dom'

export const Menu=
()=>
{
  const el=
  <div>
    <div className='home'><Link to='/' data-testid='home-link'>home</Link></div>
    <div className='about'><Link to='/about' data-testid='about-link'>about</Link></div>
  </div>
  return el
}
