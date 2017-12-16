import { render } from 'react-dom';
import React, { Component } from 'react';
import styled from 'styled-components';

import scale from './assets/scale.png';
import holy from './assets/holy.mp3';
import 'file-loader?name=./manifest.json!./manifest.json';

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

const Commandments = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 50rem;
  background-color: black;
  z-index: 1;
`;

const Command = styled.h1`
  color: white;
  font-size: 1.5rem;
`;

class App extends Component {
  render() {
    let soundNotWorking;
    if (window.matchMedia('(display-mode: standalone)').matches) {
      soundNotWorking = 'Insert a holy sound here';
    }
    return (
      <Wrapper>
        <Title>May the balance be with you</Title>
        <Command>The Ten Commandments</Command>
        <Commandments>
          <h1 style={{ color: 'white' }}>hi</h1>
        </Commandments>
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

/*
*
* 1. acknowledge that all is equal.
* 2. Look into the beyond of equality to reach tranquility.
* 3. Equality is above humanity, respect it.
* 4. Have faith in the balance, for it would never betray you.
* 5. Don't cheat.
* 6. Don't underestimate.
* 7. Stick to your word.
* 8. Worship the ones who worship you.
* 9. You are your own god, no matter who you are and what you are.
* 10. Don't fill your mind with false thoughts of others.
*
*/
/*
  Moto: May the balance be with you
*/

render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(registeration => {
      console.log('Im on mate');
    })
    .catch(err => {
      console.log('wtf just happend', err);
    });
}
