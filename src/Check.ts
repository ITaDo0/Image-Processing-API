function fileName(name: string) {
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

function widthHeight(width: number, height: number) {
  if (isNaN(width) || width <= 0) {
    return false;
  }
  if (isNaN(height) || height <= 0) {
    return false;
  }
  return true;
}

function type(imgtype: string) {
  if (imgtype === 'jpg') {
    return true;
  } else {
    return false;
  }
}
module.exports = { fileName, widthHeight, type };
