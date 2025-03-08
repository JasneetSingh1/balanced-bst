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

  prettyPrint(node, prefix = "", isLeft = true){
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  getRoot(){
    return this.root;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const bst = new BST(arr);
const root = bst.getRoot();
console.log(root)
bst.prettyPrint(root);

