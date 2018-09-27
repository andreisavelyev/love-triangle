/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  const length = preferences.length;

  for (let i = 0; i < length; i++) {
    const a = preferences[i];
    const b = preferences[a - 1];
    const c = preferences[b - 1];

    if (i + 1 === c && b != i + 1) {
      count++;
    }
  }
  return count / 3;
};
