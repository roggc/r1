export default
(val={},act)=>
{
  let todos
  switch (act.type)
  {
    case 'TODOS_ADD':
      todos=val.todos.filter(todo=>true)
      todos.push({text:act.val,done:false})
      val=
      {
        ...val,
        todos
      }
      return val
    default:
      return val
  }
}
