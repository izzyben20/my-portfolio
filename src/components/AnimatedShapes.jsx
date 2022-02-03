import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #4e6bff;
  opacity: 0.2;
  position: absolute;
  top: -6rem;
  left: -6rem;
  z-index: -2;

  animation: square 25s linear infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Square2 = styled.div`
  width: 6rem;
  height: 6rem;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  opacity: 0.2;
  position: absolute;
  top: 1rem;
  left: -6rem;
  z-index: -2;

  animation: square 30s linear infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: #ff97af;
  opacity: 0.2;
  position: absolute;
  top: 30rem;
  left: -10rem;
  z-index: -2;

  animation: circle 25s linear infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Circle2 = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: rgba(250,250,250, 0.5);
  opacity: 0.2;
  position: absolute;
  top: 60rem;
  left: -10rem;
  z-index: -2;

  animation: circle 25s linear infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Rectangle = styled.div`
  width: 10rem;
  height: 5rem;
  background-color: #669966;
  opacity: 0.2;
  position: absolute;
  top: 40rem;
  left: -5rem;
  z-index: -2;

  animation: rectangle 25s linear infinite;

  @keyframes rectangle {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Square2 />
      <Circle />
      <Rectangle />
      <Circle2 />
    </>
  );
};

export default AnimatedShapes;
