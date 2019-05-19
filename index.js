// Sum all numbers in a range 

function sumAll(arr) {
  let total = 0;
  for(let i=Math.max(...arr);i>=Math.min(...arr);i--){
    total+=i;
  }
  return total;
}


// sum of a range of numbers with arithmetic progression :

var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
