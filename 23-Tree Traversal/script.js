// BFS uses queue DS
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
        let newNode = new Node(value);

        if(!this.root)
        {
            console.log('root')
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(true)
        {
            if(value === current.value) return undefined;
            if(value < current.value)
            {
                console.log('Left of the tree');
                if(current.left === null) 
                {
                    current.left = newNode;
                    return this;
                }
                else current = current.left;
            }
            else
            {
                console.log('Right of the tree');
                if(current.right === null)
                {
                    current.right = newNode;
                    return this;
                }
                else current = current.right;
            }
        }
    } // Time comp: O(log(n))
    find(value)
    {
        if(!this.root) return false;
        let current = this.root;
        if(value === current.value) return current;

        let found = false;
        while(current && !found)
        {
            if(value < current.value) current = current.left;
            else if (value > current.value) current = current.right;
            else found = true;
        }
        if(!found) return false;
        return current;
    } // Time comp: O(log(n))
    contains(value) // the same as "find" method but it returns true or false
    {
        if(!this.root) return false;
        let current = this.root;
        if(value === current.value) return current;

        // let found = false;
        while(current)
        {
            if(value < current.value) current = current.left;
            else if (value > current.value) current = current.right;
            else
            {
                return true;
            }
        }
        return false;
    }
    BFS()
    {
        let data = [];
        let queue=[];
        let node = this.root;
        if(!node) return false;

        queue.push(node);

        while(queue.length)
        {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;

    }
    // DFS .. PreOrder ... ?????????? ???? ?????? .. ???????? ???????? ???? ?????????? ???????????? ???????????? ?????????? ???? ????????
    // ?????????? ?????????? ???????????? ???????????? ???????????? ????????????
    // ???? ?????????? ???? ?????????? ?????????? ?????? ?????????? ???????????? ??????????????
    DFSPreOrder()
    {
        let data = [];
        let node = this.root;
        if(!node) return false;

        let traverse = (node) =>
        {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(node);
        return data;
    }
    // DFS ... PostOrder
    // ?????????? ???????????? ???????????? ???????????? ???????????? ??????????
    DFSPostOrder()
    {
        let data = [];
        let node = this.root;
        if(!node) return false;

        let traverse = (node) =>
        {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(node);
        return data;
    }
    // DFS ... InOrder
    // ?????????? ???????????? ???????????? ?????????? ???????????? ????????????
    DFSInOrder()
    {
        let data = [];
        let node = this.root;
        if(!node) return false;

        let traverse = (node)=>
        {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(node);
        return data;
    }

    // comparison between BFS and DFS
    // Time comp is the same, we visit each node once
    // Space comp
    // if the tree is wide, BFS takes a lot more space
    // if the tree is doop long, DFS takes a lot more space
    
    // 
    // DFS .. InOrder: returns the data in order (orderred in ascending way)
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)