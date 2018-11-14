export default function FormStateProcessor (state, field, value, parent) {
    // takes current state & updated field and returns new state
    let newState = state;
    if (parent) {
        // if parent then its a list
        let pIndex = state.form.fields.findIndex(input => input.id === parent.props.id);

        if (parent.props.type === 'RadioList') {
            newState.form.fields[pIndex].items.forEach(item => {
                item.isSelected = item.id === field.props.id;
            });
            
            return newState;
        }
        if (parent.props.type === 'CheckboxList') {
            let cIndex = state.form.fields[pIndex].items.findIndex(input => input.id === field.props.id);
            newState.form.fields[pIndex].items[cIndex].isSelected = value;

            return newState;
        }
    } else {
        // if setting state of component directly
        let index = state.form.fields.findIndex(input => input.id === field.props.id);
        newState.form.fields[index].value = value;

        return newState;
    }
}