export default {
  load() {
    let promises = [];
    Object.keys(this.sources).forEach((key) => {
      promises.push(new Promise((resolve, reject) => {
        let img = new Image();
        this.elements[key] = img;
        img.addEventListener('load', () => {
          resolve();
        }, false);
        img.src = this.sources[key];
      }));
    });
    return Promise.all(promises);
  },
  elements: {},
  sources: {
    trapperLeft: '../images/trapper-left.png',
    trapperRight: '../images/trapper-right.png',
    background: '../images/portland-metropolis-1888.jpg'
  }
};
