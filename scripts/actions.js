import tree from './tree';

var xPos = tree.select('xPos'),
    moveAmount = 10;

export default {
  moveLeft() {
    xPos.apply((x) => {
      return x - moveAmount;
    });
  },
  moveRight() {
    xPos.apply((x) => {
      return x + moveAmount;
    });
  }
};
