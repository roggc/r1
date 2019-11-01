import React from 'react'
import {App} from './app'
import {render,cleanup} from '@testing-library/react'
import 'chai/register-should'
import {BrowserRouter as Router} from 'react-router-dom'

export default
()=>
describe(
  'app',
  ()=>
  {
    it(
      'contains header, content, and footer',
      ()=>
      {
        const {queryByTestId}= render(<Router><App/></Router>)
        should.exist(queryByTestId('header'))
        should.exist(queryByTestId('content'))
        should.exist(queryByTestId('footer'))
      }
    )
    afterEach(cleanup)
  }
)
