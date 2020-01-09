import { TetroPieces, Z, S, J, T, I, L, O } from './types';
export const pieces: TetroPieces = {
  Z: {
    N: [
      [Z, Z, 0],
      [0, Z, Z]
    ],
    E: [
      [0, Z],
      [Z, Z],
      [Z, 0]
    ],
    S: [
      [Z, Z, 0],
      [0, Z, Z]
    ],
    W: [
      [0, Z],
      [Z, Z],
      [Z, 0]
    ]
  },
  S: {
    N: [
      [0, S, S],
      [S, S, 0]
    ],
    E: [
      [S, 0],
      [S, S],
      [0, S]
    ],
    S: [
      [0, S, S],
      [S, S, 0]
    ],
    W: [
      [S, 0, 0],
      [S, S, 0],
      [0, S, 0]
    ]
  },
  J: {
    N: [
      [0, J],
      [0, J],
      [J, J]
    ],
    E: [
      [J, 0, 0],
      [J, J, J]
    ],
    S: [
      [J, J],
      [J, 0],
      [J, 0]
    ],
    W: [
      [J, J, J],
      [0, 0, J]
    ]
  },
  T: {
    N: [
      [T, T, T],
      [0, T, 0]
    ],
    E: [
      [0, T],
      [T, T],
      [0, T]
    ],
    S: [
      [0, T, 0],
      [T, T, T]
    ],
    W: [
      [T, 0],
      [T, T],
      [T, 0]
    ]
  },
  I: {
    N: [[I], [I], [I], [I]],
    E: [[I, I, I, I]],
    S: [[I], [I], [I], [I]],
    W: [[I, I, I, I]]
  },
  L: {
    N: [[L], [L], [L, L]],
    E: [[L, L, L], [L]],
    S: [
      [L, L],
      [0, L],
      [0, L]
    ],
    W: [
      [0, 0, L],
      [L, L, L]
    ]
  },
  O: {
    N: [
      [O, O],
      [O, O]
    ],
    E: [
      [O, O],
      [O, O]
    ],
    S: [
      [O, O],
      [O, O]
    ],
    W: [
      [O, O],
      [O, O]
    ]
  }
};