// Every character has a numeric value associated with it using charCodeAt()
// for example "a".charCodeAt(0) // gets the code number for the first char "a"
// "hello".charCodeAt(4) // gets the code number for the char at index 4 "o"
// and if you subtracted it with 96 it will give you the alphabetic position
// "a".charCodeAt(0) - 96 = 1
// "d".charCodeAt(0) - 96 = 4

// Separate Chaining and Linear Probing are 2 strategies used to deal with 2 keys (or more) that has the same index
// Separate Chaininginvolving the values together in another DS (such as a new array)
// Linear Probing invloves moving forward to the next empty slot
// We are using Separate Chaining
// Watch video 7 to remember the 2 techniques

class HashTable
{
    constructor(size = 23) // array of 23 items .. numbers between 0 and 22
    {
        this.keyMap = new Array(size);
    }

    _hash(key)
    {
        let total = 0;
        let WEIRD_PRIME = 31; // a mathematical trick to prevent collisions(so that there is no 2 numbers gives the same place or result)
        for(let i = 0; i < Math.min(key.length, 100); i++)
        {
            // we are limiting the num of loops ... assuming that there is a string of million characters
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value)
    {
        let index = this._hash(key);
        // let array = this.keyMap[index];
        if(!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value])
    } // Time comp: O(1)
    get(key)
    {
        let index = this._hash(key);
        if(this.keyMap[index])
        {
            for(let i = 0; i < this.keyMap[index].length; i++)
            {
                if(this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
            }
        }
        return undefined;
    } // Time comp: O(1), Deletion is also O(1)
    keys() // return all keys
    {
        let keys = [];
        for(let i = 0; i < this.keyMap.length; i++)
        {
            if(this.keyMap[i])
            {
                for(let j = 0; j < this.keyMap[i].length; j++)
                {
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    } // Time comp: O(n)
    values() // return all values with no repitition
    {
        let values = [];
        for(let i = 0; i < this.keyMap.length; i++)
        {
            if(this.keyMap[i])
            {
                for(let j = 0; j < this.keyMap[i].length; j ++)
                {
                    // values.push(this.keyMap[i][j][1]); // use this line with commented return to get the same result
                    if(!values.includes(this.keyMap[i][j][1])) values.push(this.keyMap[i][j][1])
                }
            }
        }
        // return [...new Set(values)];
        return values;
    } // Time comp: O(n)
}
let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")