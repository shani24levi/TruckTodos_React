import React from 'react';

const TodoListItem = ({todo, deleteTodoItem,editTodoItem}) => (
    <li className="list-group-item">
        <div className="row">
            <div className="col-xs-4 col-sm-6">{todo}</div>
            <div className="col-2" style={{textAlign: 'left'}}>
                <button className="btn btn-danger btn-sm" onClick={deleteTodoItem}>X
                </button>
            </div>
            <div className="col-2" style={{textAlign: 'left'}}>
                <button className="btn btn-danger btn-sm" onClick={editTodoItem}>E
                </button>
            </div>
        </div>
    </li>
);

export default TodoListItem;