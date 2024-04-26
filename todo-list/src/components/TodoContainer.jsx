import React from 'react'
import Todo from './Todo'

function TodoContainer({todos, deleteTodo}) {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => {
                return (    
                <Todo key={index} todos={todo} index={index} deleteTodo={deleteTodo}/>
                )
            })}
        </div>
    )
}

export default TodoContainer