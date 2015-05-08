export default (xPos, context) => {
  context.save();
  context.clearRect(0,0,500,500);
  context.fillStyle = "green";
  context.fillRect(xPos, 10, 20, 20);
  context.restore();
};
