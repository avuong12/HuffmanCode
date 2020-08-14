import * as compressionHashTable from './compression-hash-table.js';

const freqHash = compressionHashTable.frequencyHashTable(
  'the quick brown fox jumped over the fence'
);

console.log(freqHash);
