/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  
  let max = arr[0];
  let len=arr.length;
  for (i=0; i < len; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

export default max;
