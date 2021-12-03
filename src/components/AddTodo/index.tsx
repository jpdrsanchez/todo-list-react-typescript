import useTodo from 'hooks/useTodo'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AddTodoForm } from 'types'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
  title: yup.string().required('Tarefa inválida')
})

const AddTodo = () => {
  const { addTodo } = useTodo()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AddTodoForm>({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()

  const onSubmit = (data: AddTodoForm) => {
    addTodo(data.title)
    reset({})
    navigate('/', { replace: true })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Nova Tarefa</h4>
      <div className="uk-margin uk-width-1-1">
        <input
          type="text"
          id="title"
          placeholder="Nova tarefa..."
          className="uk-input"
          {...register('title')}
        />
        <span>
          <small>
            <strong className="uk-text-danger">{errors.title?.message}</strong>
          </small>
        </span>
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">
          Salvar
        </button>
      </div>
    </form>
  )
}

export default AddTodo
