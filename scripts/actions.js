import tree from './tree';
import R from 'ramda';

var player = tree.select('player'),
    camera = tree.select('camera'),
    moveVelocity = 20,
    leftWindowBound = 100,
    rightWindowBound = 400,
    leftGameBound = 250,
    rightGameBound = 1500;

var isWithinWindowBounds = R.allPass([
  R.lt(leftWindowBound),
  R.gt(rightWindowBound)
]);

var isWithinGameBounds = R.allPass([
  R.lt(leftGameBound),
  R.gt(rightGameBound)
]);

var orientPlayer = R.ifElse(R.lt(0), R.always('right'), R.always('left'));

function movePlayer(v) {
  let plusMove = R.add(v);
  player.select('orientation').set(orientPlayer(v));
  //position for game units
  player.select('gameX').apply(x =>
    isWithinGameBounds(plusMove(x)) ? plusMove(x) : x
  );
  //position for window display
  player.select('windowX').apply(x =>
    isWithinWindowBounds(plusMove(x)) ? plusMove(x) : x
  );
}

function moveCamera(v) {
  let plusMove = R.add(v);
  camera.select('gameX').apply(x =>
    isWithinWindowBounds(plusMove(player.select('windowX').get())) ? x : plusMove(x)
  );
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
