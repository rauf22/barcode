export function getSums(arr) {
  var result = arr.reduce(function(sum, current) {
    return sum + current
  });

  return result;
}

export function controlSum(ostatok) {
  let itog = 0
  if (ostatok == 0) {
    return itog
  } else {
    return (10 - ostatok)
  }
}

