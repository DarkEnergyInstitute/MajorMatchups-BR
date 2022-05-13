import { std, mean } from 'mathjs';




export const rankingSeed = [
  ['g2', [16, 17, 15, 13, 13, 14, 14, 13, 13, 13, 15, 15, 15, 13, 14, 15, 8, 8, 9, 9, 8, 8, 8, 8]],
  ['nor', [12, 12, 12, 9, 10, 12, 12, 12, 12, 15, 14, 16, 13, 15, 9, 8, 11, 9, 11, 10, 12, 12, 12, 12]],
  ['mss', [15, 20, 999, 51, 45, 47, 23, 21, 21, 12, 12, 12, 12, 14, 15, 14, 12, 10, 10, 11, 10, 10, 9, 10]],
  ['cr4z', [20, 18, 21, 21, 17, 16, 15, 17, 17, 20, 20, 14, 16, 17, 17, 16, 16, 17, 18, 18, 16, 16, 16, 17]],
  ['nrg', [11, 11, 11, 11, 11, 10, 11, 11, 11, 8, 9, 9, 10, 10, 7, 9, 5, 6, 5, 5, 5, 5, 5, 5]],
  ['avg', [13, 13, 13, 14, 14, 15, 16, 15, 14, 14, 13, 13, 14, 16, 16, 17, 20, 20, 21, 28, 27, 31, 30, 26]],
  ['forz', [24, 21, 24, 25, 25, 26, 30, 20, 20, 23, 25, 24, 31, 30, 29, 33, 32, 29, 29, 31, 34, 22, 21, 21]],
  ['drea', [63, 65, 62, 77, 75, 108, 97, 76, 62, 63, 61, 60, 67, 73, 66, 75, 89, 97, 98, 73, 72, 41, 39, 36]],
  ['furi', [21, 19, 19, 19, 19, 19, 19, 16, 16, 17, 16, 18, 19, 11, 5, 5, 7, 7, 8, 7, 9, 9, 10, 9]],
  ['vita', [10, 10, 9, 10, 9, 11, 10, 10, 9, 11, 11, 11, 5, 4, 4, 4, 4, 3, 2, 2, 2, 2, 2, 2]],
  ['syma', [71, 72, 92, 100, 106, 98, 84, 100, 100, 83, 85, 85, 90, 93, 86, 92, 91, 98, 112, 98, 95, 40, 42, 44]],
  ['hlr', [19, 22, 33, 29, 29, 28, 76, 86, 38, 31, 33, 21, 24, 24, 24, 25, 28, 27, 27, 32, 31, 32, 32, 29]],
  ['gray', [28, 34, 32, 44, 42, 42, 41, 46, 50, 19, 19, 17, 17, 18, 18, 19, 21, 30, 30, 29, 29, 25, 25, 23]],
  ['col', [27, 26, 22, 22, 23, 23, 25, 27, 27, 28, 28, 29, 29, 43, 21, 22, 24, 26, 25, 26, 25, 26, 26, 27]],
  ['tyl', [23, 25, 25, 24, 22, 22, 27, 30, 30, 33, 31, 32, 36, 36, 35, 46, 39, 39, 37, 39, 42, 33, 34, 31]],
  ['intz', [34, 29, 30, 38, 36, 36, 36, 38, 36, 44, 45, 48, 47, 45, 41, 40, 49, 51, 45, 45, 32, 34, 33, 30]],
  ['astr', [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 3, 3, 3, 3, 3, 3], true],
  ['ence', [4, 4, 4, 3, 3, 4, 4, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 2, 4, 4, 4, 4, 4, 4], true],
  ['faze', [6, 6, 5, 5, 5, 7, 5, 4, 4, 4, 7, 8, 9, 5, 6, 6, 6, 5, 6, 6, 6, 6, 6, 7], true],
  ['liq', [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], true],
  ['mibr', [5, 5, 6, 7, 8, 9, 6, 6, 7, 7, 8, 6, 6, 8, 11, 10, 9, 12, 13, 15, 14, 14, 14, 13], true],
  ['navi', [3, 3, 3, 4, 4, 2, 3, 3, 3, 3, 4, 4, 4, 6, 10, 12, 13, 13, 7, 8, 7, 7, 7, 6], true],
  ['nip', [8, 8, 8, 6, 6, 6, 8, 8, 8, 9, 6, 7, 8, 9, 12, 11, 14, 14, 12, 12, 11, 11, 11, 11], true],
  ['ren', [7, 7, 7, 8, 7, 5, 7, 7, 6, 10, 10, 10, 11, 12, 13, 13, 15, 15, 16, 16, 17, 17, 17, 16], true],
];

export const getRelativeSeed = (seeds) => {
  let results = {};
  for (const team of seeds) {
    results[team[0]] = [];
  }
  for (let i = 0; i < seeds[0][1].length; i++) {
    let snapshot = [];
    for (const team of seeds) {
      snapshot.push(team[1][i]);
    }
    for (const team of seeds) {
      results[team[0]].push(snapshot.filter((x) => x <= team[1][i]).length);
    }
  }
  for (const team of seeds) {
    const stddev = std(results[team[0]]);
    const avg = mean(results[team[0]]);
    const filtered = results[team[0]].filter((x) => x >= Math.ceil(avg - stddev) && x <= Math.floor(avg + stddev));
    results[team[0]] = mean(filtered);
  }
  return results;
};
