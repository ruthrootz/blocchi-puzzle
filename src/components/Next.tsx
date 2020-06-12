import * as React from 'react';
import { NoTetro, TetroEnum, DirectionEnum } from '../game/types';
import styled from 'styled-components';
import { Tile } from './Tile';
import { getTetroFromPieces } from '../game';

const SIZE_NEXT_BOARD = 4;

const StyledNext = styled.div`
  display: grid;
  width: 16.5vmin;
  height: 16.5vmin;
  grid-template-rows: repeat(${SIZE_NEXT_BOARD}, 1fr);
  grid-template-columns: repeat(${SIZE_NEXT_BOARD}, 1fr);
  grid-gap: 0.2rem;
`;

const EmptyTile = styled.div``;

type Props = Readonly<{
  type: TetroEnum;
  direction: DirectionEnum;
}>;

export function Next({ type, direction }: Props): JSX.Element {
  const tetro = getTetroFromPieces(type, direction);
  return (
    <StyledNext>
      {new Array(SIZE_NEXT_BOARD).fill(0).map((_rowB, rowIdxB) =>
        new Array(SIZE_NEXT_BOARD).fill(0).map((_cellB: number, cellIdxB: number) => {
          const hasPiece = tetro[rowIdxB] !== undefined && tetro[rowIdxB][cellIdxB] !== undefined;
          if (hasPiece) {
            const piece = tetro[rowIdxB][cellIdxB];
            const isPieceTetro = piece !== NoTetro;
            if (isPieceTetro) {
              return <Tile key={cellIdxB} variant={piece} />;
            } else {
              return <EmptyTile key={cellIdxB} />;
            }
          } else {
            return <EmptyTile key={cellIdxB} />;
          }
        })
      )}
    </StyledNext>
  );
}