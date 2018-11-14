import React, {Component} from 'react';
import FormComponents from '../forms/all';
import MockForm from '../../assets/mocks/basic-form.json';
import FormStateProcessor from '../../processors/forms/state';
import FormValidationProcessor from '../../processors/forms/validation';
class Form extends Component {
    constructor (props) {
        super(props);
        this.inputs = FormComponents.components;
        this.state = {form: MockForm};

        this.updateForm = this.updateForm.bind(this);
    }

    handleClick () {
        console.log('parent');
    }

    output = {};

    updateForm (field, value, parent) {
        // #TODO: refactor this in to external processor
        this.setState((state) => {
            state = FormStateProcessor(this.state, field, value, parent);
            state = FormValidationProcessor(this.state, field, value);
            return state;
        });
    }

    render () {
        return (
            <form>
                {this.state.form.fields.map(comp => {
                    let Input = this.inputs[comp.type];
                    return <Input id={comp.id} 
                        type={comp.type}
                        key={comp.id} 
                        value={comp.value} 
                        label={comp.label} 
                        items={comp.items}
                        url={comp.url}
                        isValid={comp.isValid}
                        onInputChange={this.updateForm}></Input>
                })}

                <ul className="results-list">
                    {this.state.form.fields.map(comp => {
                        if (comp.items) {
                            return <li key={comp.id}><strong>{comp.id}</strong>: {comp.value}
                                {comp.items.map(item => {
                                return <ul>
                                    <li key={item.id}>{item.text}: {item.isSelected ? item.isSelected.toString() : false}</li>
                                </ul>
                                })}
                            </li>
                        } else {
                            return <li key={comp.id}><strong>{comp.id}</strong>: {comp.value}</li>
                        }
                    })}
                </ul>
            </form>
        )
    }
}

export default Form;