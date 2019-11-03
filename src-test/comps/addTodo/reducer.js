export default
(val={},act)=>
{
  switch (act.type)
  {
    case 'ADDTODO_SET_SHOW_MODAL':
      val=
      {
        ...val,
        modal:act.val
      }
      return val
    case 'ADDTODO_SET_INPUT':
      val=
      {
        ...val,
        input:act.val
      }
      return val
    default:
      return val
  }
}
