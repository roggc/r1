import React from 'react'
import {App} from '../app/app'
import {BrowserRouter as Router} from 'react-router-dom'
import {render,fireEvent,cleanup} from '@testing-library/react'

export default
()=>
describe(
  'menu',
  ()=>
  {
    it('has an icon when clicked show and hides a popup',
  ()=>
{
  const {queryByTestId}=render(<Router><App/></Router>)
  should.not.exist(queryByTestId('popup'))
  should.exist(queryByTestId('menu'))
  fireEvent.click(queryByTestId('menu'))
  should.exist(queryByTestId('popup'))
  fireEvent.click(queryByTestId('menu'))
  should.not.exist(queryByTestId('popup'))
})

afterEach(cleanup)
  }
)
