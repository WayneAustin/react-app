export default function isMaxDate (max, value) {
    max = new Date(max);
    value = new Date(value);

    return value <= max;
}