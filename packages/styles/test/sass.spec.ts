const path = require('path');
const sassTrue = require('sass-true');

describe('Sass', () => {
  const sassFile = path.join(__dirname, 'sass.spec.scss');

  sassTrue.runSass({ describe, it }, sassFile);
});
