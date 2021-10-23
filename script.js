// // Write a function to get the amount of each character in a string
// He solved it in 3 different ways in this course, so i collected them add in a function
/*const countAmountOfEachCharacter = (str)=>
{
    let res = {};
    // 3 ways
    // for(let i = 0; i < str.length; i++)
    // {
    //     let char = str[i];
    //     if(res[char] > 0) res[char] += 1;
    //     else res[char] = 1;
    // }
    // for(let char of str)
    // {
    //     res[char] = (res[char] || 0) + 1;
    // }
    // for(let char of str)
    // {
    //     res[char] = res[char] ? res[char] += 1 : 1;
    // }
    console.log(res);
}
countAmountOfEachCharacter("Hello from")
*/

// function countAmountOfEachCharacter(str) 
// {
//     const result = {};
//     for (let i = 0; i < str.length; i++) 
//     {
//       let char = str[i].toLowerCase();
//       if (result[char] > 0)
//       {
//           result[char] += 1; 
//       }   
//       else result[char] = 1;
//       // result[char] = ++result[char] || 1; // A simple solution instead of "if-else"
//     }
//     return result;
// }
// console.log(countAmountOfEachCharacter("heLlo"));
// //   console.log("object"[3], typeof "object"[3]);


// ---------------------------------------------------- Section 5 ----------------------------------------------------
//////////////////////////////////
// Lecture 3: Frequency pattern
// check if each element in the first array is squared in the second array .. index is not the same .. meaning that 
// you may find the square of the first element in the first array is squared at last in the second array
// const same = (arr1, arr2) =>
// {
//     if(arr1.length !== arr2.length) return false;

//     for(let i = 0; i <arr1.length; i++)
//     {
//         let curIndex2 = arr2.indexOf(arr1[i] ** 2);
//         if(curIndex2 === -1) return false;
//         arr2.splice(curIndex2, 1);
//     }
//     return true;
// }
// console.log(same([1, 2, 3], [4, 9, 1]));
// // Complexity of O(n^2)

// so we want to make it O(n)
// const same2 = (arr1, arr2)=>
// {
//     if(arr1.length !== arr2.length) return false;
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};

//     for(let num1 of arr1) frequencyCounter1[num1] = (frequencyCounter1[num1] || 0) + 1;
//     for(let num2 of arr2) frequencyCounter2[num2] = (frequencyCounter2[num2] || 0) + 1;
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);

//     for(let key in frequencyCounter1)
//     {
//         if(!(key**2 in frequencyCounter2)) console.log('false')
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) console.log('false') // if there are 2 threes, then there must be 2 nines
//     }
//     console.log('true');

// };
// same2([1, 2, 3, 3], [4, 9, 1, 9])




//////////////////////////////////
// Lecture 6:Frequency pattern
// Anagram
// you have 2 string of the same letters but not the same word .. ex .. []
// const anagram = (first, second) =>
// {
//     if(first.length !== second.length) console.log('false');

//     let lookup = {};
//     // for(let char of first) lookup[char] = (lookup[char] || 0) +1;
//     for(let char of first) lookup[char] ? lookup[char] +=1 : lookup[char]=1; // the same as the last line...and 
//     console.log(lookup);

//     for(let char of second)
//     {
//         let letter = second[char]; // تقريبا السطر ده غلط

//         if(!lookup[letter]) console.log('false');
//         else lookup[letter] -=1;
//     }
//     console.log('the same')
// }
// anagram('anagram', 'nagaram');




//////////////////////////////////
// Lecture 7: Multi pointer pattern
// get the first 2 pairs at which the sum of them = 0 (of sorted arr)
// let sumZero = (sortedArr) =>
// {
//     for(let i = 0; i < sortedArr.length; i++)
//     {
//         for(let j = 0; j < sortedArr.length; j++)
//         {
//             if(sortedArr[i] + sortedArr[j] === 0)  return [sortedArr[i], sortedArr[j]];
//         }
//     }
//     return false;
// } // Time comp : O(n^2), Space comp: O(1)
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-3, -2, -1, 8, 4, 4]));

