import React, {Component} from 'react'

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onInputChange(this, e.target.value);
    }

    render () {
        const isValid = this.props.isValid ? 'valid' : 'invalid';
        return (
            <label className={`dropdown-label ${isValid}`}>
                <span className="label">{this.props.label}</span>
                <select value={this.props.value} 
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