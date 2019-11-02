import React from 'react'
import {App} from './comps/app/app'
import {BrowserRouter as Router} from 'react-router-dom'
import {render} from 'react-dom'
import './public/favicon.ico'

render(
  <Router><App/></Router>,
  document.getElementById('app')
)
