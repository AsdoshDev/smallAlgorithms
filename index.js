// ACTUAL ANSWER FOR MISSING POSITIVE NUMBER
var firstMissingPositive = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        } else {
            i++;
        }
    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    return i + 1;
};


//find the first missing positive integer.

/**
 * @param {number[]} nums
 * @return {number}
 */

let firstMissingPositive = (nums) => {
  let isOnePresent = nums.find((num) => num === 1);
  if (!isOnePresent) return 1;
  else {
    nums.sort((a,b) => a-b);
    for (let i = 0; i < nums.length; i++) {
      let lastIndex = nums.lastIndexOf(nums[i]);
      let noRepeat = i === lastIndex;
      if (noRepeat && isNotConsecutive(nums,i)) {
        return nums[i] + 1;
      } else {
        i = lastIndex;
        if(isNotConsecutive(nums,i)) return nums[i] + 1;
      }
    }
  }
};

let isNotConsecutive = (nums,i) => (nums[i] > 0) && (nums[i] !== nums[i + 1] - 1);

// find the product of prime numbers and given both.

x = 8;
y = 3;

const prime = (n) => {
    if(n === 1)
    return false;
    else if(n === 2)
    return true;
    else {
       for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;
    }
}

getArray = (x) => Array.from(Array(x).keys(),Number).map(n => n+1);

prodOfPrime = (arr) =>  arr.reduce((a,c) => a = prime(c) ? a*c : a,1);

console.log(prodOfPrime(getArray(x))/prodOfPrime(getArray(y)));

// valid Parenthesis prsent in string ()

validParentheses = (str) => {
  const regex = /\(\)/g;
  while(str.length> 0){
  if(!regex.exec(str))
    return false;
  else{
    str = str.replace(regex,'')
  }
}
return true;
}

//get array chunk

//using slice (starting index, ending index)
function chunkArray(arr,no){
   let fullArr = [];
    for(let i=0;i<arr.length;i+=no){
      fullArr.push(arr.slice(i,i+no));
    }
   return fullArr;
}


//using splice (starting index, no of items from starting index)
function chunkArray(arr,no){
   let fullArr = [];
   while(arr.length > 0){
      fullArr.push(arr.splice(0,no));
   }
   return fullArr;
}




// add 2 numbers and also currying addition of 2 numbers based on the arguments passed.

function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}
// test here
addTogether(2, 3);



// find the number of trailing zeros in a factorial of a number
function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    console.log("n ---> " + n);
    zs+=n
  }
  return zs;
}


// find the no of cakes that can be done with the recipe against the available ingredients
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}

// find unique number in the array
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}


// filter all substring in array1 that are part of array2
function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}


// find the roman equivalent of a number
function solution(number){
  // convert the number to a roman numeral
var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

var ans = '';
while(number>0){
    console.log(number +  " > 0");
    for(a in roman){ 
       console.log("ROMAN " + a);
        if(roman[a]<=number){ 
          console.log(roman[a] +  " <= " + number);
          ans += a; 
          console.log("ans " + ans);
          number-=roman[a]; break;
          console.log("number " + number);
          }
    }
}
return ans;
}



// find the odd number in the bunch. even/odd is the oddness. 
function iqTest(numbers){
  var nums = numbers.split(" ").map(x => x % 2);  
  var sum = nums.reduce((a,b) => a + b);  
  var target = sum > 1 ? 0 : 1;
  
  return nums.indexOf(target) + 1;
}

// create a string in a certain format with input as an array
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

(or)

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}



//Split string into pairs and if one does not have a pair , replace with "underscore"
function splitChar(str){  
return (str.length % 2 ? str + '_' : str).match(/../g);
}

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





