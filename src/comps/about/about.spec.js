import React from 'react'
import {About} from './about'
import {render,cleanup} from '@testing-library/react'

export default
()=>
describe(
  'about',
  ()=>
  {
    it('should has text',
  ()=>
{
    const {queryByText}=render(<About/>)
    should.exist(queryByText('about page'))
})
 afterEach(cleanup)
  }
)
