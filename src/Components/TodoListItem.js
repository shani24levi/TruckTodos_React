import React from 'react';
import {MdDelete, MdEdit} from 'react-icons/md';

const TodoListItem = ({ todo, todoDate, todoCity, deleteTodoItem, editTodoItem }) => (

    <li style={{ display: 'block', padding: '.30em' }}>
        <div className="row justify-content-between" style={{ fontSize: 'smaller' }}>
            <div className="col-xs-3 p-1">{todoDate}</div>
            <div className="col-xs-3 p-1">{todo}</div>
            <div className="col-xs-3 p-1">{todoCity}</div>
            <div className="row ustify-content-end">
                <div className="col-1 pr-4" onClick={deleteTodoItem} >
                    <button className="btn btn-danger btn-sm" style={{ borderRadius: '50%' }}>
                    <MdDelete/>
                    </button>
                </div>
                <div className="col-1" onClick={editTodoItem}>
                    <button className="btn btn-danger btn-sm" style={{ borderRadius: '50%' }}>
                    <MdEdit/>
                    </button>
                </div>
            </div>
        </div>
    </li>
);

export default TodoListItem;