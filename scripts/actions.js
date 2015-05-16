import tree from './tree';

var player = tree.select('player'),
    camera = tree.select('camera'),
    moveVelocity = 10,
    leftPlayerBound = 100,
    rightPlayerBound = 400,
    leftGameBound = 250,
    rightGameBound = 1500;


function isWithin(min, max, x) {
  return x > min && x < max;
}

function isWithinPlayerBounds(x) {
  return isWithin(leftPlayerBound, rightPlayerBound, x);
}

function isWithinGameBounds(x) {
  return isWithin(leftGameBound, rightGameBound, x);
}

function moveCursor(cursor, v) {
  cursor.apply(x => x + v);
}

function movePlayer(v) {
  player.select('orientation').set(v < 0 ? 'left' : 'right');
  //position for game units
  let gX = player.select('gameX');
  moveCursor(gX, isWithinGameBounds(gX.get() + v) ? v : 0);
  //position for window display
  let wX = player.select('windowX');
  console.log('windowX is: ' + wX.get());
  moveCursor(wX, isWithinPlayerBounds(wX.get() + v) ? v : 0);
}

function moveCamera(v) {
  let wX = player.select('windowX');
  let cX = camera.select('gameX');
  moveCursor(cX, isWithinPlayerBounds(wX.get() + v) ? 0 : v);
}

function moveAll(v) {
  movePlayer(v);
  moveCamera(v);
}

export default {
  keyLeft() {
    moveAll(-moveVelocity);
  },
  keyRight() {
    moveAll(moveVelocity);
  }
};
