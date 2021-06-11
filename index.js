// Add your functions here
function map(arr, callback) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }
    return newArr
}

function reduce(src, callback, startingValue) {
    let total;
    if (startingValue) {
      total = startingValue;
      for (let i = 0; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    } else {
      total = src[0];
      for (let i = 1; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    }
  }
    