// // the better code ... Time comp: O(n), Space comp: O(1)
// let sumZero2 = (sortedArr) =>
// {
//     let left = 0;
//     let right = sortedArr.length - 1;
//     while(left < right)
//     {
//         let sum = sortedArr[left] + sortedArr[right];
//         if(sum === 0) return [sortedArr[left], sortedArr[right]];
//         else if (sum > 0) right--;
//         else left++;
//     }
//     return false;
// }
// console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero2([-3, -2, -1, 0, 8, 4, 4]));




//////////////////////////////////
// Lecture 8, 10: Multi pointer pattern
// Count unique values
// const countUniqueValues = (arr)=>
// {
//     if(arr.length === 0) return 0;
//     let i = 0;
//     for(let j = 1; j < arr.length; j++)
//     {
//         if(arr[i] === arr[j]) continue;
//         else
//         {
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     // console.log(i);
//     return i + 1;
// }

// console.log(countUniqueValues([1, 1, 2, 3,3,4,5,5,6,7])); // 7
// console.log(countUniqueValues([1, 2, 3, 5,6,7])); // 6
// console.log(countUniqueValues([1,1,1,1,1,2])); // 2
// console.log(countUniqueValues([])); // 0




//////////////////////////////////
// Lecture 11
// Sliding window pattern
// if you wanted to get a sub data of array or string
// const maxSubArracySum = (arr, num) =>
// {
//     if(num > arr.kength) return null;
//     let max = - Infinity;
//     for(let i =0; i< arr.length - num + 1; i++)
//     {
//         let sum = 0;
//         for(let j = 0; j < num; j ++)
//         {
//             sum += arr[i + j];
//             if(sum > max) max = sum;
//         }
//         console.log(sum, max)
//     }
//     console.log(max);
// }
// maxSubArracySum([2,6,9,1,8,5,6,3], 3);

// const maxSubArracySum2 = (arr, num)=>
// {
//     if(num > arr.length) return;
//     let tempSum = 0, maxSum = 0;
//     for(let i = 0; i<num; i++)
//     {
//         tempSum+=arr[i];
//     }
//     for(let i = num; i< arr.length; i++)
//     {
//         tempSum = tempSum - arr[i-num] + arr[i];
//         maxSum = Math.max(tempSum, maxSum);
//     }
//     return maxSum;
// }
// console.log(maxSubArracySum2([2,6,9,1,8,5,6,3], 3))




//////////////////////////////////
// Lecture 12
// Divide and conquer محاضرة نظري





// ---------------------------------------------------- Section 7 ----------------------------------------------------
// Lecture 5
// const countDown = (number) =>
// {
//     for(let i = number; i>0; i--){console.log(i)}
// }
// countDown(7)
// // Using recursion
// const countDOwn2 = (number) =>
// {
//     if(number <= 0) return;
//     console.log(number);
//     number--;
//     countDOwn2(number);
// }
// countDOwn2(7);




/////////////////////////////////
// Lecture 7
// const sumRange = (number) =>
// {
//     if(number === 1) return 1;
//     return number + sumRange(number - 1);
// }
// console.log(sumRange(3));
// // // at first call
// // //     return 3 + sumRange(2)                                        3+3=6(final result)
// // //                 return 2 + sumRange(1)                2+1 = 3
// // //                             return 1           1




/////////////////////////////////
// Lecture 8, 9
// const factorial = (number) =>
// {
//     let total = 1;
//     for(let i = number; i > 0; i--)
//     {
//         total *=i;
//     }
//     return total;
// }
// console.log(factorial(5));

// const factorial2 = (number) =>
// {
//     if(number === 1) return 1;
//     return number * factorial(number -1);
// }
// console.log(factorial2(5));




/////////////////////////////////
// Lecture 11: helper method recursion
// const collectOddValues = (arr) =>
// {
//     let oddValues = [];
//     const helper = (helperInput)=>
//     {
//         if(helperInput.length === 0) return;

//         if(helperInput[0] % 2 ===1) oddValues.push(helperInput[0]);
        
//         helper(helperInput.slice(1));
//     }
//     helper(arr);
//     console.log(oddValues)
// }
// collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// // the same problem with pure recursion
// const collectOddValues2 = (arr) =>
// {
//     let newArr =[]; // at each call(recursion) a new empty array is created

//     if(arr.length === 0) return newArr;

//     if(arr[0] % 2 === 1) {newArr.push(arr[0])}

//     newArr = newArr.concat(collectOddValues2(arr.slice(1)));

//     return newArr;
// }
// console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9]));
