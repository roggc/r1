export default
(val={},act)=>
{
  switch (act.type)
  {
    case 'CLEARALL_SET_SHOW_MODAL':
      val=
      {
        ...val,
        modal:act.val
      }
      return val
    default:
      return val
  }
}
