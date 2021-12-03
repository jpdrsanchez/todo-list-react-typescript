export type Todo = {
  id: number
  title: string
  done: boolean
}

export type TodoContextType = {
  todos: Todo[]
  addTodo(title: string): void
  removeTodo(todo: Todo): void
  toggle(todo: Todo): void
}

export type AddTodoForm = {
  title: string
}
