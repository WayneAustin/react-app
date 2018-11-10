import React, { Component } from 'react';
import Radio from './radio';

class RadioList extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render () {
        return (
            <ul className="radio-list">
                {this.props.items.map((item) => 
                <li>
                    <Radio group={this.props.id} key={item.key} label={item.text}></Radio>
                    </li>
                )}
            </ul>
        )
    }
}

export default RadioList;