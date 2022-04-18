import * as path from 'path';
import * as fs from 'fs';

// Make a directory
function mkdir(dirname: string): void {
  fs.mkdir(path.join(__dirname, dirname), (err: unknown) => {
    if (err) {
      return console.error(err);
    }
  });
  console.log('directory created');
}

module.exports = { mkdir };
