import React from "react";

function InputContainer({inputValue, writeTodo, addTodo}) {
    return (
        <div className="input-container">
            <input type="text" value={inputValue} onChange={writeTodo}/>
            <button onClick={addTodo}>+</button>
        </div>
    );
}

export default InputContainer;