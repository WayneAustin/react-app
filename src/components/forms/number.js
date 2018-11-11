import React, {Component} from 'react'

class Number extends Component {
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
            <label className="number-label">
                <span className="label">{this.props.label}</span>
                <input type="number" 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                />
            </label>
        )
    }
}

export default Number;