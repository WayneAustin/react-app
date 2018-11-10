import React, {Component} from 'react'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.text = props.text || 'Submit';
    
        this.handleClick = props.click;
    }

    handleClick(event) {
        console.log('clicked');
    }

    render () {
        return (
            <button type="button"
                onClick={this.handleClick}>
                {this.text}
            </button>
        )
    }
}

export default Button;