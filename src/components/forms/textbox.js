import React, {Component} from 'react'

class Textbox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value || ''};
        this.label = props.label;
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render () {
        return (
            <label className="textbox-label">
                <span className="label">{this.label}</span>
                <input type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                />
            </label>
        )
    }
}

export default Textbox;