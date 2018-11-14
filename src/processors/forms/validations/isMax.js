export default function isMax (max, value) {
    let result;
    if (typeof value === 'string') {
        result = value.length <= max;
    } else if (typeof value === 'number') {
        result = value <= max;
    }
    return result;
}