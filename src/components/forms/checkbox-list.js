import React, { Component } from 'react';
import Checkbox from './checkbox';

class CheckboxList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id, value) {
        this.props.onInputChange(id, value, this);
    }

    render() {
        return (
            <ul className="checkbox-list">
                {this.props.items.map((item) =>
                    <li key={item.id}> 
                        <Checkbox id={item.id} 
                            label={item.text}
                            value={item.value}
                            isSelected={item.isSelected}
                            onCheckboxChange={this.handleChange}>
                        </Checkbox>
                    </li>
                )}
            </ul>
        )
    }
}

export default CheckboxList;