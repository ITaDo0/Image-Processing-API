function fileName(name) {
  if (name === 'earth') {
    return true;
  } else if (name === 'galaxy') {
    return true;
  } else if (name === 'universe') {
    return true;
  } else {
    return false;
  }
}
function widthHeight(width, height) {
  if (isNaN(width) || width <= 0) {
    console.log('Width: '.concat(width, ' is NaN'));
    return false;
  }
  if (isNaN(height) || height <= 0) {
    console.log('Height: '.concat(height, ' is NaN'));
    return false;
  }
  console.log('Width: '.concat(width, ' Passed \nHeight: ').concat(height, ' Passed'));
  return true;
}
widthHeight(1, 1);
widthHeight(400, 500);
widthHeight(-1, -1);
widthHeight('5', '5');
widthHeight(1.5, 1.5);
widthHeight('hello', 'hello');
