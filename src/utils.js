export function getDimension(value) {
  if (typeof value === 'number') {
    if (value === 0) return '0';
    return `${value}px`;
  }
  return value;
}
