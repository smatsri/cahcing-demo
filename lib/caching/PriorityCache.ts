class PriorityCache {
  private cache: { [key: string]: string } = {};
  private queue: { key: string; priority: number }[] = [];
  private timers: { [key: string]: NodeJS.Timeout } = {};

  constructor(private capacity: number, private lifetime: number) {
  }

  add(key: string, value: string) {
    // If the cache is already at capacity, evict the lowest priority item.
    if (Object.keys(this.cache).length >= this.capacity && !(key in this.cache)) {
      this.evictLowestPriority();
    }

    // Add or update the item in the cache.
    if (!this.cache[key]) {
      this.queue.push({ key: key, priority: 1 });
    } else {
      const index = this.queue.findIndex((item) => item.key === key);
      this.queue[index].priority++;
      clearTimeout(this.timers[key]);  // Clear previous timer
    }
    this.cache[key] = value;

    // Set a timeout to remove the item from the cache after the lifetime expires.
    this.timers[key] = setTimeout(() => {
      this.evictSpecificKey(key);
    }, this.lifetime);
  }

  addMany(items: { key: string; value: string }[]) {
    for (const item of items) {
      this.add(item.key, item.value);
    }
  }

  getItem(key: string) {
    return this.cache[key];
  }

  private evictLowestPriority() {
    if (this.queue.length > 0) {
      this.queue.sort((a, b) => a.priority - b.priority);
      const lowestPriorityKey = this.queue[0].key;
      delete this.cache[lowestPriorityKey];
      this.queue.shift();
      clearTimeout(this.timers[lowestPriorityKey]);  // Clear the timer
      delete this.timers[lowestPriorityKey];  // Remove the timer
    }
  }

  private evictSpecificKey(key: string) {
    if (this.cache[key]) {
      const index = this.queue.findIndex((item) => item.key === key);
      if (index > -1) {
        this.queue.splice(index, 1);
      }
      delete this.cache[key];
      clearTimeout(this.timers[key]);  // Clear the timer
      delete this.timers[key];  // Remove the timer
    }
  }

  keyExists(key: string): boolean {
    return key in this.cache;
  }

  findMissingKeys(keys: string[]): string[] {
    return keys.filter(key => !this.keyExists(key));
  }
}

export default PriorityCache
