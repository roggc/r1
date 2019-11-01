import React from 'react'
import {Footer} from './footer'
import {render,cleanup} from '@testing-library/react'

export default
()=>
describe
(
  'footer',
  ()=>
  {
    it
    (
      'has a text',
      ()=>
      {
        const {queryByText}=render(<Footer/>)
        should.exist(queryByText(/2019 roggc/i))
      }
    )
    afterEach(cleanup)
  }
)
