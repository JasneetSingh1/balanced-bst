class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    return this.buildTreeRec(arr, 0, arr.length - 1);
  }

  buildTreeRec(arr, start, end) {
    if (start > end) return null;

    let middle = start + Math.floor((end - start) / 2);

    let root = new Node(arr[middle]);

    root.left = this.buildTreeRec(arr, start, middle - 1);
    root.right = this.buildTreeRec(arr, middle + 1, end);

    return root;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  getRoot() {
    return this.root;
  }

  insert(value) {
    let node = new Node(value);
    let current = this.root;

    while (current != null) {
      if (value < current.data) {
        if (current.left === null) {
          current.left = node;
          return; // Exit after insertion
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return; // Exit after insertion
        }
        current = current.right;
      }
    }
  }

  findMin(root) {
    while (root.left != null) {
      root = root.left;
    }
    return root;
  }

  deleteItem(value) {
    let root = this.root;
    return this.deleteItemRec(root, value);
  }
  deleteItemRec(root, value) {
    if (this.root == null) return this.root;
    else if (value < root.data)
      root.left = this.deleteItemRec(root.left, value);
    else if (value > root.data)
      root.right = this.deleteItemRec(root.right, value);
    else {
      //Case 1
      if (root.left == null && root.right == null) {
        root = null;
      }

      //Case 2
      else if (root.left == null) {
        let temp = new Node(root.data);
        root = root.right;
        temp = null;
      } else if (root.right == null) {
        let temp = new Node(root.data);
        root = root.left;
        temp = null;
      }

      //Case 3
      else {
        let temp = this.findMin(root.right);
        root.data = temp.data;
        root.right = this.deleteItemRec(root.right, temp.data);
      }
    }
    return root;
  }

  find(value){
    if(this.root == null) return null;

    let current = this.root;

    while(current != null){
      if(value < current.data){

        current = current.left;
      }
      else if(value > current.data){
        current = current.right;
      }
      else{
        return current;
      }
    }

    return null;
  }

  levelOrder(callback){
    if(this.root == null) return;

    let queue = []
    queue.push(this.root);

    while(queue.length != 0){
      let current = queue.shift();
      callback(current);
      if(current.left != null) queue.push(current.left);
      if(current.right != null) queue.push(current.right);
      
    }
  }

  inOrder(callback){
    
    return this.inOrderRec(callback, this.root)
  }

  preOrder(callback){
    return this.preOrderRec(callback, this.root)
  }

  postOrder(callback){
    return this.postOrderRec(callback, this.root)
  }

  inOrderRec(callback, root){

    if(root == null) return;
    this.inOrderRec(callback,root.left);
    callback(root);
    this.inOrderRec(callback,root.right);
  }

  preOrderRec(callback, root){
    if(root == null) return;
    callback(root)
    this.preOrderRec(callback,root.left);
    this.preOrderRec(callback,root.right);
    
  }

  postOrderRec(callback, root){
    if(root == null) return;
    this.postOrderRec(callback,root.left);
    this.postOrderRec(callback,root.right);
    callback(root)
  }

  height(node){

   
    if(node == null) return - 1;
    
    
    let leftCount = 1 +  this.height(node.left);
    let rightCount = 1 + this.height(node.right);

    return Math.max(leftCount, rightCount) ;
  }

  // depth(node){
  
  //   let current = this.root;
  //   let count = 0;
  //   while(current != null){
      
  //     if(node.data < current.data){
  //       count++;
  //       current = current.left;
  //     }
  //     else if(node.data > current.data){
  //       current = current.right;
  //       count++;
  //     }
  //     else{
        
  //       return count;
  //     }
  //   }

  // }
  depth(node){
  
   return this.depthRec(this.root, node);

  }
  depthRec(root, node){

    if(root == null) return -1;
    if(root == node) return  0;
    

    let leftCount = 1 +  this.depthRec(root.left);
    let rightCount = 1 + this.depthRec(root.right);


    return Math.max(leftCount, rightCount)
  }

  isBalanced(){
    if(this.root == null) return;

    let right = this.height(this.root.right);
    let left = this.height(this.root.left);

    if(Math.abs(left - right) > 1){
      return false;
    }
    return true;
  }

  rebalance(){
    let arr = [];

    this.inOrder((node) => arr.push(node.data))
    this.root = this.buildTree(arr)
  }
}

export {BST};