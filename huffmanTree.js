import * as compressionHashTable from './compression-hash-table.js';
import * as priorityQueue from './minHeap.js';

const freqHash = compressionHashTable.frequencyHashTable(
  'the quick brown fox jumped over the fence'
);

class HuffmanNode {
  constructor(count, char = null, left = null, right = null) {
    this.char = char;
    this.count = count;
    this.left = left;
    this.right = right;
  }
}

function getAllNodes(obj) {
  let allNodes = [];
  for (let keys in obj) {
    allNodes.push(new HuffmanNode(obj[keys], keys));
  }
  return allNodes;
}

const freqNodes = getAllNodes(freqHash);

// Construct a priority queue (min heap) for all the nodes in an array.

function huffmanTree(nodes) {
  const nodeHeap = new priorityQueue.MinHeap((A) => A.count);
  for (let i = 0; i < nodes.length; i++) {
    nodeHeap.insert(nodes[i]);
  }
  while (nodeHeap.size() > 1) {
    const nodeA = nodeHeap.extractMin();
    const nodeB = nodeHeap.extractMin();
    // combine nodes
    const newNode = combineNodes(nodeA, nodeB);
    nodeHeap.insert(newNode);
  }
  return nodeHeap.heap[0];
}

function combineNodes(nodeA, nodeB) {
  const count = nodeA.count + nodeB.count;
  const combinedNode = new HuffmanNode(count);
  combinedNode.left = nodeA;
  combinedNode.right = nodeB;
  return combinedNode;
}

// console.log(huffmanTree(freqNodes));

function travsersBFS(tree) {
  let queue = [];
  let currentNode = tree;
  let depthCount = 0;
  let printString = [];
  if (currentNode !== null) {
    queue.push({ node: currentNode, depth: 0 });
  }

  while (queue.length > 0) {
    let current = queue.shift();
    currentNode = current.node;
    let currentdepth = current.depth;
    // check is current node is at the same level as the previous in printString.
    if (currentdepth === depthCount) {
      printString.push({ char: currentNode.char, count: currentNode.count });
    } else {
      // new depth
      console.log(printString);
      printString = [{ char: currentNode.char, count: currentNode.count }];
      depthCount++;
    }

    if (currentNode.left !== null) {
      queue.push({ node: currentNode.left, depth: currentdepth + 1 });
    }
    if (currentNode.right !== null) {
      queue.push({ node: currentNode.right, depth: currentdepth + 1 });
    }
  }
  // print the last depth.
  console.log(printString);
}

const freqTree = huffmanTree(freqNodes);

function huffmanCode(tree, codeObject = {}, path = []) {
  if (tree.left === null && tree.right === null) {
    codeObject[tree.char] = path;
  }

  if (tree.left !== null) {
    huffmanCode(tree.left, codeObject, path.concat(0));
  }

  if (tree.right !== null) {
    huffmanCode(tree.right, codeObject, path.concat(1));
  }

  return codeObject;
}

console.log(huffmanCode(freqTree));
