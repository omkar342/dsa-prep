class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); // add to rear
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift(); // remove from front
  }

  front() {
    return this.isEmpty() ? "Queue is empty" : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const findFirstUniqueIndex = (inputString) => {
  const freqMap = {};
  const queue = new Queue(); // stores { char, index }

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (!freqMap[char]) {
      freqMap[char] = 1;
      queue.enqueue({ char, index: i });
    } else {
      freqMap[char]++;
    }

    while (!queue.isEmpty() && freqMap[queue.front().char] > 1) {
      queue.dequeue();
    }
  }

  return queue.isEmpty() ? -1 : queue.front().index;
};
const inputString = "level";

const findFirstUniqueElementFuncResult = findFirstUniqueIndex(inputString);

console.log("Final Result is:", findFirstUniqueElementFuncResult);
