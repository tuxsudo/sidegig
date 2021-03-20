let count = 0;
let lastModified = new Date();

export class CounterService {
  decrement() {
    lastModified = new Date();
    count--;
    return count;
  }

  increment() {
    lastModified = new Date();
    count++;
    return count;
  }

  reset() {
    lastModified = new Date();
    count = 0;
  }

  toJSON() {
    return { count, lastModified };
  }
}
