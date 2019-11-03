import React from 'react'

export const Todo=
({val,check})=>
{
  const el=
  <div data-testid='todo'>
    <div data-testid='trash'></div>
    <div data-testid='check'></div>
    <div data-testid='val'>{val}</div>
  </div>
  return el
}
