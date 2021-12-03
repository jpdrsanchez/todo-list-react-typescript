import useTodo from 'hooks/useTodo'
import { Todo } from 'types'

type TodoListItemProps = {
  todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {
  const { removeTodo, toggle } = useTodo()

  const onRemove = (todo: Todo) => {
    removeTodo(todo)
  }

  const handleChange = () => {
    toggle(props.todo)
  }

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            className="uk-checkbox"
            type="checkbox"
            name="todo"
            id="todo"
            checked={props.todo.done}
            onChange={handleChange}
          />
        </label>
      </td>
      <td className="uk-width-expand">{props.todo.title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(props.todo)}
        ></button>
      </td>
    </tr>
  )
}

export default TodoListItem
