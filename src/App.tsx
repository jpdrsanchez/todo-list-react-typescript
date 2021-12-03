import AddTodo from 'components/AddTodo'
import Navbar from 'components/Navbar'
import TodoList from 'components/TodoList'
import TodoProvider from 'context/TodoContext'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <TodoProvider>
      <div className="uk-container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/create" element={<AddTodo />} />
          <Route path="/" element={<TodoList />} />
        </Routes>
      </div>
    </TodoProvider>
  )
}

export default App
