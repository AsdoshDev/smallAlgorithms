// Find all occurances in a string and replace with empty space. (continuous multiple occurances also to be replaced with single empty space)
function songDecoder(song){  
return song.split('WUB').filter(Boolean).join(' ');
}

(or)

function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

(or)

function songDecoder(song){
  return song.replace(/(WUB){1,}/g," ").trim()
}


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


/// Another solution - 

function destroyer(arr) {
  var args = Array.from(arguments).slice(1); //get the second list of arguments
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

// One more solution

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments); //get all the arguments
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  /* to remove undefined empty places created by delete operator */
  return arr.filter(Boolean);
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



// fibonacci of odd numbers 

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

// test here
sumFibs(4);


// rotate the array towards right by k index


function rotate(arr, k) {
    let length = arr.length;
    let newArr = new Array(length);
    for (let i = 0; i < length; i++) {
        let index = i + k;
        if (index > length - 1) {
            index = index - length;
        }
        newArr[index] = arr[i];
    }
    return newArr;
}

rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 1);





