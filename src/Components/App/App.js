import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoSearch from "../TodoSearch";
import Todolist from "../Todolist";
import TodoForm from "../TodoForm";
import './App.css';

//Get json data and save as array object
const data = require('../../data/data.json');

class App extends Component {
    #lastKey = 4;
    state = {
        todos: data ,
        search: '',
    };


    addToTodoList = (_date, _name, _city, editId) => {
        //add new item
        console.log(("jo"));
        if (editId == undefined) {
            console.log(_date);
            console.log(_name);
            console.log(_city);

            this.setState((state) => {
                const todos = [...state.todos];
                todos.push({ id: this.#lastKey++, date:_date,  name:_name, city:_city });
                return { todos };
            });
        }
        //edit item by id
        else{
            this.setState(state => {
                //including chack for not valid inputs
                const todos = [...state.todos].map((item) => item.id !== editId ? item : { ...item, date: (_date === '') ? item.date : _date, name: (_name === '') ? item.name : _name, city: (_city === '') ? item.city : _city });
                console.log(todos);
                return { todos };
            })
        }
    };

    onSearch = (search) => {
        this.setState({ search: search.toLowerCase() });
    };

    componentDidMount() {
        console.log("lastKey");
    };

    deleteTodoItem = (deleteId) => {
        this.setState(state => {
            const todos = [...state.todos].filter(({ id }) => id !== deleteId);
            return { todos };
        })
    };

    editTodoItem = (editId) => {
        console.log(`woeks ${editId}`);
    };

    render() {
        const { todos, search } = this.state;
        //const todolist = todos.filter(todo => todo.name.toString().toLowerCase().includes(search));
        return (
            <div className="container-fluid">
                <main className="container">
                    <div className="todo row col-10">
                        <div className="col-6 todoList" id="scroll">
                            {/* <TodoSearch onSearch={this.onSearch} /> */}
                            <Todolist todoList={todos} deleteTodoItem={this.deleteTodoItem} editTodoItem={this.editTodoItem} />
                        </div>
                        <div className="col-4 todoForm">
                            <TodoForm onAddItem={this.addToTodoList} />
                        </div>
                    </div>
                </main>
                <footer>
                    <img src="mobel.png" alt="Track" />
                </footer>
            </div>

        );
    }
}

export default App;
