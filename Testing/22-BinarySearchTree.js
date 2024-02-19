class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }

    insert(value)
    {
        let newNode = new Node(value)
        if(!this.root) 
        {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(true)
        {
            console.log(current)
            if(value === current.value) return undefined;
            if(value < current.value)
            {
                if(current.left === null)
                {
                    current.left = newNode;
                    return this;
                }
                else current = current.left
            }
            else
            {
                if(current.right === null)
                {
                    current.right = newNode;
                    return this;
                }
                else current = current.right;
            }
        }
    }
    find(value)
    {
        if(!this.root) return false;

        let current = this.root;
        if(value === current.value) return current;

        let found = false;

        while(current && !found)
        {
            if(value === current.value) found = true;
            else if(value > current.value) current = current.right;
            else current = current.left;
        }
        if(!found) return false;
        return current;
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
//        10
//   5         13
// 2   7      11    16