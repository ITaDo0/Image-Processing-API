export {};

const fs = require('fs');
const path = require('path');
const directoryExists = require('../directoryExists');
const dirname = '../ProcessedImages/';

describe('File system', () => {
  directoryExists.directoryExists(dirname);
  it('Expects ProcessedImages directory to exist', () => {
    expect(fs.existsSync(path.join(__dirname, '../../ProcessedImages/'))).toBeTrue();
  });
});
