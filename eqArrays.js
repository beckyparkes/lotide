const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed! ${actual} equals ${expected}!`);
  } else {
    console.log(`Assertion Failed! ${actual} doesn\'t equal ${expected}!`);
  }
};

//fucntion eqArrays
//takes in two arrays
//returns true or false, based on a perf match

const eqArrays = function(array1, array2) {
  for(let i = 0; i< array1.length; i++){
    if(array1[i] === array2[i]){
      return true;
    }
    return false;
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);