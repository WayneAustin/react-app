import React, {Component} from 'react'

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onInputChange(this.props.id, e.target.value);
    }

    render () {
        return (
            <label className="datepicker-label">
                <span className="label">{this.props.label}</span>
                <input type="date" 
                    value={this.props.value} 
                    onChange={this.handleChange} 
                />
            </label>
        )
    }
}

export default DatePicker;