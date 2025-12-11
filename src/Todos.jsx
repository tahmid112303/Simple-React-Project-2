import React, { use } from 'react';
import Todo from './Todo';
import "./Todos.css"

const Todos = ({userPromise}) => {
    const todos=use(userPromise)
    return (
        <div className='mainBox'>
            {todos.map(todo=><Todo
            todo={todo}
            key={todo.id}
            ></Todo>)}
        </div>
    );
};

export default Todos;