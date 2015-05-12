import images from './images';

export default (xPos, context) => {
  context.save();
  context.clearRect(0,0,700,500);
  context.scale(0.4, 0.4);
  context.drawImage(images.elements.background,-xPos,-70);
  context.restore();
};
