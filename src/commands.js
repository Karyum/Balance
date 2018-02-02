import React, { Component } from 'react';
import styled from 'styled-components';

const Line = styled.span`
  color: orangered;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Commands extends Component {
  constructor(props) {
    super(props);

    this.commands = this.commands.bind(this);

    this.state = {
      commandments: [
        'acknowledge that all is equal.',
        'Look into the beyond of equality to reach tranquility.',
        'Equality is above humanity, respect it.',
        'Have faith in the balance, for it would never betray you.',
        "Don't cheat.",
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
