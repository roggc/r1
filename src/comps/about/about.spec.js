import React from 'react'
import {About} from './about'
import {mount} from 'enzyme'
import 'chai/register-should'

export default
()=>
describe(
  'about',
  ()=>
  {
    it('should has text',
  ()=>
{
    const wrapper=mount(<About/>)
    wrapper.text().should.not.have.lengthOf(0)
})
  }
)
