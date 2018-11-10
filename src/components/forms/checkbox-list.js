import React, { Component } from 'react';
import Checkbox from './checkbox';

class CheckboxList extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.items = props.items;
    }

    render() {
        return (
            <ul className="checkbox-list">
                {this.items.map((item) =>
                    <li> 
                        <Checkbox key={item.key} text={item.text}></Checkbox>
                    </li>
                )}
            </ul>
        )
    }
}

export default CheckboxList;