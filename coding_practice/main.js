// ============ ====== =========== ======== Reverse string ====================

// const str = "AMMA";

// function reverseString(str) {
//   let reversed = "";

//   for (let i = str.length-1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed
// }

// console.log(reverseString(str));

// ============ ====== =========== ======== Palindrom ====================

// const str = "AMMN";

// function checkPalindrom(str) {
//   let reversed = "";

//   for (let i = str.length-1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed === str
// }

// console.log(checkPalindrom(str));

// ============ ====== =========== ======== Remove Duplicates ====================

// using new Set
// const arr = [1,2,3,1,2,3]

// function removeDuplicate(arr){

//   let result = new Set()

//   for(let i=0; i<arr.length; i++){
//        result.add(arr[i])
//   }
//   return result

// }

// console.log(removeDuplicate(arr))

// Using Include

// const arr = [1, 2, 3, 1, 2, 3];

// function removeDuplicate(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(removeDuplicate(arr));

// ============ ====== =========== Find Duplicates ====================

// // using new Set

// const arr = [1,2,3,1,]

// function removeDuplicate(arr){

//   let duplicates = new Set()
//   let current = new Set()

//   for(let i=0; i<arr.length; i++){
//       if(current.has(arr[i])){
//        duplicates.add(arr[i])
//       }else{
//          current.add(arr[i])
//       }
//       }
//   return duplicates

// }

// console.log(removeDuplicate(arr))

// using Includes

// const arr = [1,1,1,1,1,2,3,1,]

// function removeDuplicate(arr){

//   let duplicates = []
//   let current = []

//   for(let i=0; i<arr.length; i++){
//       if(current.includes(arr[i])){
//            if(!duplicates.includes(arr[i])){
//               duplicates.push(arr[i])
//            }
//       }else{
//          current.push(arr[i])
//       }
//       }
//   return duplicates

// }

// console.log(removeDuplicate(arr))

// =============== Two Sum ==========

// const arr = [1,2,3,4,5,6]
// const target =11

// function twoSum (arr, target){

//   for(let i=0; i<arr.length; i++){
//       for(let j=i+1; j<arr.length; j++){
//          if(arr[i] + arr[j] === target){
//            return [i,j]
//          }
//       }
//   }
//   return []
// }

// console.log(twoSum(arr,target))

// add and remove object

// const obj = {
//    users:{
//       name: 'suraj',
//       address: {
//          city: 'chaibasa',

//       }
//    }
// }

// function setObject(obj, path, value){

//   let  keys = path.split(".")
//   let current  = obj

//   for(let i=0; i<keys.length -1; i++){
//      current = current[keys[i]]
//   }
//   current[keys[keys.length -1]] = value

// }

// setObject(obj, 'users.address.pincode', 833201)
// console.log(obj)

// const arr = [1, 2, 3, 4,67,86,456,778,43];

// function findSecondLarget(arr) {
//   let max = -1;
//   let secondMax = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       secondMax = max;
//       max = arr[i];
//     } else if (arr[i] > secondMax) {
//       secondMax = arr[i];
//     }
//   }
//   return secondMax;
// }

// console.log(findSecondLarget(arr));

const arr = [1, 2, 3, 4,67,86,456,778,43];

function findLarget(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
     if(arr[i] >= max){
       max =+ arr[i]
     }
  }
  return max;
}

console.log(findLarget(arr));
