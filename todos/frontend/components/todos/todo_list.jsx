import React from 'react';
import TodoListItem from './todo_list_item';

export const TodoList = ({todos}) => (
  <div>
    <h3>Todo List</h3>
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} />
      ))}
    </ul>
  </div>
);
