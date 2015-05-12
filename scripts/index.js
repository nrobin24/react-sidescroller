import React from 'react';
import App from './App';
import tree from './tree';
import images from './images';

images.load().then(() => {
  React.render(<App tree={tree}/>, document.getElementById('root'));
});
