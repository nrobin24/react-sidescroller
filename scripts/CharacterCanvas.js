import React from 'react';
import mixins from 'baobab-react/mixins';
import characterPainter from './characterPainter';

export default React.createClass({
  mixins: [mixins.branch],
  cursors: {
    xPos: ['xPos']
  },
  componentDidMount() {
    this.paint();
  },
  componentDidUpdate() {
    this.paint();
  },
  paint() {
    let context = this.getDOMNode().getContext('2d');
    characterPainter(this.state.xPos, context);
  },
  render: function() {
    return (
      <canvas width={500} height={500}/>
    );
  }
});
