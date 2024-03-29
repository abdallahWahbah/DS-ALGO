class MaxBinaryHeap 
{
    constructor()
    {
        this.values = [];
    }

    insert(value)
    {
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUp()
    {
        let index = this.values.length - 1;
        let element = this.values[index];

        while(index > 0)
        {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if(element <= parent) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
        console.log(this.values)
    }

    extractMax()
    {
        let max = this.values[0];
        let end = this.values.pop();

        if(this.values.length > 0)
        {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown()
    {
        let index = 0;
        let length = this.values.length;
        let element = this.values[index];

        while(true)
        {
            let leftChildIndex = Math.floor(2 * index + 1);
            let rightChildIndex = Math.floor(2 * index + 2);
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length)
            {
                leftChild = this.values[leftChildIndex];

                if(leftChild > element)
                {
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < length)
            {
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild))
                {
                    swap = rightChildIndex;
                }
            }

            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
        console.log(this.values)
    }
}
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

//        41
//  39          33
// 18 27       12

heap.insert(55); // we are inserting this .. [55, 39, 41, 18, 27, 12, 33]
// //       55
// //   39      41
// // 18  27  12  33

heap.extractMax() //[41, 39, 33, 18, 27, 12]
// //      41
// //   39     33
// // 18  27  12
 
heap.extractMax() // [39, 27, 33, 18, 12]

// //       39
// //   27      33
// // 18  12