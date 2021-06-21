import React, { useState, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { keyframes, css } from '@emotion/react';

const Parallax = () => {
  const card = useRef();

  const [style, set] = useSpring(() => ({
    xys: [0, 0],
    config: config.molasses,
  }));

  const transRotate = (x, y) => `rotateX(${x / 1.6}deg) rotateY(${y / 1.6}deg)`;
  const transMove = (x, y) =>
    `translateX(${-(y / 2)}px) translateY(${x / 2}px)`;

  const calc = (x, y) => {
    const { top, left } = card.current.getBoundingClientRect();
    const height = card.current.offsetHeight;
    const width = card.current.offsetWidth;

    return [-(y - top - height / 2) / 6, (x - left - width / 2) / 6];
  };

  return (
    <div
      css={css`
        transform-style: preserve-3d;
        transform: perspective(600px);
      `}
      ref={card}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0] })}>
      <animated.div
        css={css`
          position: relative;
          overflow: hidden;
          width: 16rem;
          height: 16rem;
          overflow: hidden;
          border-radius: 5px;
        `}
        style={{
          transform: style.xys.interpolate(transRotate),
        }}>
        <animated.div
          style={{
            transform: style.xys.interpolate(transMove),
          }}
          css={css`
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(https://images.unsplash.com/photo-1547968196-230ad3b7cbf7?dpr=2&auto=compress,
              format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=);
            flex-shrink: 0;
            position: absolute;
            top: -10%;
            left: -10%;
            width: 120%;
            height: 120%;
            padding: 20px;
            pointer-events: none;
          `}
        />
      </animated.div>
    </div>
  );
};

export default Parallax;
