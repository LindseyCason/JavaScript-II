// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
 // getLength passes the length of the array into the callback. 
return cb(arr.length); 
}

getLength(items, function(long){
  console.log(long)
});


  


function last(arr, cb) {
  // last passes the last item of the array into the callback.

  //DO I WANT THE ITEM OR THE NUMBER OF THE ITEM RETURNING?
return cb(arr.length-1);
}
last(items, function(end){
  console.log(items[end])
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y)
}

sumNums(5,4, function(sumthing){
  console.log(sumthing)
})


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
return cb(x*y)
}
multiplyNums(5,2, function(product){
  console.log(product)
})





function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

list.forEach(element => {
  if(element === item){
    cb(true)
  } else{
    cb(false)
  }
});
}

contains("Gum", items, function(result){
  if(result === true){
  console.log("I found a match!");
}})












/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// }
