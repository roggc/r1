import React from 'react'
import {App} from '../app/app'
import {render} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'checkAllConfirm',
  ()=>
  {
    it('is a button, when pressed, checks all todos')
afterEach(cleanupAndRestoreRoute)
  }
)
