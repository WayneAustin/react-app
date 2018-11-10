import React, { Component } from 'react';
import Checkbox from './checkbox';

class CheckboxList extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
    }

    options = [
        { key: '1', text: 'Option1' },
        { key: '2', text: 'Option2' },
        { key: '3', text: 'Option3' },
        { key: '4', text: 'Option4' }
    ]


    render () {
        return (
            <div>
                {this.options.map((option) => 
                <Checkbox key={option.key} text={option.text}></Checkbox>
                )}
            </div>
        )
    }
}

export default CheckboxList;