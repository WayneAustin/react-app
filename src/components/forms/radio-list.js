import React, { Component } from 'react';
import Radio from './radio';

class RadioList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.props.onInputChange(id, null, this);
    }

    render () {
        return (
            <ul className="radio-list">
                {this.props.items.map((item) => 
                <li key={item.id}>
                    <Radio group={this.props.id} 
                        id={item.id} 
                        label={item.text}
                        value={item.value}
                        isSelected={item.isSelected}
                        onRadioChange={this.handleChange}>
                    </Radio>
                </li>
                )}
            </ul>
        )
    }
}

export default RadioList;