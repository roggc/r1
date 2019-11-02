import React from 'react'
import {Switch,Route} from 'react-router-dom'
import {Home} from '../home/home'
import {About} from '../about/about'

export const Content=
()=>
{
  const el=
  <div>
    <Switch>
      <Route path='/' exact render={()=><Home/>}/>
      <Route path='/about' render={()=><About/>}/>
    </Switch>
  </div>
  return el
}
