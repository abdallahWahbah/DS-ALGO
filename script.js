const findLongestSubstring = (str) =>
{
    if(str.length === 0) return 0;

    let left = 0;
    let result = 0;
    const mySet = new Set();

    for(let right = 0; right < str.length; right++)
    {
        while(mySet.has(str[right]))
        {
            mySet.delete(str[left]);
            left++;
        }
        mySet.add(str[right]);
        result = Math.max(result, right - left + 1);
    }
    return result;
}


console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6