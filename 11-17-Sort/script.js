////////////////////////////////////////////// Section 11 (Bubble sort) //////////////////////////////////////////////
// Lecture 4, 5, 7
// Watch video 6 to optimize the algo to stop sorting if the array is already sorted
// const bubbleSort = (arr) =>
// {
//     const swap = (arr, indx1, indx2) => [arr[indx2], arr[indx1]] = [arr[indx1], arr[indx2]]

//     for(let i = arr.length; i > 0; i--)
//     {
//         for(let j = 0; j < i - 1; j++)
//         {
//             if(arr[j] > arr[j+1]) swap(arr, j, j+1);
//         }
//     }
//     return arr;
// } // Time comp: O(n^2)
// console.log(bubbleSort([6,4,2,5,7]))
// // console.log(bubbleSort([234, 43, 55, 63,  5, 6, 235, 547]));




////////////////////////////////////////////// Section 12 (Selection sort) //////////////////////////////////////////////
// const selectionSort = (arr) =>
// {
//     const swap = (arr, indx1, indx2) => [arr[indx2], arr[indx1]] = [arr[indx1], arr[indx2]];

//     for(let i = 0; i < arr.length; i++)
//     {
//         let min = i;
//         for(let j = i + 1; j < arr.length; j++)
//         {
//             if(arr[j] < arr[min]) min = j;
//         }
//         if(i !== min) swap(arr, i, min); // if the min number is still the first one in the new loop .. if you don't remember or understand .. ignore the "if"
//     }
//     return arr;
// } // Time comp: O(n^2)
// console.log(selectionSort([6,4,2,5,7]))
// // console.log(selectionSort([34, 22, 10, 19, 17]))




////////////////////////////////////////////// Section 13 (Insertion sort) //////////////////////////////////////////////
// const insertionSort = (arr) =>
// {
//     let currentItem;
//     for(let i = 1; i< arr.length; i ++)
//     {
//         currentItem = arr[i];
//         let j;
//         for(j = i - 1; j >=0 && arr[j] > currentItem; j--)
//         {
//             arr[j+1] = arr[j];
//         }
//         arr[j + 1] = currentItem;
//     }
//     return arr;
// }// Time comp: O(N^2)
// console.log(insertionSort([2, 1, 9, 75, 4]))
// // console.log(insertionSort([2, 10, 1, 9, 75, 20]))




////////////////////////////////////////////// Section 15 (Merge sort) //////////////////////////////////////////////
// Lecture 4, 5
// Merging(and sorting) 2 sorted arrays
// Watch video 8 to understand where the time comp came from
// const merge = (arr1, arr2) =>
// {
//     let i=0, j=0;
//     let result=[];

//     while(i < arr1.length && j < arr2.length)
//     {
//         if(arr1[i] < arr2[j])
//         {
//             result.push(arr1[i]);
//             i++;
//         }
//         else
//         {
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     while(i < arr1.length)
//     {
//         result.push(arr1[i]);
//         i++;
//     }
//     while(j < arr2.length)
//     {
//         result.push(arr2[j]);
//         j++;
//     }
//     return result;
// } // Time comp: O(nlog(n)) ... log(n) comes from splitting, n comes from comparing items in each array(merge func)
// // Space comp: O(n)
// const mergeSort = (arr) =>
// {
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }
// console.log(mergeSort([10, 24, 76, 73, 1, 29, 12]))




////////////////////////////////////////////// Section 16 (Quick sort) //////////////////////////////////////////////
// Lecture 
// const pivot = (arr, start = 0, end = arr.length-1) =>
// {
//     const swap = (arr, indx1, indx2) => [arr[indx2],arr[indx1]] = [arr[indx1],arr[indx2]];

//     let pivotPoint = arr[start], swapIdx = 0;
//     for(let i = start + 1; i <= end; i++)
//     {
//         if(arr[i] < pivotPoint)
//         {
//             swapIdx++;
//             swap(arr, i, swapIdx);
//         }
//     }
//     swap(arr, swapIdx, start);
//     console.log(arr)
//     return swapIdx;
// }
// // just read this algo or see the video again


// console.log(pivot([4,8,2,1,5,7,6,3]))
// // [1, 2, 3,     4     , 5, 6, 7, 8]




////////////////////////////////////////////// Section 17 (Radix sort) //////////////////////////////////////////////
const getDigit = (num, place) =>
{
    return Math.floor((Math.abs(num) / 10 ** place) % 10);
}
// getDigit(12345, 0); // 5    12345  % 10 = 5
// getDigit(12345, 1); // 4    1234.5 % 10 = 4 
// getDigit(12345, 2); // 3    123.45 % 10 = 3
// getDigit(12345, 3); // 2    12.345 % 10 = 2
// getDigit(12345, 4); // 1    1.2345 % 10 = 1
const digitCount = (number) =>
{
    if(number === 0)return 1;
    // return String(number).split("").length;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}
const mostDigits = (arr) =>
{
    let maxDigits = 0;
    for(let i = 0; i< arr.length; i++)
    {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}
// console.log(mostDigits([5, 55, 555, 5555, 55555]))
const radixSort = (arr) =>
{
    const maxDigitCount = mostDigits(arr);
    for(let i = 0; i < maxDigitCount; i++)
    {
        let digitBucket = Array.from({length: 10}, () => []);
        for(let j = 0; j < arr.length; j++)
        {
            let digit = getDigit(arr[j], i);
            digitBucket[digit].push(arr[j]);
        }
        arr = [].concat(...digitBucket);
    }
    return arr;
} // Time comp: O(nk) : k is the number of digits

console.log(radixSort([23,345,5467,12,2345,9852]))

