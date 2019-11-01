import React,{useReducer} from 'react'
import {Content} from '../content/content'
import {Header} from '../header/header'
import {Footer} from '../footer/footer'
import state from './state'
import reducer from './reducer'

export const App=
()=>
{
  const [state1,dispatch1]=useReducer(reducer,state)
  const el=
  <div data-testid='app'>
      <div data-testid='header'>
        <Header state={state1} dispatch={dispatch1}/>
      </div>
      <div data-testid='content'><Content/></div>
      <div data-testid='footer'><Footer/></div>
  </div>
  return el
}
