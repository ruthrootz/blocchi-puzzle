import { mkInitialState, gameSlicePure } from '../../../store';
import { InternalState, TetroEnum } from '../../../game/types';
import { BOARD_HALF_S_X } from '../../../utils';

const INITIAL_STATE = mkInitialState(TetroEnum.I, TetroEnum.J);

const {
  actions: { moveRight },
  reducer,
} = gameSlicePure(TetroEnum.I, TetroEnum.J);

describe('Move Right', () => {
  it('should increase current tetro x position, leaving the board un touched, no collission', () => {
    const initialState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro },
    };

    const finalState: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 5 },
    };
    const r = reducer(initialState, moveRight);
    expect(r).toEqual(finalState);
  });

  it('should not push current tetro x position over the edge, leaving the board un touched, no collission', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 6 },
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 7 },
    };
    const r = reducer(initialState, moveRight);
    expect(r).toEqual(finalState);
  });

  it('should increase current tetro x position, leaving the board un touched, no collision', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_X,
      currentTetro: { ...INITIAL_STATE.currentTetro },
    };
    const finalState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_X,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 4 },
    };
    const r = reducer(initialState, moveRight);
    expect(r).toEqual(finalState);
  });

  it('should not increase current tetro x position, leave it on the edge', () => {
    const initialState: InternalState = {
      ...INITIAL_STATE,
      board: BOARD_HALF_S_X,
      currentTetro: { ...INITIAL_STATE.currentTetro, x: 4 },
    };
    const finalState: InternalState = {
      ...initialState,
    };
    const r = reducer(initialState, moveRight);
    expect(r).toEqual(finalState);
  });
});
