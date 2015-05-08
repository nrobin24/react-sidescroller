import mixins from 'baobab-react/mixins';
import React from 'react';
import CharacterCanvas from './CharacterCanvas';
import BackgroundCanvas from './BackgroundCanvas';
import actions from './actions';

var mixin = mixins.root;

export default React.createClass({
  mixins: [mixin],
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
      <div onClick={this.handleKeyPress}>
        <CharacterCanvas />
        <BackgroundCanvas />
      </div>
    );
  }
});
