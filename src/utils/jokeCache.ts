const cache = new Set<string>();

export function addToCache(joke: string) {
  cache.add(joke);
}

export function isCached(joke: string) {
  return cache.has(joke);
}
