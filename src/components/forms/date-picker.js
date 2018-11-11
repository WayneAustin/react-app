import React, {Component} from 'react'

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value || ''};
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render () {
        return (
            <label className="datepicker-label">
                <span className="label">{this.props.label}</span>
                <input type="date" 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                />
            </label>
        )
    }
}

export default DatePicker;