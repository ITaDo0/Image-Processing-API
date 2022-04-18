import * as path from 'path';
import * as fs from 'fs';
const mkdir = require('./mkdir');

// Check if the directory exists
function directoryExists(dirname: string): boolean {
  if (fs.existsSync(path.join(__dirname, dirname))) {
    console.log('directory exists');
    return true;
  } else {
    console.log('directory doesnt exist');
    mkdir.mkdir(dirname);
    return false;
  }
}

module.exports = { directoryExists };
