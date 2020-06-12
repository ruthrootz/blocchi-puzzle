import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { gameSlice } from '../store';
import { useDispatch } from 'react-redux';
import { Logo } from '../assets/Logo';
import { Button } from './Button';

const {
  actions: { screenGame },
} = gameSlice;

const buttonFadeAnim = keyframes`
  from {
    transform: translateY(2rem);
    opacity: 0;
  }

  to {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const ScreenIntroStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  margin-top: 3.5vmin;
  opacity: 0;
  animation: ${buttonFadeAnim} 1.5s linear 2s normal forwards;
  transition: all 0.3s;
`;

export const ScreenIntro = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClickPlay = () => dispatch(screenGame());

  return (
    <ScreenIntroStyled>
      <Logo />
      <ButtonWrapper>
        <Button onClick={handleClickPlay}>Play!</Button>
      </ButtonWrapper>
    </ScreenIntroStyled>
  );
};