/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let output = '';
  let result = reportWithIterator.next();

  while (!result.done) {
    output += `${result.value} | `;
    result = reportWithIterator.next();
  }

  if (output.endsWith(' | ')) {
    output = output.slice(0, -3);
  }

  return output;
}
