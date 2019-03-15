import React, { useState } from 'react';
import { css } from '@emotion/core';
import { useSpring, useTransition, animated, config } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import clamp from 'lodash.clamp';

import LikeIcon from '../../../static/round-favorite-24px.svg';
import DislikeIcon from '../../../static/round-favorite_border-24px.svg';

const AnimHeart = animated.div;

function Counter() {
  const [count, setCount] = useState(0);
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const bind = useGesture(({ down, delta, velocity, args }) => {
    const v = clamp(velocity, 1, 2);

    if (down === false && delta[1] >= 20) {
      setCount(args[0] === -1 ? 0 : -1);
    }

    if (down === false && delta[1] <= -20) {
      setCount(args[0] === 1 ? 0 : 1);
    }

    return set({
      xy: down ? [delta[0], clamp(delta[1], -30, 30)] : [0, 0],
      config: { mass: v, tension: 500 * v, friction: 50 },
    });
  });

  const getCount = () => {
    switch (count) {
      case 1:
        return [
          {
            initial: 5,
            dislike: 0,
          },
          { like: 1 },
        ];

      case -1:
        return [{ initial: 0, like: 0 }, { dislike: 1 }];

      default:
        return [{ like: 0, dislike: 0 }, { initial: 1 }];
    }
  };

  const { initial, like, dislike } = useSpring({
    to: getCount(),
    from: { initial: 1, like: 0, dislike: 0 },
    config: {
      tension: 2000,
      friction: 100,
    },
  });

  const countTransition = useTransition(count, null, {
    from: { transform: -50 },
    enter: { transform: 0 },
    leave: { transform: -50 },
    config: config.stiff,
  });

  return (
    <animated.div
      {...bind(count)}
      css={({ night }) => css`
        width: 6rem;
        height: 6rem;
        background: ${night ? 'white' : '#393939'};
        border-radius: 50%;
        cursor: -webkit-grab;
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 1;
      `}
      style={{
        transform: xy.interpolate((x, y) => `translateY(${y}px)`),
      }}>
      <div
        css={theme => css`
          height: 100%;
          width: 100%;
          overflow: hidden;
          border-radius: 50%;
          position: relative;
          background: ${theme.night ? 'white' : '#393939'};
          border-radius: 50%;
          cursor: -webkit-grab;
          display: flex;
          align-items: center;
          justify-content: center;
          color: red;
          box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.15);
          position: relative;
          z-index: 1;
        `}>
        <AnimHeart
          css={css`
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
          style={{
            transform: initial.interpolate(i => `scale(${i})`),
          }}>
          <LikeIcon
            css={css`
              height: 3rem;
              width: 3rem;
              z-index: 3;
              user-select: none;
            `}
          />
        </AnimHeart>
        <AnimHeart
          css={css`
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
          `}
          style={{
            transform: like.interpolate(i => `scale(${i})`),
          }}>
          <LikeIcon
            css={css`
              height: 3rem;
              width: 3rem;
              z-index: 3;
              color: white;
              user-select: none;
            `}
          />
        </AnimHeart>
        <AnimHeart
          css={css`
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
          `}
          style={{
            transform: dislike.interpolate(i => `scale(${i})`),
          }}>
          <DislikeIcon
            css={css`
              height: 3rem;
              width: 3rem;
              z-index: 3;
              color: white;
              user-select: none;
            `}
          />
        </AnimHeart>
      </div>
      <animated.div
        css={css`
          position: absolute;
          background-color: hotpink;
          border-radius: 50%;
          width: 6rem;
          height: 6rem;
          opacity: 0.4;
          z-index: 2;
        `}
        style={{
          transform: xy.interpolate(
            (x, y) => `scale(${(clamp(Math.abs(y), 0, 30) / 30).toFixed(2)})`
          ),
        }}
      />
      {countTransition.map(({ item, key, props: style }) => (
        <animated.p
          key={key}
          style={{
            zIndex: '-1',
            transform: style.transform.interpolate(i => `translateX(${i}px)`),
          }}
          css={theme => css`
            position: absolute;
            top: 2px;
            right: -2rem;
            color: ${theme.grey};
            z-index: -1;
            user-select: none;
          `}>
          {item}
        </animated.p>
      ))}
    </animated.div>
  );
}

export default Counter;
