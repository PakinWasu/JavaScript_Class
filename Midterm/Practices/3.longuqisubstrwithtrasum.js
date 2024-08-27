function longestUniqueSubarrayWithTargetSum(arr, targetSum) {
  var result = [];
  let sizewin = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k ++) {
      let sett = new Set(arr.slice(k, k + sizewin));
      let seta = Array.from(sett);
      if (seta.length == sizewin) {
        let sum = seta.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        // console.log(seta  , sum)
        if(sum == targetSum && result.length < seta.length ){
           result = seta
        }
      }

      
    }
    sizewin++;
  }
  return `output: { maxlength: ${result.length}, subbarray: [${result}] }`
}
console.log(
  longestUniqueSubarrayWithTargetSum([2, 3, 4, 5, 6, 2, 3, 4, 7], 15)
);
console.log(
  longestUniqueSubarrayWithTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15)
);
console.log(
  longestUniqueSubarrayWithTargetSum([4, 5, 6, 7, 7, 8, 9, 10, 11], 26)
);
console.log(
  longestUniqueSubarrayWithTargetSum([1, 1, 1, 1, 1], 2)
);