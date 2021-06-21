import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { useSpring, animated } from 'react-spring';

import { describeArc } from '../../utils';

const Main = styled.div`
  height: 5rem;
  width: 5rem;
  border: 4px solid ${({ theme }) => (theme.night ? 'white' : '#393939')};
  border-radius: 50%;
  position: relative;
  z-index: 2;
`;

const AnimInner = animated.div;

const Inner = styled(AnimInner)`
  position: absolute;
  border-radius: 50%;
  background-color: red;
  margin: auto;
  height: 3.6rem;
  width: 3.6rem;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Ring = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
  height: ${({ dimensions }) => dimensions}px;
  width: ${({ dimensions }) => dimensions}px;
`;

function OrbitHover() {
  const [hovered, setHovered] = useState(false);

  const { stroke, size, radius } = useSpring({
    to: {
      stroke: hovered ? 4 : 0,
      size: hovered ? 1 : 0,
      radius: hovered ? 0 : 100,
    },
    from: { stroke: 0, size: 0, radius: 50 },
    config: { mass: 1, tension: 280, friction: 170 },
  });

  const enter = () => {
    setHovered(true);
  };

  const leave = () => {
    setHovered(false);
  };

  const rings = [300, 350, 400, 450];
  const speed = [1.5, 2, 3, 6];

  return (
    <Main
      onMouseEnter={enter}
      onTouchStart={enter}
      onTouchEnd={leave}
      onMouseLeave={leave}>
      <Inner
        style={{
          willChange: 'transform',
          transform: size.interpolate((i) => `scale(${i})`),
        }}
      />
      {rings.map((ring, i) => {
        const offset = i % 2 === 0 ? 0 : 90;

        return (
          <React.Fragment key={`ring-${i}`}>
            <Ring dimensions={ring}>
              <animated.svg
                css={css`
                  height: 100%;
                  width: 100%;
                  animation: ${rotation} ${speed[i]}s linear infinite;
                `}>
                <animated.path
                  stroke="red"
                  d={radius.interpolate((r) =>
                    describeArc(
                      ring / 2,
                      ring / 2,
                      40 + 25 * i + r,
                      0 + offset,
                      70 + offset
                    )
                  )}
                  strokeLinecap="round"
                  strokeWidth={stroke}
                  fill="none"
                />
              </animated.svg>
            </Ring>
            <Ring dimensions={ring}>
              <animated.svg
                css={css`
                  height: 100%;
                  width: 100%;
                  animation: ${rotation} ${speed[i]}s linear infinite;
                `}>
                <animated.path
                  stroke="red"
                  d={radius.interpolate((r) =>
                    describeArc(
                      ring / 2,
                      ring / 2,
                      40 + 25 * i + r,
                      180 + offset,
                      250 + offset
                    )
                  )}
                  strokeLinecap="round"
                  strokeWidth={stroke}
                  fill="none"
                />
              </animated.svg>
            </Ring>
          </React.Fragment>
        );
      })}
    </Main>
  );
}

export default OrbitHover;
