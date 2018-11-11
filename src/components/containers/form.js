import React, {Component} from 'react';
import FormComponents from '../forms/all.js';
import MockForm from '../../assets/mocks/basic-form.json';

class Form extends Component {
    constructor (props) {
        super(props);
        this.inputs = FormComponents.components;
        this.state = {value: ''};

        this.updateForm = this.updateForm.bind(this);
    }

    handleClick () {
        console.log('parent');
    }

    components = MockForm;

    output = {};

    updateForm (value) {
        console.log(value);
        console.log(this);
    }

    render () {
        return (
            <form>
                {this.components.map(comp => {
                    let Input = this.inputs[comp.type];
                    return <Input id={comp.id} 
                        value={comp.value} 
                        label={comp.label} 
                        items={comp.options}
                        onChange={this.updateForm}></Input>
                })}

                <p>{this.updateForm}</p>
            </form>
        )
    }
}

export default Form;