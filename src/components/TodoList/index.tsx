import TodoListItem from 'components/TodoListItem'
import useTodo from 'hooks/useTodo'

const TodoList = () => {
  const { todos } = useTodo()

  return (
    <>
      <h4>Minha lista de tarefas</h4>
      <table className="uk-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tarefa</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos?.map(todo => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TodoList
