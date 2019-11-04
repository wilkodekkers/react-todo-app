import React, {Component} from 'react';

import './TodoList.css';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            todo: '',
            todos: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        this.setState({todo: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.todo],
            todo: ''
        });
    }

    handleDelete(event) {
        let array = [...this.state.todos];
        array.splice(event, 1);
        this.setState({todos: array});
    }

    render() {
        let todos = this.state.todos.map((todo, index) => <Todo key={index} text={todo} id={index} handleDelete={this.handleDelete}/>)
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" placeholder="Enter a todo..." type="text" value={this.state.todo} onChange={this.handleChange}/>
                    <button className="form-button">Add Todo</button>
                </form>

                {todos}
            </div>
        )
    }
}

export default TodoList;