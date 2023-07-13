class PriorityCache {
  private cache: { [key: string]: string } = {};
  private queue: { key: string; priority: number }[] = [];

  constructor(private capacity: number) { }

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
    }
    this.cache[key] = value;
  }

  addMany(items: { key: string; value: string }[]) {
    for (const item of items) {
      this.add(item.key, item.value);
    }
  }

  private evictLowestPriority() {
    if (this.queue.length > 0) {
      this.queue.sort((a, b) => a.priority - b.priority);
      const lowestPriorityKey = this.queue[0].key;
      delete this.cache[lowestPriorityKey];
      this.queue.shift();
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