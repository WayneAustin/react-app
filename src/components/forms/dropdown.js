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
                    <option value=''>Please select</option>
                    {this.props.items.map((item) => 
                        <option value={item.id}
                            key={item.id}>
                            {item.text}    
                        </option>
                    )}
                </select>
            </label>
        )
    }
}

export default Dropdown;