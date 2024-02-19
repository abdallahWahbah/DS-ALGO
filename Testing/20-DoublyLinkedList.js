class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList
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
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    ///////////////////////// pop /////////////////////////
    pop()
    {
        if(!this.head) return;
        let poppedNode = this.tail;

        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.tail = poppedNode.prev;
            poppedNode.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return poppedNode;
    }
    ///////////////////////// shift /////////////////////////
    shift() //remove from the beginning
    {
        if(!this.head) return;
        let oldHead = this.head;

        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    ///////////////////////// unshift /////////////////////////
    unshift(val) // add to the beginning
    {
        let newNode = new Node(val)

        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return newNode;
    }
    ///////////////////////// get /////////////////////////
    get(index)
    {
        if(index < 0 || index >= this.length) return -1;

        let node;

        if(index <= this.length / 2)
        {
            node = this.head;
            while(index > 0)
            {
                node = node.next;
                index--;
            }
        }
        else
        {
            node = this.tail;
            let count = this.length - 1;
            while(index !== count)
            {
                node = node.prev;
                count--;
            }
        }
        return node;
    }
    ///////////////////////// set /////////////////////////
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
    ///////////////////////// insert /////////////////////////
    insert(index, val)
    {
        if(index < 0 || index > this.length) return;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        nextNode.prev = newNode;

        newNode.prev = prevNode;
        newNode.next = nextNode;
        this.length++;
        return newNode
    }
    ///////////////////////// remove /////////////////////////
    remove(index)
    {
        if(index < 0 || index >= this.length) return;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let removedNode = this.get(index);
        let nextNode = this.get(index + 1);

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

var listItems = new DoublyLinkedList()
listItems.push("Abdallah")
listItems.push("Mahmoud")
listItems.push("Abdelbary")
listItems.push("Abdallah2")
listItems.push("Ahmed")
listItems.push("Wahbah")

//listItems.pop()
//listItems.shift()
listItems.unshift("hello")
listItems.get(4)

listItems.insert(1, "Mr: ")

//listItems.remove(1)