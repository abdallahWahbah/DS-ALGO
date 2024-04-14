// /**
//  * @param {number} n - a positive integer
//  * @return {number} - a positive integer
//  */
//  var reverseBits = function(number) 
//  {
//     // let result = 0;

//     // for(let i = 0; i < 32; i++)
//     // {
//     //     // let bit = (number >> i) & 1;
//     //     // result = result | ( bit << (31 - i));
//     // }
//     // return result;

//     // The above code is not working...don't know why

//     let res = number.toString(2).split("").reverse().join("");

//     for(let i = 0; i < 32; i++)
//     {
//         if(res[i] === undefined) res += "0";
//     }    
//     return parseInt(res, 2);
//  };
// console.log(reverseBits(00000010100101000001111010011100))
