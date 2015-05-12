import React from 'react';
import {branch} from 'baobab-react/mixins';
import characterPainter from './characterPainter';

var canvasStyle = {
  position: 'absolute',
  left: 0,
  top:0,
  zIndex: 2
};

export default React.createClass({
  mixins: [branch],
  cursors: {
    xPos: ['characterXPos'],
    orientation: ['characterOrientation']
  },
  componentDidMount() {
    this.paint();
  },
  componentDidUpdate() {
    this.paint();
  },
  paint() {
    let context = this.getDOMNode().getContext('2d');
    characterPainter(this.state.xPos, this.state.orientation, context);
  },
  render: function() {
    return (
      <canvas width={700} height={500} style={canvasStyle} />
    );
  }
});
