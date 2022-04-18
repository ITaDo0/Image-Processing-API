import * as path from 'path';
import * as fs from 'fs';

// Check if the file exists
function fileExists(dirname: string, fullfilename: string): boolean {
  if (fs.existsSync(path.join(__dirname, dirname + fullfilename))) {
    console.log('file exists');
    return true;
  } else {
    console.log('file doesnt exist');
    return false;
  }
}

module.exports = { fileExists };
