import React, {Component} from 'react';
import FormComponents from '../forms/all.js';
import MockForm from '../../assets/mocks/basic-form.json';

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

    updateForm (id, value, parent) {
        // #TODO: refactor this
        if (parent && parent.props.type === 'RadioList') {
            // if parent then its a list RadioList
            let pIndex = this.state.form.findIndex(input => input.id === parent.props.id);
            this.setState((previousState) => {
                previousState.form[pIndex].items.forEach(item => {
                    item.isSelected = item.id === id;
                });
                return previousState;
            });
        }
        else if (parent && parent.props.type === 'CheckboxList') {
            // if parent then its a list CheckList
            let pIndex = this.state.form.findIndex(input => input.id === parent.props.id);
            let cIndex = this.state.form[pIndex].items.findIndex(input => input.id === id);
            this.setState((previousState) => {
                previousState.form[pIndex].items[cIndex].isSelected = value;
                return previousState;
            });
        } else {
            // if setting state of component directly
            let index = this.state.form.findIndex(input => input.id === id);
            this.setState((previousState) => {
                previousState.form[index].value = value;
                return previousState;
            });
        }
    }

    render () {
        return (
            <form>
                {this.state.form.map(comp => {
                    let Input = this.inputs[comp.type];
                    return <Input id={comp.id} 
                        type={comp.type}
                        key={comp.id} 
                        value={comp.value} 
                        label={comp.label} 
                        items={comp.items}
                        onInputChange={this.updateForm}></Input>
                })}

                <ul className="results-list">
                    {this.state.form.map(comp => {
                        if (comp.items) {
                            return <li><strong>{comp.id}</strong>: {comp.value}
                                {comp.items.map(item => {
                                return <ul>
                                    <li>{item.text}: {item.isSelected ? item.isSelected.toString() : false}</li>
                                </ul>
                                })}
                            </li>
                        } else {
                            return <li><strong>{comp.id}</strong>: {comp.value}</li>
                        }
                    })}
                </ul>
            </form>
        )
    }
}

export default Form;