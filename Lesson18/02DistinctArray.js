function distinctArr(arr){
    let uniqueChars = [...new Set(arr)]
    console.log(uniqueChars.join(" "));

}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
