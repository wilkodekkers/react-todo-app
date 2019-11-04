import React from 'react';

function Todo(props) {
    return (
        <div>
            <p>{props.text}</p>
            <button onClick={() => props.handleDelete(props.id)}>X</button>
        </div>
    );
}

export default Todo;