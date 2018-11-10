import React, {Component} from 'react'

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.label = props.label;
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render () {
        return (
            <label className="dropdown-label">
                <span className="label">{this.label}</span>
                <select value={this.state.value} 
                    onChange={this.handleChange}>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                </select>
            </label>
        )
    }
}

export default Dropdown;