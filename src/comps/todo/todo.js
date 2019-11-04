import React from 'react'

export const Todo=
({state,dispatch,i})=>
{
  const trashClick=
  e=>
  dispatch({type:'TODOS_DELETE',val:i})
  const checkClick=
  e=>dispatch({type:'TODOS_CHECK',val:i})
  const el=
  <div data-testid='todo'>
    <div data-testid='trash'><button onClick={trashClick}>trash</button></div>
    {!state.todos.todos[i].done&& <div data-testid='check'><button onClick={checkClick}>check</button></div>}
    {state.todos.todos[i].done&& <div data-testid='checked'>checked</div>}
    <div data-testid='val'>{state.todos.todos[i].text}</div>
  </div>
  return el
}
