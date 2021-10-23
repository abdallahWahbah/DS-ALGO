// // program to implement stack data structure
// class Stack {
//     constructor() {
//         this.items = [];
//     }
    
//     push(element) {
//         return this.items.push(element);
//     } // Time comp: O(1)
    
//     pop() {
//         if(this.items.length > 0) {
//             return this.items.pop();
//         }
//     } // Time comp: O(1)
    
//     peek() {
//         return this.items[this.items.length - 1];
//     }
    
//     isEmpty(){
//        return this.items.length === 0;
//     }
   
//     size(){
//         return this.items.length;
//     }
 
//     clear(){
//         this.items = [];
//     }
// }

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(4);
// stack.push(8);
// console.log(stack.items);

// stack.pop();
// console.log(stack.items);

// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());

// stack.clear();
// console.log(stack.items);




// program to implement queue data structure

class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        return this.items.push(element);
    } // Time comp: O(1)
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        } 
    } // Time comp: O(1)
    // peek() {
    //     return this.items[this.items.length - 1];
    // }
    isEmpty(){
       return this.items.length == 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items = [];
    }
    front()
    {
        return this.items[0];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);
console.log(queue.front())

queue.dequeue();
console.log(queue.items);

// console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);