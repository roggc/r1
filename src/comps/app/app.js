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
  const [state2,dispatch2]=useReducer(reducer,state)
  const [state3,dispatch3]=useReducer(reducer,state)
  const el=
  <div data-testid='app'>
      <div data-testid='header'>
        <Header state={state1} dispatch={dispatch1}/>
      </div>
      <div data-testid='content'>
        <Content state1={state1} dispatch1={dispatch1}
          state2={state2} dispatch2={dispatch2}
          state3={state3} dispatch3={dispatch3}/>
      </div>
      <div data-testid='footer'><Footer/></div>
  </div>
  return el
}
