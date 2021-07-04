/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  // sort the array
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    let prev = intervals[i - 1];
    if (curr[0] <= prev[1]) {
      // replace the current element by the new calculated one
      intervals[i] = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])];
      intervals.splice(i - 1, 1);
      // the array becomes shorter
      i -= 1;
    }
  }
  return intervals;
};
