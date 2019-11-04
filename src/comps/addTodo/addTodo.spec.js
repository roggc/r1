import React from 'react'
import {AddTodo} from './addTodo'
import {App} from '../app/app'
import {BrowserRouter} from 'react-router-dom'
import {render,fireEvent,queryByRole} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'addTodo',
  ()=>
  {
    it('is a button',
  ()=>
{
const {queryByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
fireEvent.click(queryByTestId('menu'))
fireEvent.click(queryByTestId('todos-link'))
should.exist(queryByTestId('addTodo'))
should.exist(queryByRole(queryByTestId('addTodo'),'button'))
})
it('when clicked shows modal for adding todo',
()=>
{
const {queryByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
should.not.exist(queryByTestId('addTodo'))
fireEvent.click(queryByTestId('menu'))
fireEvent.click(queryByTestId('todos-link'))
fireEvent.click(queryByRole(queryByTestId('addTodo'),'button'))
should.exist(queryByTestId('modal'))
should.exist(queryByTestId('addTodoConfirm'))
should.exist(queryByRole(queryByTestId('modal'),'textbox'))
})
afterEach(cleanupAndRestoreRoute)
  }
)
