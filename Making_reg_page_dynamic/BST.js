
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            let p = this.root;
            let prev;
            while(p!==null){
                if(newNode.data>=p.data)
                {
                    prev = p;
                    p = p.right;
                }
                else if(newNode.data<p.data)
                {
                    prev = p;
                    p = p.left; 
                }
            }
            if(newNode.data>=prev.data){
                prev.right = newNode;
                newNode.left = newNode.right = null;
            }
            else if(newNode.data<prev.data)
            {
                prev.left = newNode;
                newNode.left = newNode.right = null;
            }     
        }
    }

    search(val){
        if(this.root==null){
            return -1; //search unsuccessful - list is empty
        }
        else{
            let p = this.root;
            let prev;
            while(p!==null){
                if(val==p.data){
                    return p;
                }
                if(val>p.data)
                {
                    p = p.right;
                }
                else
                {
                    p = p.left; 
                }
            }
            return -1; //search unsuccessful 
        }
    }
    display(node){
        // Performs inorder traversal of a tree
        if(node !== null)
        {    
            this.display(node.left);
            console.log(node.data);
            this.display(node.right);
        }
    }
}

let obj = new BST();
obj.insert(15);
obj.insert(8);
obj.insert(11);
obj.insert(13);
obj.insert(19);
obj.display(obj.root);
console.log(obj.search(29));
console.log(obj.search(8));