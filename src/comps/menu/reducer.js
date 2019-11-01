export default
(val={},act)=>
{
  switch(act.type)
  {
    case 'MENU_TOGGLE_POPUP':
      val=
      {
        ...val,
        showPopup:!val.showPopup
      }
      return val
    default:
      return val
  }
}
