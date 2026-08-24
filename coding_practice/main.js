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

