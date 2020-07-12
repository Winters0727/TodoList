import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoListItem.scss';

const TodoList = ({ todos, removeTodos, changeCheck }) => {
    return (
        <React.Fragment>
            <div className="TodoList">
              { todos.map(todo => (
                  <TodoListItem todo={ todo } key={ todo.id } removeTodos={ removeTodos } changeCheck={ changeCheck }/>
                  ))}
            </div>
        </React.Fragment>
    )
}
export default TodoList;