function findTopIntegers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isTopInteger = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      result.push(arr[i]);
    }
  }
  console.log(result.join(" "));
}

findTopIntegers([1, 4, 3, 2])
