import {root} from 'baobab-react/mixins';
import React from 'react';
import CharacterCanvas from './CharacterCanvas';
import BackgroundCanvas from './BackgroundCanvas';
import actions from './actions';

var paragraphStyle = {
  position: 'absolute',
  left: 0,
  top:0,
  zIndex: 3
};

export default React.createClass({
  mixins: [root],
  handleKeyLeftPress() {
    actions.keyLeft();
  },
  handleKeyRightPress() {
    actions.keyRight();
  },
  handleKeyDown(e) {
    let keyCommands = {
      37: this.handleKeyLeftPress,
      39: this.handleKeyRightPress
    };
    if (keyCommands[e.keyCode]) {
      keyCommands[e.keyCode]();
    }
  },
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  },
  render: function() {
    return (
      <div>
        <p style={paragraphStyle}>Use the right and left arrow keys to move</p>
        <CharacterCanvas />
        <BackgroundCanvas />
      </div>
    );
  }
});
