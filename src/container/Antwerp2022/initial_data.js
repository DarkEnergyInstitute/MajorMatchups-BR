// prettier-ignore

/*
  EUA EUB AM AP
  1   1   1
  2   2
  3   3
  4

          2
          3
      4
  5   5
  6   6
      7

              1
              2
           4
           5
           6
  7
  8   8

*/

export const initialDataLegends = [
  {
    code: "hero",
    name: "Heroic",
    seed: 1,
    description: "EUA #1",
    region: "EU",
  },
  {
    code: "cope",
    name: "Copenhagen Flames",
    seed: 2,
    description: "EUB #1",
    region: "EU",
  },
  {
    code: "big",
    name: "BIG",
    seed: 3,
    description: "EUA #2",
    region: "EU",
  },
  {
    code: "c9",
    name: "Cloud9",
    seed: 4,
    description: "EUB #2",
    region: "EU",
  },
  {
    code: "furi",
    name: "FURIA Esports",
    seed: 5,
    description: "AM #1",
    region: "AM",
  },
  {
    code: "faze",
    name: "FaZe Clan",
    seed: 6,
    description: "EUA #3",
    region: "EU",
  },
  {
    code: "nip",
    name: "Ninjas in Pyjamas",
    seed: 7,
    description: "EUB #3",
    region: "EU",
  },
  {
    code: "navi",
    name: "Natus Vincere",
    seed: 8,
    description: "EUA #4",
    region: "EU",
  },
];

export const initialDataChallenger = [
  {
    code: "ence",
    name: "ENCE",
    seed: 9,
    description: "EUB #4",
    region: "EU",
  },
  {
    code: "g2",
    name: "G2 Esports",
    seed: 10,
    description: "EUB #5",
    region: "EU",
  },
  {
    code: "forz",
    name: "forZe",
    seed: 11,
    description: "EUA #5",
    region: "EU",
  },
  {
    code: "astr",
    name: "Astralis",
    seed: 12,
    description: "EUB #6",
    region: "EU",
  },
  {
    code: "vita",
    name: "Team Vitality",
    seed: 13,
    description: "EUA #6",
    region: "EU",
  },
  {
    code: "mibr",
    name: "MIBR",
    seed: 14,
    description: "AM #2",
    region: "AM",
  },
  {
    code: "imp",
    name: "Imperial Esports",
    seed: 15,
    description: "AM #3",
    region: "AM",
  },
  {
    code: "bne",
    name: "Bad News Eagles",
    seed: 16,
    description: "EUB #7",
    region: "EU",
  },
  {
    code: "eter",
    name: "Eternal Fire",
    seed: 17,
    description: "EUA #7",
    region: "EU",
  },
  {
    code: "spir",
    name: "Team Spirit",
    seed: 18,
    description: "EUB #8",
    region: "EU",
  },
  {
    code: "out",
    name: "Outsiders",
    seed: 19,
    description: "EUA #8",
    region: "EU",
  },
  {
    code: "cplx",
    name: "Complexity Gaming",
    seed: 20,
    description: "AM #4",
    region: "AM",
  },
  {
    code: "ihc",
    name: "IHC Esports",
    seed: 21,
    description: "AP #1",
    region: "AP",
  },
  {
    code: "ren",
    name: "Renegades",
    seed: 22,
    description: "AP #2",
    region: "AP",
  },
  {
    code: "liq",
    name: "Team Liquid",
    seed: 23,
    description: "AM #5",
    region: "AM",
  },
  {
    code: "nine",
    name: "9z Team",
    seed: 24,
    description: "AM #6",
    region: "AM",
  },
];

export const finalDataLegends = [
  ...initialDataLegends,
  {
    code: "g2",
    name: "G2 Esports",
    seed: 9,
    description: "3-0, +5",
    region: "EU",
  },
  {
    code: "vita",
    name: "Team Vitality",
    seed: 10,
    description: "3-0, -4",
    region: "EU",
  },
  {
    code: "ence",
    name: "ENCE",
    seed: 11,
    description: "3-1, +3",
    region: "EU",
  },
  {
    code: "spir",
    name: "Team Spirit",
    seed: 12,
    description: "3-1, +1",
    region: "EU",
  },
  {
    code: "out",
    name: "Outsiders",
    seed: 13,
    description: "3-1, -2",
    region: "EU",
  },
  {
    code: "imp",
    name: "Imperial Esports",
    seed: 14,
    description: "3-2, +1",
    region: "AM",
  },
  {
    code: "bne",
    name: "Bad News Eagles",
    seed: 15,
    description: "3-2, -1",
    region: "EU",
  },
  {
    code: "liq",
    name: "Team Liquid",
    seed: 16,
    description: "3-2, -2",
    region: "AM",
  },
];
/*
export const finalDataChampions = [
  {
    code: "navi",
    name: "Natus Vincere",
    "seed": 1,
    "description": "0L, 4B, #3"
  },
  {
    code: "g2",
    name: "G2",
    "seed": 2,
    "description": "0L, -3B, #7"
  },
  {
    code: "hero",
    name: "Heroic",
    "seed": 3,
    "description": "1L, 1B, #14"
  },
  {
    code: "gamb",
    name: "Gambit",
    "seed": 4,
    "description": "1L, -2B, #6"
  },
  {
    code: "furi",
    name: "FURIA",
    "seed": 5,
    "description": "1L, -7B, #2"
  },
  {
    code: "vp",
    name: "Virtus.pro",
    "seed": 6,
    "description": "2L, 3B, #13"
  },
  {
    code: "nip",
    name: "Ninjas in Pyjamas",
    "seed": 7,
    "description": "2L, 0B, #1"
  },
  {
    code: "vita",
    name: "Vitality",
    "seed": 8,
    "description": "2L, -3B, #4"
  }
]
*/
