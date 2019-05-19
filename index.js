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




// compare two arrays and return unique items  - MY SOLUTION

function diffArray(arr1, arr2) {
  var newArr = [];
  for(let i=0;i<arr2.length;i++){
    debugger;
    if(!arr1.includes(arr2[i]))
      newArr.push(arr2[i]);
  }
  for(let i=0;i<arr1.length;i++){
    if(!arr2.includes(arr1[i]))
      newArr.push(arr1[i]);
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// OTHER SOLUTIONS : merge the arrays and then filter ones thats not present in other.

 function diffArray(arr1, arr2) {
      return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
    }


// remove arguments in second array from the first (using rest operator is the solution) 

function destroyer(arr,...args) {
 return arr.filter(item => args.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);





