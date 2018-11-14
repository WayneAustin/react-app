export default function isMinDate (min, value) {
    min = new Date(min);
    value = new Date(value);

    return value >= min;
}