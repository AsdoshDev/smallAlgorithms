// Sum all numbers in a range 

function sumAll(arr) {
  let total = 0;
  for(let i=Math.max(...arr);i>=Math.min(...arr);i--){
    total+=i;
  }
  return total;
}
