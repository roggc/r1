import React from 'react'
import {App} from '../app/app'
import 'chai/register-should'
import {BrowserRouter as Router} from 'react-router-dom'
import {render,fireEvent,cleanup} from '@testing-library/react'

export default
()=>
describe(
  'menu',
  ()=>
  {
    it('has home and about links that redirects to respectives routes in content component',
  ()=>
{
  const {queryByTestId}=render(<Router><App/></Router>)
  should.exist(queryByTestId('home'))
  should.not.exist(queryByTestId('about'))
  fireEvent.click(queryByTestId('about-link'))
  should.not.exist(queryByTestId('home'))
  should.exist(queryByTestId('about'))
  fireEvent.click(queryByTestId('home-link'))
  should.exist(queryByTestId('home'))
  should.not.exist(queryByTestId('about'))
})
afterEach(cleanup)
  }
)
