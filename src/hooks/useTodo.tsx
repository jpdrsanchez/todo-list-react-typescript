import { TodoContext } from 'context/TodoContext'
import { useContext } from 'react'

const useTodo = () => {
  const { todos, addTodo, removeTodo, toggle } = useContext(TodoContext)
  return { todos, addTodo, removeTodo, toggle }
}

export default useTodo
