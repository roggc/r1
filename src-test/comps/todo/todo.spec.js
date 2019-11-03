import React from 'react'
import {Todo} from './todo'
import {render} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'todo',
  ()=>
  {
    it('has icons trash and check and field to put text',
  ()=>
{
  const {queryByTestId}=render(<Todo/>)
  should.exist(queryByTestId('trash'))
  should.exist(queryByTestId('check'))
  should.exist(queryByTestId('val'))
})

afterEach(cleanupAndRestoreRoute)
  }
)
