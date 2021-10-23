/////////////////////////////
// Lecture 3, 5: linear search
// const getIndex = (arr, num) =>
// {
//     for(let i =0; i < arr.length; i++)
//     {
//         if(num === arr[i]) return i;
//     }
//     return -1;
// } // Time comp: O(n)
// console.log(getIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
// console.log(getIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));




/////////////////////////////
// Lecture 8, 10, 11: Binary search
// The array has to be sorted
// const binarySearch = (sortedArr, num) =>
// {
//     let left = 0, right = sortedArr.length - 1;
//     let middle = Math.floor((left + right) / 2);

//     while(left <= right)
//     {
//         if(sortedArr[middle] === num) return middle;
//         else if (num > sortedArr[middle])
//         {
//             left = middle + 1;
//         }
//         else if(num < sortedArr[middle])
//         {
//             right = middle - 1;
//         }
//         middle = Math.floor((left + right) / 2);
//     }
//     return -1;
// } // Time comp: O(log(n))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 15));
// // He solved it in another way




/////////////////////////////
// Lecture 12, 13: String search
// get number of string matches (Just read the course solution)(Look at the code I found from the internet below)
// const naiveSearch = (long, short) =>
// {
//     let count = 0;
//     for(let i = 0; i < long.length; i++)
//     {
//         for(let j = 0; j < short.length; j++)
//         {
//             if(short[j] !== long[i + j]) break;
//             if(j === short.length - 1) count++;
//         }
//     }
//     return count;
// }
// console.log(naiveSearch("lorie loled", "lol"));

// // very simple solution from the internet
// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }
//  var count=countOccurences("We went down to downthe stall, then down to the river.","down");
//  console.log(count)