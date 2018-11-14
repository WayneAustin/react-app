import React, {Component} from 'react'

class Textbox extends Component {
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
            <label className={`textbox-label ${isValid}`}>
                <span className="label">{this.props.label}</span>
                <input type="text" 
                    value={this.props.value} 
                    onChange={this.handleChange} 
                />
            </label>
        )
    }
}

export default Textbox;