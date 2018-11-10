import React, {Component} from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.label = props.text || 'Checkbox';
        this.key = props.key || '';

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <label className="checkbox-label">
                <span>{this.label}:</span>
                <input type="checkbox"
                    key={this.key} 
                    value={this.state.value}
                />
            </label>
        )
    }
}

export default Checkbox;