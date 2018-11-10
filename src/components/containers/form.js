import React, {Component} from 'react';
import FormComponents from '../forms/all.js';
import MockForm from '../../assets/mocks/basic-form.json';

class Form extends Component {
    constructor (props) {
        super(props);
        this.inputs = FormComponents.components;
        this.state = {value: ''};
    }

    handleClick () {
        console.log('parent');
    }

    components = MockForm;

    render () {
        return (
            <form>
                {this.components.map(comp => {
                    let Input = this.inputs[comp.type];
                    return <Input id={comp.id} 
                        value={comp.value} 
                        label={comp.label} 
                        items={comp.options}></Input>
                })}
            </form>
        )
    }
}

export default Form;