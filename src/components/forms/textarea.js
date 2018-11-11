import React, {Component} from 'react'

class Textarea extends Component {
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
            <label className="textarea-label">
                <span className="label">{this.props.label}</span>
                <textarea onChange={this.handleChange}>
                    {this.state.value}
                </textarea>
            </label>
        )
    }
}

export default Textarea;