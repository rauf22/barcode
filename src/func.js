export function getSums(arr) {
  var result = arr.reduce(function(sum, current) {
    return sum + current
  });

  return result;
}

export function controlSum(ostatok, code) {

  if (ostatok == 0 && code) {
    return 0;
  } else {
    return (10 - ostatok)
  }
}

