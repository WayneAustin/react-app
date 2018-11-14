export default function isMin (min, value) {
    let result;
    if (isNaN(parseFloat(value))) {
        result = value.length >= min;
    } else {
        result = value >= min;
    }
    return result;
}