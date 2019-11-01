import React from 'react'
import {Home} from './home'
import {render,queryByText,cleanup} from '@testing-library/react'
import 'chai/register-should'

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
  should.exist(queryByText(queryByTestId('home'),'this is home'))
})
afterEach(cleanup)
  }
)
