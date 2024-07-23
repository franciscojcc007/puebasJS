function quickSort(arr) {
  if (arr.length < 1) return []
  var left = [];
  var right = [];
  var pivot = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
}

function binarySearch(arr, l, r, x) {
  if (l > r) return -1;

  const m = Math.floor((l + r) / 2);
  if (arr[m] == x) return m;

  if (arr[m] < x) {
    return binarySearch(arr, m + 1, r, x);
  } else {
    return binarySearch(arr, l, m - 1, x);
  }
}

const arr = [2, 10, 4, 1, 20, 9, 14, 16, 5, 7, 17];
console.log(quickSort(arr));
console.log(binarySearch(arr, 0, arr.length - 1, 2));
