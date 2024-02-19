class HashTables
{
    constructor(size = 23)
    {
        this.keyMap = new Array(size);
    }

    _hash(key)
    {
        let total = 0;
        let WEIRD_PRIME = 31;

        for(let i = 0; i < Math.min(100, key.length); i++)
        {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value)
    {
        let index = this._hash(key);
        if(this.keyMap[index]) this.keyMap[index] = [];
        else this.keyMap[index].push([key, value]);
    }

    get(key)
    {
        let index = this._hash(key);
        if(this.keyMap[index])
        {
            for(let i = 0; i < this.keyMap[index].length; i++)
            {
                if(this.keyMap[index][i][0] === key) return this.keyMap[index][i][1]
            }
        }
        return -1;
    }

    keys()
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
    }

    values()
    {
        let values = [];
        for(let i = 0; i < this.keyMap.length; i++)
        {
            if(this.keyMap[i])
            {
                for(let j = 0; j < this.keyMap[i].length; j++)
                {
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values;
    }
}