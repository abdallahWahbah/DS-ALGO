class Stack
{
    constructor()
    {
        this.items = [];
    }
    ////////////// push //////////////
    push(val)
    {
        this.items.push(val)
    }
    ////////////// pop //////////////
    pop()
    {
        return this.items.pop();
    }
    ////////////// peek //////////////
    peek()
    {
        return this.items[this.items.length - 1]
    }
    ////////////// isEmpty //////////////
    isEmpty()
    {
        return this.items.length === 0 ? true : false;
    }
    ////////////// size //////////////
    size()
    {
        return this.items.length;
    }
    ////////////// clear //////////////
    clear()
    {
        this.items = [];
    }
}

class Queue
{
    constructor()
    {
        this.items = [];
    }

    ////////////// enqueue //////////////
    enqueue(val)
    {
        this.items.push(val);
    }
    ////////////// dequeue //////////////
    dequeue()
    {
        if(this.items.length > 0) {
            return this.items.shift();
        } 
    }
    ////////////// isEmpty //////////////
    isEmpty()
    {
        return this.items.length === 0 ? true : false;
    }
    ////////////// size //////////////
    size()
    {
        return this.items.length;
    }
    ////////////// clear //////////////
    clear()
    {
        this.items = [];
    }
    ////////////// front //////////////
    front()
    {
        return this.items[0];
    }
}