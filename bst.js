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

    if (value < current.data) {
      current.left = node;
      current = current.left;
    } else {
      current.right = node;
      current = current.right;
    }

    console.log(current);
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
  deleteItemRec(roots, value) {
    let root = roots;

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
        let temp = new Node(this.findMin(root.right));
        root.data = temp.date;
        root.right = this.deleteItemRec(root.right, temp.data);
      }
    }
    return root;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const bst = new BST(arr);
const root = bst.getRoot();
bst.insert(13);
bst.insert(18);
bst.insert(11);


bst.prettyPrint(root);
