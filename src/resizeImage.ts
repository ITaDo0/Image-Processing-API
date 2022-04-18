import * as path from 'path';
const sharp = require('sharp');

const dirname = '../ProcessedImages/';

// Resize the image
function resizeImage(filename: string, width: number, height: number, imgtype: string, fullfilename: string): void {
  sharp(path.join(__dirname, `../images/${filename}.jpg`))
    .resize(parseInt(width as unknown as string), parseInt(height as unknown as string))
    .toFile(path.join(__dirname, `${dirname}${filename}_${width}_${height}.${imgtype}`));
  console.log('Successfully resized: ' + fullfilename);
}

module.exports = { resizeImage };
