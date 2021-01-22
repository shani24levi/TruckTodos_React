import React, {Component} from 'react';
import TodoListItem from "./TodoListItem";

class Todolist extends Component {
    render() {
        const {todoList, deleteTodoItem,editTodoItem} = this.props;

        return (
            <ul className="list-group" >
                {todoList.map(({id, name, date, city}) => <TodoListItem key={id} todo={name} todoDate={date} todoCity={city} 
                deleteTodoItem={() => {deleteTodoItem(id);}}
                editTodoItem={() => {editTodoItem(id);}}
                />)}
            </ul>
        );
    }
} 

export default Todolist;