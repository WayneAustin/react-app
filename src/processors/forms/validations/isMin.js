export default function isMin (min, value) {
    let result;
    if (typeof value === 'string') {
        result = value.length >= min;
    } else if (typeof value === 'number') {
        result = value >= min;
    }
    return result;
}