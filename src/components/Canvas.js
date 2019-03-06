import React, { Component } from 'react';
import styled from '@emotion/styled';
import debounce from 'lodash.debounce';

import thinking from '../../static/thinking.png';
import { random } from '../utils';

const StyledCanvas = styled.canvas`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

class Particle {
  constructor(ctx, image) {
    this.ctx = ctx;
    this.image = image;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= this.drag;
    this.vy *= this.drag;
    this.theta += random(-0.5, 0.5) * this.wander;
    this.vx += Math.sin(this.theta) * 0.4;
    this.vy += Math.cos(this.theta) * 0.4;
    this.radius *= 0.96;
    this.alive = this.radius > 0.1;
  }

  init(x, y, radius) {
    this.alive = true;

    this.radius = radius || 1;
    this.wander = 0;
    this.theta = random(Math.PI * 2);
    this.drag = 0;

    this.x = x || 0;
    this.y = y || 0;

    this.vx = 0;
    this.vy = 0;
  }

  render() {
    this.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      (this.image.width / 6) * this.radius,
      (this.image.height / 6) * this.radius
    );
  }
}

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.updateAnimationState = this.updateAnimationState.bind(this);
    this.paint = this.paint.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.createParticle = this.createParticle.bind(this);
    this.createParticle = debounce(this.createParticle, 16);

    this.canvasRef = React.createRef();
    this.canvas = this.canvasRef.current;
    this.particles = [];
    this.pool = [];
    this.MAX_PARTICLES = 220;
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
    this.image = new Image();
    this.image.src = thinking;

    this.image.onload = () => {
      this.setState({ loaded: true });
    };
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  createParticle(mouseX, mouseY) {
    const theta = random(Math.PI * 2);
    const force = random(20, 25);
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (this.particles.length >= this.MAX_PARTICLES) {
      this.pool.push(this.particles.shift());
    }

    const particle = this.pool.length
      ? this.pool.pop()
      : new Particle(ctx, this.image);

    particle.init(mouseX, mouseY, random(3, 8));
    particle.wander = random(0, 0.1);
    particle.drag = random(0, 0.1);
    particle.vx = Math.sin(theta) * force;
    particle.vy = Math.cos(theta) * force;

    this.particles.push(particle);
  }

  paint() {
    const { loaded } = this.state;

    if (!loaded) return;

    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const { width, height } = canvas;

    ctx.save();
    ctx.clearRect(0, 0, width, height);

    this.particles.forEach((particle, index) => {
      if (particle.alive) {
        particle.move();
      } else {
        this.pool.push(this.particles.splice(index, 1)[0]);
      }
    });

    this.particles.forEach(particle => {
      particle.render();
    });

    ctx.restore();
  }

  handleMouseMove(e) {
    const { clientX, clientY } = e;

    this.createParticle(clientX, clientY);
  }

  handleTouchMove(e) {
    const { clientX, clientY } = e.changedTouches[0];

    this.createParticle(clientX, clientY);
  }

  updateAnimationState() {
    this.paint();
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  render() {
    return (
      <StyledCanvas
        onTouchMove={this.handleTouchMove}
        onMouseMove={this.handleMouseMove}
        ref={this.canvasRef}
      />
    );
  }
}

export default Canvas;
