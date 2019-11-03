export default
(val={},act)=>
{
  switch (act.type)
  {
    case 'ADD_TODO_SHOW_MODAL':
      val=
      {
        ...val,
        modal:true
      }
      return val
    default:
      return val
  }
}
