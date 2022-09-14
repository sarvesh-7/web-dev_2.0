
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
            this.insertData(this.root,newNode);
        }
    }
     insertData(root,node){

        if(node.data>=root.data)
                {
                    if(root.right===null){
                        root.right = node;
                    }
                    else{
                        this.insertData(root.right,node);
                    }
                }   
                else{
                    if(root.left===null){
                        root.left = node;
                    }
                    else{
                        this.insertData(root.left,node);
                    }
                }
    }

    search(root,val){
        if(root===null){
            return -1; //search unsuccessful - list is empty
        }
        else{
            if(val>root.data){
                return this.search(root.right,val);
            }
            else if(val<root.data){
                return this.search(root.left,val);
            }
            else{
                return root;
            }
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
console.log(obj.search(obj.root,29));
console.log(obj.search(obj.root,8));