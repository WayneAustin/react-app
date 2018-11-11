import React, {Component} from 'react';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onRadioChange(this.props.id);
    }

    render() {
        return (
            <label>
                <span className="label">{this.props.label}</span>
                <input type="radio"
                    name={this.props.group}
                    id={this.props.id} 
                    value={this.props.id}
                    checked={this.props.isSelected}
                    onChange={this.handleChange}
                />
            </label>
        )
    }
}

export default Radio;