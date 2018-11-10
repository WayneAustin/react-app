import React, {Component} from 'react';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <label>
                <span className="label">{this.props.label}</span>
                <input type="radio"
                    name={this.props.group}
                    key={this.props.key} 
                    value={this.state.value}
                />
            </label>
        )
    }
}

export default Radio;