import React from 'react'

export const Todo=
({val,check})=>
{
  const el=
  <div data-testid='todo'>
    <div data-testid='trash'><button>trash</button></div>
    <div data-testid='check'><button>check</button></div>
    <div data-testid='val'>{val}</div>
  </div>
  return el
}
