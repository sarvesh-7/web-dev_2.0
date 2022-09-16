
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Tree{
    display(node){
        // Performs pre-order traversal of a tree
        if(node !== null)
        {  //display node data
            console.log(node.data); 
            //traverse left subtree  
            this.display(node.left);
            //traverse right subtree
            this.display(node.right);
        }
    }
}

let root = new Node(5);
let t1 = new Tree();
root.left = new Node(7);
root.right = new Node(2);
root.left.left = new Node(11);
root.left.right = new Node(5);
root.right.left = new Node(19);
root.right.left.left = new Node(21);
root.right.right = new Node(12);
root.right.right.right = new Node(8);
root.right.right.right.left = new Node(31);
root.right.right.right.left.right = new Node(39);


t1.display(root);