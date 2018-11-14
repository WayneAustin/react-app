import Validation from './validations/all';

export default function FormValidationProcessor (state, field, value) {
    // takes updated field and validates returns bool (passes validation)
    let newState = state;
    let index = state.form.fields.findIndex(input => input.id === field.props.id);

    // loop through validation settings
    let result = Object.keys(newState.form.fields[index].validation).every(v => {
        const req = newState.form.fields[index].validation[v];
        switch(v) {
            case "required":
            return Validation.methods.isRequired(value);
            
            case "min":
            return Validation.methods.isMin(req, value);
            
            case "max":
            return Validation.methods.isMax(req, value);

            case "minDate":
            return Validation.methods.isMinDate(req, value);

            case "maxDate":
            return Validation.methods.isMaxDate(req, value);

            default:
            return false;
        }

    });

    newState.form.fields[index].isValid = result;

    return newState;
}