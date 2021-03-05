
exports.min = function min (array) {
  if (array == undefined) {
    return 0;
  }
  if (array.length == 0) {
    return 0;
  }
  let min = array[0];
  array.forEach(item => {
    if (item < min) {
      min = item;
    }
  });
  
  return min;
};

exports.max = function max (array) {
  if (array == undefined) {
    return 0;
  }
  if (array.length == 0) {
    return 0;
  }
  let max = array[0];
  array.forEach(item => {
    if (item > max) {
      max = item;
    }
  });
  
  return max;
};

exports.avg = function avg (array) {
  if (array == undefined) {
    return 0;
  }
  if (array.length == 0) {
    return 0;
  }
  let sum = 0;
  let i = 0;
  array.forEach(item => {
    i++;
    sum += item;
  });
  let avg = sum / i;
  return avg;
};
