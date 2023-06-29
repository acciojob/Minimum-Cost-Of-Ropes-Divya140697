function findMinimumCostRopes(lengths) {
  // Convert the comma-separated lengths into an array of integers
  const ropes = lengths.split(',').map(Number);
  
  // Create a min heap using the ropes array
  const minHeap = new MinHeap(ropes);
  
  let totalCost = 0;
  
  // Connect the ropes until there is only one rope left in the heap
  while (minHeap.size() > 1) {
    const min1 = minHeap.extractMin();  // Extract the minimum length rope
    const min2 = minHeap.extractMin();  // Extract the next minimum length rope
    
    const cost = min1 + min2;  // Calculate the cost of connecting the ropes
    totalCost += cost;
    
    minHeap.insert(cost);  // Insert the connected rope back into the heap
  }
  
  return totalCost;
}

// Implementation of MinHeap class for the heap data structure
class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  
  extractMin() {
    const minValue = this.heap[0];
    const lastValue = this.heap.pop();
    
    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.sinkDown(0);
    }
    
    return minValue;
  }
  
  bubbleUp(index) {
    const value = this.heap[index];
    
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.heap[parentIndex];
      
      if (value >= parentValue) {
        break;
      }
      
      this.heap[parentIndex] = value;
      this.heap[index] = parentValue;
      
      index = parentIndex;
    }
  }
  
  sinkDown(index) {
    const length = this.heap.length;
    const value = this.heap[index];
    
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestChildIndex = index;
      
      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
        smallestChildIndex = leftChildIndex;
      }
      
      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
        smallestChildIndex = rightChildIndex;
      }
      
      if (smallestChildIndex === index) {
        break;
      }
      
      this.heap[index] = this.heap[smallestChildIndex];
      this.heap[smallestChildIndex] = value;
      
      index = smallestChildIndex;
    }
  }
  
  size() {
    return this.heap.length;
  }
}

// Example usage:
//const input = "4,2,7,6,9";
//const minimumCost = findMinimumCostRopes(input);
//document.getElementById('result').textContent = minimumCost;
