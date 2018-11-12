import React, {Component} from 'react'

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onInputChange(e, this);
    }

    render () {
        return (
            <button type="button"
                onClick={this.handleClick}>
                {this.props.label}
            </button>
        )
    }
}

export default Button;