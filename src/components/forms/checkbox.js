import React, {Component} from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onCheckboxChange(this.props.id, e.target.checked);
    }

    render() {
        return (
            <label className="checkbox-label">
                <span>{this.props.text}:</span>
                <input type="checkbox"
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

export default Checkbox;