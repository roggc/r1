import React from 'react'

export const Modal=
({children})=>
{
  const el=
  <div data-testid='modal'>
  {children}
  </div>
  return el
}
