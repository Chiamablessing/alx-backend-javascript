// A function that returns the sum of all the student ids

export default function getStudentIdsSum(obj) {
    const total = obj.reduce((acc, cur) => acc + cur.id, 0);
    return total;
  }
