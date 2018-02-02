import { render } from 'react-dom';
import React, { Component } from 'react';

import Main from './main';
import Commands from './commands.js';

import 'file-loader?name=./manifest.json!./manifest.json';
import 'file-loader?name=./icons/scale512.png!./icons/scale512.png';
import 'file-loader?name=./icons/scale192.png!./icons/scale192.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PAGE: 'home',
    };
  }
  render() {
    if (this.state.PAGE === 'home') {
      return <Main changePage={() => this.setState({ PAGE: 'commands' })} />;
    } else if (this.state.PAGE === 'commands') {
      return <Commands />;
    }
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
      console.log('DDDUDUDUDUUDUUEE', registeration);
      console.log(`Im on mate ${new Date()}`);
    })
    .catch(err => {
      console.log('OYYYYYYY', err);
    });
}
