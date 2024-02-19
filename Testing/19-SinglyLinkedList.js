class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    ///////////////////////// push /////////////////////////
    push(val)
    {
        let newNode = new Node(val);
        if(this.length === 0)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    ///////////////////////// traverse /////////////////////////
    traverse()
    {
        let current = this.head;
        while(current)
        {
            console.log(current.val);
            current = current.next;
        }
    }
    ///////////////////////// pop /////////////////////////
    pop()
    {
        if(this.length === 0) return false;
        let current = this.head;
        let newTail = current;

        while(current.next)
        {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null;
        this.length--;

        if(this.length === 0)
        {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    ///////////////////////// shift /////////////////////////
    shift()
    {
        if(!this.head) return;

        let current = this.head;
        this.head = current.next;
        this.length--;

        if(this.length === 0)
        {
            this.tail = null;
        }

        return current;

    }
    ///////////////////////// unshift /////////////////////////
    unshift(val)
    {
        let newNode = new Node(val);
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this;
    }
    ///////////////////////// get /////////////////////////
    get(index)
    {
        if(index < 0 || index >= this.length) return -1;
        let current = this.head;

        while(index > 0)
        {
            current = current.next;
            index--;
        }
        return current;
    }
    ///////////////////////// set /////////////////////////
    set(index, val)
    {
        let node = this.get(index);

        if(node !== -1)
        {
            node.val = val;
            return true;
        }
        return false;
    }
    ///////////////////////// insert /////////////////////////
    insert(index, val)
    {
        if(index < 0 || index > this.length) return -1;
        if(index === 0) return !!this.unshift(val);
        else if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this;
    }
    ///////////////////////// remove /////////////////////////
    remove(index)
    {
        if(index < 0 || index >= this.length) return;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();

        let prevNode = this.get(index - 1);
        let removedNode = this.get(index);
        let nextNode = this.get(index + 1);

        prevNode.next = nextNode;
        this.length--;
        return removedNode;
    }
    ///////////////////////// reverse /////////////////////////
    reverse()
    {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let next = null, prev = null;
        for(let i = 0; i < this.length; i++)
        {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
    
}

let list = new SinglyLinkedList();
list.push(11)
list.push(12)
list.push(13)
// list.traverse()
//list.pop()
//list.shift()
list.unshift(9)
list.get(2)
//list.set(1, 100)
list.insert(1, 10)
//list.remove(4)
//list.reverse()
