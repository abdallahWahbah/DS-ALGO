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
    push(val)
    {
        let newNode = new Node(val);
        if(!this.head) // if (this.length === 0)
        {    
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode; // in this case, the "this.tail" = the last node .. which has a next property
            this.tail = newNode;
        }
        this.length++;
        // console.log(this)
        return this;
    }
    // traverse()
    // {
    //     let current = this.head;
    //     while(current)
    //     {
    //         console.log(current);
    //         current = current.next;
    //     }
    // }
    pop() // remove the last node
    {
        if(!this.head) return; // if(length ===0)
        let current = this.head;
        let secondToLastNode = current; // new tail

        while(current.next)
        {
            secondToLastNode = current;
            current = current.next;
        }
        // console.log(current, secondToLastNode);
        this.tail = secondToLastNode;
        this.tail.next = null;
        this.length--;

        if(this.length === 0)
        {
            this.head = null;
            this.tail = null;
        }
        console.log(current);
        return current;
    }
    shift() // remove the first node
    {
        if(!this.head) return;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if(this.length === 0)
        {
            // this.head = null; // no need for this line cause you declared it before decreasing the length
            this.tail = null;
        }

        return currentHead;
    }
    unshift(val) // add to the beginning of the list
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
            this.head = newNode;
        }
        this.length++;
        return list
    }
    get(index)
    {
        if(index < 0 || index >= this.length) return null;

        let current = this.head;
        while(index > 0)
        {
            current = current.next;
            index--;
        }
        return current;
    } // Time comp: O(n)
    set(index, val)
    {
        let node = this.get(index);

        if(node)
        {
            node.val = val;
            return true;
        }

        return false;
    }
    insert(index, val)
    {
        if(index < 0 || index > this.length) return false;

        if(index === this.length) 
        {
            this.push(val);
            return true;
        }
        if(index === 0) return !!this.unshift(val); // the same as above but in a different way

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.next = nextNode;

        this.length++;
        return true;
    } // Time comp: O(1)
    remove(index)
    {
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let prevNode = this.get(index - 1);
        let removed = this.get(index);
        let nextNode = this.get(index + 1);
        prevNode.next = nextNode;

        this.length--;
        return removed;
    } // Time comp: O(1) if you remove the first or one element at the beginning
    // Time comp: OR O(n) if you remove the last one .. you call get... loop over the list until you find it
    reverse()
    {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let next, prev = null;

        for(let i= 0; i<this.length; i++)
        {
            next = current.next; 
            current.next = prev;
            prev = current; 
            current = next;
        }
        return this;
    }
    print()
    {
        let current = this.head;
        let arr=[];
        while(current)
        {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}
const list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);