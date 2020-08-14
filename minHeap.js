export class MinHeap {
  constructor(val = (A) => A) {
    // val=(A) => A.value:  a function that transfrom a node in the heap to an interger.
    this.heap = [];
    this.val = val;
  }

  insert(val) {
    this.heap.push(val);
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.val(this.heap[index]) < this.val(this.heap[parentIndex])) {
        let temp = this.heap[index];
        this.heap[index] = this.heap[parentIndex];
        this.heap[parentIndex] = temp;
        // Bubble up.
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  peak() {
    return this.heap[0];
  }

  extractMin() {
    let min = this.heap[0];

    if (this.heap.length === 0 || this.heap.length === 1) {
      return this.heap.pop();
    }

    this.heap[0] = this.heap.pop();
    let index = 0;

    while (index < this.heap.length) {
      const parent = this.val(this.heap[index]);
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let left = undefined;
      let right = undefined;

      if (this.heap[leftChildIndex]) {
        left = this.val(this.heap[leftChildIndex]);
      }

      if (this.heap[rightChildIndex]) {
        right = this.val(this.heap[rightChildIndex]);
      }
      // parent is not the smallest value.
      if (parent > left || parent > right) {
        let temp = this.heap[index];
        // Go left.
        if ((parent > left && left < right) || right === undefined) {
          this.heap[index] = this.heap[leftChildIndex];
          this.heap[leftChildIndex] = temp;
          index = leftChildIndex;
        } else {
          this.heap[index] = this.heap[rightChildIndex];
          this.heap[rightChildIndex] = temp;
          index = rightChildIndex;
        }
      } else {
        break;
      }
    }
    return min;
  }

  size() {
    return this.heap.length;
  }
}
