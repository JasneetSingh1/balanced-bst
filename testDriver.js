import { BST } from "./bst.js";

function getRandomArray(size, max) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
  }
  
  function testDriver() {
    // Step 1: Create BST from random numbers < 100
    let randomNumbers = getRandomArray(10, 100);
    let bst = new BST(randomNumbers);
    console.log("Tree created from:", randomNumbers);
    bst.prettyPrint(bst.root);
  
    // Step 2: Confirm balance
    console.log("Is balanced?", bst.isBalanced());
  
    // Step 3: Print traversals
    console.log("Level Order:", bst.levelOrder((node) => console.log(node.data)));
    console.log("Preorder:", bst.preOrder((node) => console.log(node.data)));
    console.log("Postorder:", bst.postOrder((node) => console.log(node.data)));
    console.log("Inorder:", bst.inOrder((node) => console.log(node.data)));
  
    // Step 4: Unbalance the tree
    bst.insert(150);
    bst.insert(200);
    bst.insert(250);
    console.log("Inserted values > 100");
    bst.prettyPrint(bst.root);
  
    // Step 5: Confirm unbalance
    console.log("Is balanced?", bst.isBalanced());
  
    // Step 6: Rebalance
    bst.rebalance();
    console.log("Tree rebalanced.");
    bst.prettyPrint(bst.root);
  
    // Step 7: Confirm balance
    console.log("Is balanced?", bst.isBalanced());
  
    // Step 8: Print traversals again
    console.log("Level Order:", bst.levelOrder((node) => console.log(node.data)));
    console.log("Preorder:", bst.preOrder((node) => console.log(node.data)));
    console.log("Postorder:", bst.postOrder((node) => console.log(node.data)));
    console.log("Inorder:", bst.inOrder((node) => console.log(node.data)));
  }
  
  // Run the driver script
  testDriver();