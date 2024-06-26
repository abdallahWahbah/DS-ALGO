// << recursive function >> Return the sum of all even numbers in an object which may contain nested objects.

let obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
}
  
let obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

const nestedEvenSum = (obj, sum = 0) =>
{
    for(let [key, value] of Object.entries(obj))
    {
        // console.log(obj[key])
        if(typeof obj[key] === "object")
        {
            sum += nestedEvenSum(obj[key])
        }
        else if (typeof obj[key] === "number" && obj[key] % 2 === 0)
        {
            sum += obj[key]
        }
    }
    return sum
}


console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10