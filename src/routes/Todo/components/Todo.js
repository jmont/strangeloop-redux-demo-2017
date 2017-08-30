import React from 'react'
import PropTypes from 'prop-types'

const style = { margin: '0 auto' }

const EmptyTodo = ({ loadFakeTodoList }) => (
    <div style={style} >
        <button onClick={loadFakeTodoList}>Load List</button>
    </div>
)

EmptyTodo.propTypes = {
    loadFakeTodoList: PropTypes.func.isRequired,
}

const TodoItem = ({ id, task }) => (
    <li key={id}>{task}</li>
)

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
}

const Todo = ({ title, todoItems }) => (
    <div style={style} >
        <h2>{ title }</h2>
        {todoItems.map((t) => TodoItem(t))}
    </div>
)

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    todoItems: PropTypes.array.isRequired,
}

export default (props) => props.isLoading ? EmptyTodo(props) : Todo(props)
