var moveAmount = 10,
    leftMargin = 20,
    rightMargin = 450;

export default {
  moveLeft(x) {
    if (x - moveAmount > leftMargin) {
      return x - moveAmount;
    } else {
      return leftMargin;
    }
  },
  moveRight(x ) {
    if (x + moveAmount < rightMargin) {
      return x + moveAmount;
    } else {
      return rightMargin;
    }
  }
};
