import React, {Component} from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onInputChange(this.props.id, e.target.value);
    }

    render() {
        return (
            <label className="checkbox-label">
                <span>{this.props.text}:</span>
                <input type="checkbox"
                    key={this.key} 
                    value={this.props.value}
                />
            </label>
        )
    }
}

export default Checkbox;