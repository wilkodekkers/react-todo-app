import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <TextField label="Add todo" margin="normal" value={this.state.todo} onChange={this.handleChange} />
                    <Button variant="contained" color="secondary">
                        Add Todo
                    </Button>
                </form>

                {todos}
            </Container>
        )
    }
}

export default TodoList;