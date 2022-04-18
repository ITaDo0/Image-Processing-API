export {};

const fs = require('fs');
const path = require('path');
const sleep = require('../sleep');
const processImage = require('../processImage');
const dirname = '../../ProcessedImages/';
const filename = 'earth';
const width = 800;
const height = 600;
const imgtype = 'jpg';
const fullfilename = `${filename}_${width}_${height}.${imgtype}`;

describe('Image Procssing', () => {
  it('Image should exist', async () => {
    processImage.processImage(dirname, filename, width, height, imgtype, fullfilename);
    // wait 1 second before sending the file to make sure it's finished
    await sleep.sleep(1000);
    expect(fs.existsSync(path.join(__dirname, `${dirname}${fullfilename}`))).toBeTrue();
  });
});
