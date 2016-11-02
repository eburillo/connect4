import React from 'react';
import Game from './components/game';

window.React = React;
const mountNode = document.getElementById('app');

React.render(<Game />, mountNode);