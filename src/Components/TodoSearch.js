import React, {Component} from 'react';

class TodoSearch extends Component {
    state = {
        search: '',
    }

    onSearchInputChange = ({target: {value}}) => {
        this.setState({search: value});
        this.props.onSearch(value);
    }

    render() {
        const {search} = this.state;
        return (
            <div className="row py-2">
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="Search.." value={search}
                           onChange={this.onSearchInputChange}/>
                </div>
            </div>
        );
    }
}

export default TodoSearch;