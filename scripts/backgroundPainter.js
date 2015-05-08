import portlandImg from '../images/portland-metropolis-1888.jpg';
var img = new Image();   // Create new img element
img.src = portlandImg;

export default (xPos, context) => {
  context.save();
  context.clearRect(0,0,700,500);
  context.scale(0.4, 0.4);
  context.drawImage(img,-xPos,-70);
  context.restore();
};
