import { createContext, useEffect, useState } from 'react'
import { get, save } from 'services/TodoService'
import { Todo, TodoContextType } from 'types'

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggle: () => {}
})

type TodoProviderProps = {
  children: React.ReactNode
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(get())

  useEffect(() => {
    save(todos)
  }, [todos])

  const addTodo = (title: string) => {
    const todo: Todo = { id: todos.length + 1, title: title, done: false }
    setTodos(localTodos => [...localTodos, todo])
  }
  const removeTodo = (todo: Todo) => {
    setTodos(localTodos =>
      localTodos.filter(localTodo => localTodo.id !== todo.id)
    )
  }
  const toggle = (todo: Todo) => {
    const index = todos.indexOf(todo)
    const newTodo = [...todos]
    newTodo[index].done = !todo.done
    setTodos([...newTodo])
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
