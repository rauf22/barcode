export function getSums(arr) {
  const result = arr.reduce((sum, current) => sum + current);
  return result;
}

export function controlSum(ostatok, code) {
  if (ostatok === 0 && code) {
    return 0;
  }
  return (10 - ostatok);
}
