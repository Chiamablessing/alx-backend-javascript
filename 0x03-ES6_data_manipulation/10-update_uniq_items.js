// a function that returns an updated map for all items with initial quantity at 1

export default function updateUniqueItems(mapItem) {
  if (!(mapItem instanceof Map)) {
    throw new Error('Cannot process');
  }

  mapItem.forEach((value, key) => {
    if (value === 1) {
      mapItem.set(key, 100);
    }
  });

  return mapItem;
}
