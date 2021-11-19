import React, { Component } from 'react';
import styled from 'styled-components';

const Line = styled.span`
  color: white;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

class Commands extends Component {
  constructor(props) {
    super(props);

    this.commands = this.commands.bind(this);

    this.state = {
      commandments: [
        'Acknowledge that all is equal.',
        'Look into the beyond of equality to reach tranquility.',
        'Equality is above humanity, respect it.',
        'Have faith in the balance, for it would never betray you.',
        "Don't cheat. Exception: All tests that have marks and ratings",
        "Don't underestimate.",
        'Stick to your word.',
        'Worship the ones who worship you.',
        'You are your own god, no matter who you are and what you are.',
        "Don't fill your mind with false thoughts of others.",
      ],
    };
  }

  commands() {
    return this.state.commandments.map((line, i) => (
      <Line key={i}>{line}</Line>
    ));
  }

  render() {
    return <Wrapper>{this.commands()}</Wrapper>;
  }
}

export default Commands;
