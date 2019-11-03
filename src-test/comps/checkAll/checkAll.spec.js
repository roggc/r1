import React from 'react'
import {CheckAll} from './checkAll'
import {render} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'checkAll',
  ()=>
  {
    it('is a button',
  ()=>
{
  const {queryByRole}=render(<CheckAll/>)
  should.exist(queryByRole('button'))
})
afterEach(cleanupAndRestoreRoute)
  }
)
