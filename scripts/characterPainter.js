import images from './images';

export default (xPos, orientation, context) => {
  let character = {
    left: images.elements.trapperLeft,
    right: images.elements.trapperRight
  };
  context.clearRect(0,0,700,500);
  context.drawImage(character[orientation],xPos,180);
};
