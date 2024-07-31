export default function hasValuesFromArray(set, array) {
    const allElementsPresent = array.every((v) => set.has(v));
    return allElementsPresent;
  }
