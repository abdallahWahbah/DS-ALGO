// Doubly liked list: much better in certain ways and easier to navigate .. but it comes at a cost of more memory
class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
        this.prev = null;
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
    push(val)
    {
        let newNode = new Node(val);

        if(!this.head) // if (this.length === 0)
        {
            this.head = newNode;
            this.tail =newNode;
        }
        else
        {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return newNode;
    }
    pop()
    {
        if(this.length === 0) return undefined;
        
        let poppedNode = this.tail;
        
        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {    
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        // console.log(poppedNode);
        return poppedNode;
    }
    shift()
    {
        if(!this.head) return null;

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
            let prevHead = this.head;
            prevHead.prev = newNode;
            this.head = newNode;
            newNode.next = prevHead;
        }

        this.length++;
        return this;
    }
    get(index) 
    {
        if(index < 0 || index >= this.length) return null;

        let node = null;

        if(index <= this.length / 2) // start searching from the left (head)
        {
            // console.log('working from left')
            node = this.head;

            while(index > 0)
            {
                node = node.next;
                index--;
            }
        }
        else // start searching from the right(tail)
        {
            // console.log('working from right')
            node = this.tail;
            let count = this.length - 1;

            while(count !== index)
            {
                node = node.prev;
                count--;
            }
        }
        return node;
    } // Timp comp: O(n) Technically, it is O(n/2) but it still O(n)
    set(index, val)
    {
        let node = get(index);

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

        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        nextNode.prev = newNode;

        newNode.prev = prevNode;
        newNode.next = nextNode;

        this.length++;
        return true;
    } // Timp comp: O(1)
    remove(index)
    {
        if(index < 0 || index >= this.length) return false;

        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let removedNode = this.get(index);
        if(removedNode)
        {
            let prevNode = removedNode.prev;
            let nextNode = removedNode.next;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;

            removedNode.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    } // Timp comp: O(1)
}

var list = new DoublyLinkedList()
list.push("Abdallah")
list.push("Mahmoud")
list.push("Abdelbary")
list.push("Abdallah2")
list.push("Ahmed")
list.push("Wahbah")
