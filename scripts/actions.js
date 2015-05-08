import tree from './tree';
import characterPosition from './characterPosition';
import backgroundPosition from './backgroundPosition';

var characterXPosCursor = tree.select('characterXPos'),
    backgroundXPosCursor = tree.select('backgroundXPos'),
    characterOrientationCursor = tree.select('characterOrientation');

export default {
  keyLeft() {
    characterXPosCursor.apply(characterPosition.moveLeft);
    characterOrientationCursor.set('left');
    backgroundXPosCursor.apply(backgroundPosition.moveLeft);
  },
  keyRight() {
    characterXPosCursor.apply(characterPosition.moveRight);
    characterOrientationCursor.set('right');
    backgroundXPosCursor.apply(backgroundPosition.moveRight);
  }
};
