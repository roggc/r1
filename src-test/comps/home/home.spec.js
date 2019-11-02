import React from 'react'
import {Home} from './home'
import {render,queryByText,cleanup} from '@testing-library/react'

export default
()=>
describe(
  'home',
  ()=>
  {
    it('should has text',
  ()=>
{
  const {queryByTestId}=render(<Home/>)
  queryByTestId('home').should.have.text('this is home')
  //should.exist(queryByText(queryByTestId('home'),'this is home'))
})
afterEach(cleanup)
  }
)
