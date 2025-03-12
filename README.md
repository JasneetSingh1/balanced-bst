## Table of Contents

1. [Description](#description)
1. [Features](#features)
1. [Technologies Used](#technologies-used)
1. [Project Challenges](#project-challenges)
1. [Thoughts and Observations](#thoughts-and-observations)
1. [Future Enhancements](#future-enhancements)
1. [Installation](#installation)

## Description

This project implements a Binary Search Tree (BST) in JavaScript, complete with various tree operations. The project was created to explore data structures and algorithms, focusing on tree traversal, balancing, and dynamic insertion/deletion of nodes. It also serves as a learning exercise in implementing a self-balancing BST.


## Features

- **Binary Search Tree Implementation**: Create and manage a BST from an array of numbers.
- **Tree Traversals**:
  - Level Order
  - Preorder
  - Inorder
  - Postorder
- **Insertion & Deletion**: Add or remove nodes dynamically.
- **Tree Balancing**: Check if the tree is balanced and rebalance it if necessary.
- **Height & Depth Calculation**: Determine the height of the tree and depth of specific nodes.
- **Pretty Print**: Visual representation of the tree in the console.


## Technologies Used

- JavaScript (ES6+)
- Node.js (for local execution and testing)

## Project Challenges

- **Balancing the BST**: Implementing a rebalance function that restructures the tree while maintaining the BST properties.
- **Handling Deletion Cases**: Deleting nodes required handling three cases (leaf node, node with one child, node with two children) correctly.
- **Efficient Traversal Implementation**: Ensuring that recursive and iterative tree traversals worked as expected.

## Thoughts and Observations

- Using recursion made many of the operations (traversals, balancing) more intuitive.
- Maintaining balance in a BST is crucial for efficiency—an unbalanced tree can degrade search operations to O(n) instead of O(log n).
- Implementing pretty-print was useful for debugging and visualizing tree structure.

## Future Enhancements

- **AVL or Red-Black Tree Implementation**: Convert this into a self-balancing BST that maintains balance automatically.
- **Graphical UI**: Add a front-end visualization for the tree using D3.js.
- **Performance Optimization**: Improve the efficiency of rebalance and traversal functions.
- **Unit Testing**: Add Jest or Mocha tests to validate tree operations.

## Installation
Provide instructions on how to install and run your project locally.

Example below:

1. Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/JasneetSingh1/balanced-bst.git
   ```

2. Navigate to the project's directory:

   ```bash
   cd balanced-bst
   ```

3. Run the test script to execute the BST functions:

   ```bash
   node testDriver.js
   ```

