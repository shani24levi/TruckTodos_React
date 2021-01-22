import React, {Component} from 'react';

class TodoForm extends Component {
    state = {
        todoText: '',
        todoName: '',
        todoCity: ''
    };
    
    onChangeInputTodoList = ({target: {value}}) => {
        this.setState({todoText: value});
    };

    onChangeInputTodoName = ({target: {value}}) => {
        this.setState({todoName: value});
    };

    onChangeInputTodoCity = ({target: {value}}) => {
        this.setState({todoCity: value});
    };


    onSubmitForm = (e) => {
        e.preventDefault();
        const our_data = {
            todoText: this.state.todoText,
            todoName: this.state.todoName,
            todoCity: this.state.todoCity
        }
        console.log(our_data);
        //const {todoText} = this.state;
        this.props.onAddItem(our_data.todoText ,our_data.todoName,our_data.todoCity);
        this.setState({todoText: '',todoName: '',todoCity: ''});
    }

    render() {
        const {todoText,todoName,todoCity} = this.state;
        return (
            <form className="text-center" onSubmit={this.onSubmitForm}>
                <div className="mb-3">
                      <input type="date" className="form-control" id="id_date" aria-describedby="emailHelp" value={todoText}
                       onChange={this.onChangeInputTodoList}/>
                </div>
                <div className="mb-3">
                      <input type="text" className="form-control" id="id_name" placeholder="Name" value={todoName}
                       onChange={this.onChangeInputTodoName}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="id_city" placeholder="City" value={todoCity}
                       onChange={this.onChangeInputTodoCity}/>
                    </div>
                <button className="btn btn-primary mb-3" type="submit" style={{backgroundColor: "#ff25b6", borderColor: "#ff25b6"}}>Save</button>
            </form>
        );
    }
}

export default TodoForm;