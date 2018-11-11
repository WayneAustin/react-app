import React, {Component} from 'react'

class Textarea extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onInputChange(this.props.id, e.target.value);
    }

    render () {
        return (
            <label className="textarea-label">
                <span className="label">{this.props.label}</span>
                <textarea 
                    value={this.props.value}
                    onChange={this.handleChange}>
                </textarea>
            </label>
        )
    }
}

export default Textarea;