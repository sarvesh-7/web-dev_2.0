class Queue {
    constructor(capacity){
        this.queueArr = new Array();
        this.capacity = capacity;
        this.front=this.size=0;
        this.rear=-1;
    }
    enqueue(val){
        if(!this.isFull()){
            this.rear = (this.rear+1)%this.capacity;
            this.queueArr[this.rear]=val;
            this.size++;
        }
        else{
            console.log("Queue is full");
        }
    }
    dequeue(){
        if(!this.isEmpty()){
            let delVal = this.queueArr[this.front];
            this.front=(this.front+1)%this.capacity;
            this.size--;
            console.log("Deleted element from queue", delVal);
        }
        else{
            console.log("Queue is empty");
        }
    }
    isEmpty(){
        return this.size === 0;
    }
    isFull(){
        return this.size===this.capacity;
    }
    getFront(){
        if(!this.isEmpty())
        return this.queueArr[this.front];
        else
        console.log("Queue is empty");
    }
    getRear(){
        if(!this.isEmpty())
        return this.queueArr[this.rear];
        else
        console.log("Queue is empty");
        
    }
}
const queueObj = new Queue(5);
console.log(queueObj.isEmpty());
queueObj.enqueue(5);
queueObj.enqueue(10);
queueObj.enqueue(16);
queueObj.enqueue(20);
console.log(queueObj.isFull());
queueObj.enqueue(11);
console.log("Rear element",queueObj.getRear());
queueObj.dequeue();
queueObj.enqueue(31);
queueObj.enqueue(14);
console.log("Front element",queueObj.getFront());
console.log("Rear element",queueObj.getRear());
 queueObj.dequeue();
 queueObj.dequeue();
 queueObj.dequeue();
 queueObj.dequeue();
 queueObj.dequeue();
 queueObj.dequeue();




