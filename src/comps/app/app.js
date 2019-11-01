import React from 'react'
import {Content} from '../content/content'
import {Header} from '../header/header'
import {Footer} from '../footer/footer'

export const App=
()=>
{
  const el=
  <div>
      <div data-testid='header'><Header/></div>
      <div data-testid='content'><Content/></div>
      <div data-testid='footer'><Footer/></div>
  </div>
  return el
}
