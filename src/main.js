import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import holy from './assets/holy.mp3';
import scale from './assets/scale.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const Image = styled.img`
  @keyframes slideInFromLeft {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: 3s ease-out 0s 1 slideInFromLeft;

  color: white;
  height: 18em;
  width: 18em;
`;

const fadeIn = keyframes`
from {
    opacity: 0;
  }
to {
    opacity: 1;
  }
`;

const Title = styled.h1`
  color: white;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

const Command = styled.h1`
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: 5rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 2rem 0.5rem;
  font-family: sans-serif;
  border: 1px solid white;
  animation: ${props => (props.done ? fadeIn : 'none')} 1s linear forwards;
  opacity: 0;
`;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
    };
  }
  render() {
    let soundNotWorking;
    if (window.matchMedia('(display-mode: standalone)').matches) {
      soundNotWorking = 'Insert a holy sound here';
    }
    return (
      <Wrapper>
        <Title>May the balance be with you</Title>
        <p style={{ marginBottom: '1em' }}>{soundNotWorking || ''}</p>
        <Image src={scale} />
        <Command
          className="Command"
          done={this.state.done ? true : false}
          onClick={e => this.props.changePage()}
        >
          The Ten Commandments
        </Command>
      </Wrapper>
    );
  }

  componentDidMount() {
    const aud = new Audio(holy);
    aud.play();
    setTimeout(() => {
      aud.pause();
      this.setState({ done: true });
    }, 3000);
  }
}

export default Main;
