import mixins from 'baobab-react/mixins';
import React from 'react';
import CharacterCanvas from './CharacterCanvas';
import actions from './actions';

var mixin = mixins.root;

export default React.createClass({
  mixins: [mixin],
  handleLeftKey() {
    actions.moveLeft();
  },
  handleRightKey() {
    actions.moveRight();
  },
  handleKeyDown(e) {
    let keyCommands = {
      37: this.handleLeftKey,
      39: this.handleRightKey
    };
    keyCommands[e.keyCode]();
  },
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  },
  render: function() {
    return (
      <div onClick={this.handleKeyPress}>
        <CharacterCanvas />
      </div>
    );
  }
});
