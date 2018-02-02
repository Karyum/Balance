import React, { Component } from 'react';
import styled from 'styled-components';

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

const Title = styled.h1`
  color: white;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

// const Commandments = styled.div`
//   opacity: 0;
//   position: absolute;
//   width: 100%;
//   height: 50rem;
//   background-color: black;
//   z-index: 1;
// `;

const Command = styled.h1`
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
`;

class Main extends Component {
  render() {
    let soundNotWorking;
    if (window.matchMedia('(display-mode: standalone)').matches) {
      soundNotWorking = 'Insert a holy sound here';
    }
    return (
      <Wrapper>
        <Title>May the balance be with you</Title>
        <Command onClick={e => this.props.changePage()}>
          The Ten Commandments
        </Command>
        <p style={{ marginBottom: '1em' }}>{soundNotWorking || ''}</p>
        <Image src={scale} />
      </Wrapper>
    );
  }

  componentDidMount() {
    const aud = new Audio(holy);
    aud.play();
    setTimeout(() => {
      aud.pause();
    }, 3000);
  }
}

export default Main;
