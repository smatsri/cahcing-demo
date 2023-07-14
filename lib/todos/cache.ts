import PriorityCache from "../caching/PriorityCache";

console.info('process.pid: ' + process.pid);
let _cache: PriorityCache;
let g = global as any
if (g.cache) {
  console.info('cache from global');
  _cache = g.cache;
} else {
  console.info('new cache ');
  g.cache = new PriorityCache(1000, 1000 * 60);
  _cache = g.cache
}

export const cache = _cache



