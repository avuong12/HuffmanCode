import * as compressionHashTable from './compression-hash-table.js';
import * as priorityQueue from './minHeap.js';

const freqHash = compressionHashTable.frequencyHashTable(
  'the quick brown fox jumped over the fence'
);

function HuffmanNodes(char, count) {
  this.char = char;
  this.count = count;
}

function getAllNodes(obj) {
  let allNodes = [];
  for (let keys in obj) {
    allNodes.push(new HuffmanNodes(keys, obj[keys]));
  }
  return allNodes;
}

// Construct a priority queue (min heap) for all the nodes.
