import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from './action';

const getVisibleTodos = (todos,filter) =>{
    switch(filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter((t)=> t.completed);
        case "SHOW_ACTIVE":
            return todos.filter((t)=> !t.completed);
        default:
            return todos;
    }
}

function TodoList() {
    const {todos,filter} = useSelector((state)=> state.todo);
    const filteredTodos = getVisibleTodos(todos,filter);
    const dispatch = useDispatch();

   return (
    <div>
        <ul>
            {filteredTodos.map((todo)=> (
                <li
                    key={todo.id}
                    onClick ={()=> dispatch(toggleTodo(todo.id))}
                    style={{
                        textDecoration: todo.completed ? "line-through" : "",
                    }}
                >
                    {todo.text}
                </li>
            )
            
            )
            }
        </ul>
    </div>
  )
}

export default TodoList