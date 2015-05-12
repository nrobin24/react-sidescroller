import React from 'react';
import {branch} from 'baobab-react/mixins';
import backgroundPainter from './backgroundPainter';

var canvasStyle = {
  position: 'absolute',
  left: 0,
  top:0,
  zIndex: 1
};

export default React.createClass({
  mixins: [branch],
  cursors: {
    xPos: ['backgroundXPos']
  },
  componentDidMount() {
    this.paint();
  },
  componentDidUpdate() {
    this.paint();
  },
  paint() {
    let context = this.getDOMNode().getContext('2d');
    backgroundPainter(this.state.xPos, context);
  },
  render: function() {
    return (
      <canvas width={700} height={500} style={canvasStyle}/>
    );
  }
});
