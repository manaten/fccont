import React, {Component} from 'react';
import 'isomorphic-fetch';

import FcController from './FcController';

const sock = new WebSocket('ws://localhost:9999');

export default class App extends Component {
  constructor() {
    super();
    this.keyStates = ['U','U','U','U','U','U','U','U','U','U','U','U','U','U'];
    this.state = {
      type: '1p'
    };
  }

  setKeyState(type, value) {
    const stateMap = [
      '1p_a',
      '1p_b',
      '1p_select',
      '1p_start',
      '1p_up',
      '1p_down',
      '1p_left',
      '1p_right',
      '2p_a',
      '2p_b',
      '2p_up',
      '2p_down',
      '2p_left',
      '2p_right',
    ];
    const index = stateMap.indexOf(type);
    this.keyStates[index] = value;
    console.log(type, this.keyStates.join(''));
    sock.send(JSON.stringify({Msg: this.keyStates.join('')}));
  }

  render() {
    return (
      <div className="app">
        <div className="switcher">
          <button className={'switcher__button' + (this.state.type === '1p' ? ' switcher__button--active' : '')} onClick={() => this.setState({type: '1p'})} >1P</button>
          <button className={'switcher__button' + (this.state.type === '2p' ? ' switcher__button--active' : '')} onClick={() => this.setState({type: '2p'})} >2P</button>
        </div>
        <FcController
          type={this.state.type}
          onMouseUp={type => this.setKeyState(type, 'U')}
          onMouseDown={type => this.setKeyState(type, 'P')}
        />
      </div>
    );
  }
}
