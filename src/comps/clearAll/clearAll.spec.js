import React from 'react'
import {ClearAll} from './clearAll'
import {render} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'clearAll',
  ()=>
  {
    it('has button',
  ()=>
{
const {queryByRole}=render(<ClearAll/>)
should.exist(queryByRole('button'))
})
afterEach(cleanupAndRestoreRoute)
  }
)
