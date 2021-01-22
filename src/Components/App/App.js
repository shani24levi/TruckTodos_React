import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Todolist from "../Todolist";
import './App.css';

//Get json data and save as array object
const data = require('../../data/data.json');

class App extends Component {
    #lastKey = 4;
    state = {
        todos: data,
        //for form changes
        todoChoos: [],
        todoText: '',
        todoName: '',
        todoCity: '',
        todoId: ''
    };


    addToTodoList = (_date, _name, _city, editId) => {
        //add new item
        if (editId == "") {
            this.setState((state) => {
                const todos = [...state.todos];
                todos.push({ id: this.#lastKey++, date: _date, name: _name, city: _city });
                return { todos };
            });
        }
        //edit item by id
        else {
            this.setState(state => {
                //including chack for not valid inputs
                const todos = [...state.todos].map((item) => item.id !== editId ? item : { ...item, date: (_date === '') ? item.date : _date, name: (_name === '') ? item.name : _name, city: (_city === '') ? item.city : _city });
                console.log(todos);
                return { todos };
            })
        }
    };


    deleteTodoItem = (deleteId) => {
        this.setState(state => {
            const todos = [...state.todos].filter(({ id }) => id !== deleteId);
            return { todos };
        })
    };

    editTodoItem = (editId) => {
        //get the item by id 
        const myChos = this.state.todos.filter(({ id }) => id == editId);
        console.log(myChos);

        //set it in the state
        this.setState((state) => {
            const todoChoos = state.todoChoos;
            todoChoos.push({ id: editId, date: myChos[0].date, name: myChos[0].name, city: myChos[0].city });
            return { todoChoos };
        });
        this.setState((state) => { state.todoText = myChos[0].date });
        this.setState((state) => { state.todoName = myChos[0].name });
        this.setState((state) => { state.todoCity = myChos[0].city });
        this.setState((state) => { state.todoId = editId; });
    };

    onChangeInputTodoList = ({ target: { value } }) => {
        this.setState({ todoText: value });
    };

    onChangeInputTodoName = ({ target: { value } }) => {
        this.setState({ todoName: value });
    };

    onChangeInputTodoCity = ({ target: { value } }) => {
        this.setState({ todoCity: value });
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        const our_data = {
            todoText: this.state.todoText,
            todoName: this.state.todoName,
            todoCity: this.state.todoCity,
            todoId: this.state.todoId
        }
        this.addToTodoList(our_data.todoText, our_data.todoName, our_data.todoCity, our_data.todoId);
        //clear form valus and state
        this.setState({ todoText: '', todoName: '', todoCity: '', todoId: '' });
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="container-fluid">
                <main className="container">
                    <div className="todo row col-10">
                        <div className="col-6 todoList" id="scroll">
                            <Todolist todoList={todos} deleteTodoItem={this.deleteTodoItem} editTodoItem={this.editTodoItem} />
                        </div>
                        <div className="col-4 todoForm">

                            <form className="text-center" onSubmit={this.onSubmitForm}>
                                <div className="mb-3">
                                    <input type="date" className="form-control" id="id_date" aria-describedby="emailHelp" value={this.state.todoText}
                                        onChange={this.onChangeInputTodoList} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="id_name" placeholder="Name" value={this.state.todoName}
                                        onChange={this.onChangeInputTodoName} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="id_city" placeholder="City" value={this.state.todoCity}
                                        onChange={this.onChangeInputTodoCity} />
                                </div>
                                <button className="btn btn-primary mb-3" type="submit" style={{ backgroundColor: "#ff25b6", borderColor: "#ff25b6" }}>Save</button>
                            </form>
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
