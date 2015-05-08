var moveAmount = 30;

export default {
  moveRight(x) {
    if (x + moveAmount < 2200) {
      return x + moveAmount;
    } else {
      return 2200;
    }
  },
  moveLeft(x) {
    if (x - moveAmount > 0) {
      return x - moveAmount;
    } else {
      return 0;
    }
  }
};
