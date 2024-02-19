//////////////////////////////////////////////
// SORTING ALGORITHMS
//////////////////////////////////////////////

const swap = (arr, indx1, indx2) => [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];

////////////////////////////////////////////// Section 11 BUBBLE SORT //////////////////////////////////////////////
// const bubbleSort = (arr) =>
// {
//     let swapped;
//     for(let i = arr.length; i > 0; i--)
//     {
//         swapped = false;
//         for(let j = 0; j < i - 1; j++)
//         {
//             if(arr[j] > arr[j + 1])
//             {
//                 swap(arr, j, j + 1);
//                 swapped = true;
//             }
//         }
//         if (swapped === false) break;
//     }
//     return arr;
// }
// console.log(bubbleSort([8,1,2,3,4,5,6,7]))
// console.log(bubbleSort([8,2,1,3,0,5,4,6,9,7]))

////////////////////////////////////////////// Section 12 SELECTION SORT //////////////////////////////////////////////
// const selectionSort = (arr) =>
// {
//     for(let i = 0; i < arr.length; i++)
//     {
//         let min = i;
//         for(let j = i + 1; j < arr.length; j++)
//         {
//             if(arr[j] < arr[min]) min = j;
//         }
//         swap(arr, min, i)
//     }
//     return arr;
// }
// console.log(selectionSort([6,4,2,5,7]))
// console.log(selectionSort([34, 22, 10, 19, 17]))


////////////////////////////////////////////// Section 13 INSERTION SORT //////////////////////////////////////////////
// const insertionSort = (arr) =>
// {
//     for(let i = 1; i < arr.length; i++)
//     {
//         let currentVal = arr[i];
//         let j;
//         for(j = i - 1; j >= 0 && arr[j] > currentVal; j--)
//         {
//             arr[j + 1] = arr[j];
//         }
//         console.log(j)
//         arr[j + 1] = currentVal
//     }
//     return arr;
// }
// console.log(insertionSort([5,3,4,1,2]))
// console.log(insertionSort([2, 10, 1, 9, 75, 20]))


////////////////////////////////////////////// Section 15 MERGE SORT //////////////////////////////////////////////
// const merge = (arr1, arr2) =>
// {
//     let i = 0, j =0;
//     let result = [];

//     while(i < arr1.length && j < arr2.length)
//     {
//         if(arr1[i] < arr2[j])
//         {
//             result.push(arr1[i]);
//             i++;
//         }
//         else
//         {
//             result.push(arr2[j])
//             j++;
//         }
//     }

//     while(i < arr1.length)
//     {
//         result.push(arr1[i])
//         i++
//     }

//     while(j < arr2.length)
//     {
//         result.push(arr2[j])
//         j++
//     }

//     return result;
// }
// //console.log(merge([1, 10, 50], [2, 14, 99, 100]))

// const mergeSort = (arr) =>
// {
//     if(arr.length === 1) return arr;

//     let middle = Math.floor(arr.length / 2);

//     let left = mergeSort(arr.slice(0, middle));
//     let right = mergeSort(arr.slice(middle));

//     return merge(left, right)
// }
// console.log(mergeSort([10, 24, 76, 73, 1, 29, 12]))


////////////////////////////////////////////// Section 15 QUICK SORT //////////////////////////////////////////////
// const pivot = (arr, start = 0, end = arr.length - 1) =>
// {
//     let pivot = arr[start];
//     let swapIndex = start;

//     for(let i = start + 1; i <= end; i++)
//     {
//         if(pivot > arr[i])
//         {
//             swapIndex++;
//             swap(arr, i, swapIndex);
//         }
//     }
//     swap(arr, swapIndex, start);
//     return swapIndex;
// }

// const quickSort = (arr, left = 0, right = arr.length - 1) =>
// {
//     if(left < right)
//     {
//         let pivotIndex = pivot(arr, left, right);

//         // LEFT
//         quickSort(arr, left, pivotIndex - 1);
//         // RIGHT
//         quickSort(arr, pivotIndex + 1, right);
//     }
//     console.log(arr)
//     return arr;
// }
// quickSort([100,-3,2,4,6,9,1,2,5,3,23])


////////////////////////////////////////////// Section 15 RADIX SORT //////////////////////////////////////////////
// const getDigit = (num, place) =>
// {
//     return Math.floor(Math.abs(num) / 10 ** place) % 10;
// }

// const digitCount = (num) =>
// {
//     if(num === 0) return 1;
//     return String(num).split("").length;
// }

// const mostDigits = (arr) =>
// {
//     let maxDigits = 0;
//     for(let i = 0; i < arr.length; i++)
//     {
//         maxDigits = Math.max(maxDigits, digitCount(arr[i]));
//     }
//     return maxDigits
// }

// const radixSort = (arr) =>
// {
//     let loopCount = mostDigits(arr);
//     for(let i = 0; i < loopCount; i++)
//     {
//         let buckets = Array.from({length: 10}, () => []);

//         for(let j = 0; j < arr.length; j++)
//         {
//             let digit = getDigit(arr[j], i);
//             buckets[digit].push(arr[j])
//         }

//         arr = [].concat(...buckets);
//     }
//     return arr;
// }

// console.log(radixSort([23,345,5467,12,2345,9852]))