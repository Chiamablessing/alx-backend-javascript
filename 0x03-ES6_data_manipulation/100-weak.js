// 100-weak.js

// Export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Initialize the count for the endpoint if it's not already present
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the query count for the endpoint
  const currentCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, currentCount);

  // Check if the query count has reached or exceeded 5
  if (currentCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
