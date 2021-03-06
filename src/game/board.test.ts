import {
  mkEmptyBoard,
  addTetroToBoard,
  getCompleteRowIdxs,
  removeCompleteRowFromBoard,
  mkRow,
  mkEmptyRow,
  appendEmptyRowsToBoard,
  detectAndRemoveCompletedRows,
} from '.';
import {
  BOARD_EMPTY,
  BOARD_ROW_EMPTY,
  BOARD_FULL_S,
  BOARD_ROW_S,
  BOARD_HALF_S_Y,
  BOARD_RANDOM_S_1,
  BOARD_HALF_I_Y,
} from '../utils';
import { I, TetroEnum, DirectionEnum, Board, S, J, Z } from './types';
import { copyBoard, recFindAvailablePos, recFindAvailablePosX } from './board';

describe('board', () => {
  describe('mkEmptyBoard', () => {
    it('sould return empty board', () => {
      expect(mkEmptyBoard(20, 10)).toEqual(BOARD_EMPTY);
    });
  });

  describe('addTetroToBoard', () => {
    it('sould return new board with locked tetro', () => {
      const test = addTetroToBoard(TetroEnum.I, DirectionEnum.E, 1, 1, BOARD_EMPTY);
      const result: Board = [
        BOARD_ROW_EMPTY,
        BOARD_ROW_EMPTY,
        [0, I, I, I, I, 0, 0, 0, 0, 0],
        ...Array(17).fill(BOARD_ROW_EMPTY),
      ];
      expect(test).toEqual(result);
    });

    it('sould return new board with locked tetro overwritting any present tetro', () => {
      const test = addTetroToBoard(TetroEnum.I, DirectionEnum.E, 0, 0, BOARD_FULL_S);
      const result: Board = [
        BOARD_ROW_S,
        [I, I, I, I, S, S, S, S, S, S],
        ...Array(18).fill(BOARD_ROW_S),
      ];
      expect(test).toEqual(result);
    });
  });

  describe('getCompleteRowIdxs', () => {
    it('should return an empty array of full row positions if not found', () => {
      expect(getCompleteRowIdxs(BOARD_EMPTY)).toEqual([]);
    });

    it('should return an array of full row positions if found any', () => {
      expect(getCompleteRowIdxs(BOARD_HALF_S_Y)).toEqual([
        ...Array(14)
          .fill(0)
          .map((_x, idx) => idx + 6),
      ]);
    });
  });

  describe('removeCompleteRowFromBoard', () => {
    it('should remove specific rows from board', () => {
      const input = BOARD_RANDOM_S_1;
      const output = {
        board: [
          ...Array(10).fill(BOARD_ROW_EMPTY),
          [0, 0, 0, 0, 0, I, I, I, I, I],
          [0, 0, 0, 0, S, S, S, S, S, S],
          [0, 0, 0, S, S, S, S, S, S, S],
          [0, 0, S, S, S, S, S, S, S, S],
          [0, 0, J, J, J, J, J, J, J, J],
          [0, 0, Z, Z, Z, Z, Z, Z, Z, Z],
        ],
        totRemoved: 4,
      };
      const test = removeCompleteRowFromBoard(input, [15, 16, 18, 19]);
      expect(test).toEqual(output);
    });
  });

  describe('mkRow', () => {
    it('should make a row full of tetro S', () => {
      const output = [...Array(10).fill(S)];
      expect(mkRow(10, S)).toEqual(output);
    });
  });

  describe('mkEmptyRow', () => {
    it('should make an empty row', () => {
      const output = [...Array(10).fill(0)];
      expect(mkEmptyRow).toEqual(output);
    });
  });

  describe('appendEmptyRowsToBoard', () => {
    it('should append 10 empty rows to a board', () => {
      const input: Board = [...Array(10).fill(S)];
      const output: Board = [...Array(10).fill(mkEmptyRow), ...Array(10).fill(S)];
      const test = appendEmptyRowsToBoard(input, 10);
      expect(test).toEqual(output);
    });
  });

  describe('detectAndRemoveCompletedRows', () => {
    it('should detect 4 rows completed, remove them and add 4 new empty row at the begginin of the board', () => {
      const input = BOARD_RANDOM_S_1;
      const output = [
        ...Array(14).fill(BOARD_ROW_EMPTY),
        [0, 0, 0, 0, 0, I, I, I, I, I],
        [0, 0, 0, 0, S, S, S, S, S, S],
        [0, 0, 0, S, S, S, S, S, S, S],
        [0, 0, S, S, S, S, S, S, S, S],
        [0, 0, J, J, J, J, J, J, J, J],
        [0, 0, Z, Z, Z, Z, Z, Z, Z, Z],
      ];
      const test = detectAndRemoveCompletedRows(input);
      expect(test).toStrictEqual(output);
    });
  });

  describe('copyBoard', () => {
    it('should copy the board', () => {
      const test = copyBoard(BOARD_HALF_I_Y);
      expect(test).not.toBe(BOARD_HALF_I_Y);
      expect(test).toEqual(BOARD_HALF_I_Y);
    });
  });

  describe('recFindAvailablePos', () => {
    it('should return the same current position if new position has no collusion', () => {
      const result = recFindAvailablePos(TetroEnum.I, DirectionEnum.N, 0, 0, BOARD_EMPTY, 0, 0);
      expect(result).toBe(0);
    });
  });

  describe('recFindAvailablePosX', () => {
    it('should return the same current position X if new position has no collusion', () => {
      const result = recFindAvailablePosX(TetroEnum.I, DirectionEnum.N, 0, 0, BOARD_EMPTY, 0);
      expect(result).toBe(0);
    });
  });

  describe('recFindAvailablePosY', () => {
    it('should return the same current position Y if new position has no collusion', () => {
      const result = recFindAvailablePosX(TetroEnum.I, DirectionEnum.N, 0, 0, BOARD_EMPTY, 0);
      expect(result).toBe(0);
    });
  });
});
