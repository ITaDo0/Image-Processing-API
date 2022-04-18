const fileExists = require('./fileExists');
const resizeImage = require('./resizeImage');

// If the file doesn't exist resize the image and wait 2 seconds for the image to get resized then move it
function processImage(
  dirname: string,
  filename: string,
  width: number,
  height: number,
  imgtype: string,
  fullfilename: string,
): void {
  if (!fileExists.fileExists(dirname, fullfilename)) {
    resizeImage.resizeImage(filename, width, height, imgtype, fullfilename);
  }
}

module.exports = { processImage };
