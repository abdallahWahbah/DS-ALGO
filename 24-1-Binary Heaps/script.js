// Binary Heap is a tree strcuture
// it similar to Binary Search Tree with different rules
// in MaxBinaryHeap: the parent nodes are always "larger" than child nodes
// in MinBinaryHeap: the parent nodes are always "smaller" than child nodes
// Each node has at most 2 children 
class MaxBinaryHeap
{

    // لو عايز تعمل MinBinaryHeap
    // حول كل الاكبر من (>) الي اصغر من (<) والعكس صحيح 
    // هعلمها ب اكس في كومنتات
    constructor()
    {
        this.values=[];
    }
    insert(val)
    {
        this.values.push(val);
        this.bubbleUp();
    } // Time comp: O(logn)
    bubbleUp()
    {
        let index = this.values.length - 1;
        let element = this.values[index];

        while(index > 0)
        {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if(element <= parent) break; // x

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    extractMax()
    {
        let max = this.values[0]; // x   min
        let end = this.values.pop();
        if(this.values.length > 0)
        {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }// Time comp: O(logn)
    sinkDown()
    {
        let index = 0;
        let length = this.values.length;
        let element = this.values[index];

        while(true)
        {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length)
            {
                leftChild = this.values[leftChildIndex];
                if(leftChild > element) // x
                {
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < length)
            {
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild  > element)||(swap !== null && rightChild > leftChild)) // x
                {
                    swap = rightChildIndex;
                }
            }
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);