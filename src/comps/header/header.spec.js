import React from 'react'
import {Header} from './header'
import {BrowserRouter as Router} from 'react-router-dom'
import {render,cleanup} from '@testing-library/react'

export default
()=>
describe('header',
()=>
{
  it('has a menu',
()=>
{
  const {queryByTestId}=render(<Router><Header/></Router>)
  should.exist(queryByTestId('menu'))
})
afterEach(cleanup)
})
