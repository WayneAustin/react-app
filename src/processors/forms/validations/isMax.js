export default function isMax (max, value) {
    let result;
    if (isNaN(parseFloat(value))) {
        result = value.length <= max;
    } else {
        result = value <= max;
    }
    return result;
}