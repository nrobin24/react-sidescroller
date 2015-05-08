import trapperLeftImg from '../images/trapper-left.png';
import trapperRightImg from '../images/trapper-right.png';

var imgLeft = new Image(),
    imgRight = new Image();

imgLeft.src = trapperLeftImg;
imgRight.src = trapperRightImg;

var images = {
  left: imgLeft,
  right: imgRight
};

export default (xPos, orientation, context) => {
  context.save();
  context.clearRect(0,0,700,500);
  context.drawImage(images[orientation],xPos,180);
  context.restore();
};
