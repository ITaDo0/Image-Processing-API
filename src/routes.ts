import { Request, Response } from 'express';

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const processImage = require('./processImage');
const sleep = require('./sleep');
const fileExists = require('./fileExists');
const Check = require('./Check');
const port = 80;

let filename: string | unknown;
let width: number | unknown;
let height: number | unknown;
let imgtype: string | unknown;
let fullfilename: string | unknown;
const dirname = '../ProcessedImages/';

// Build the server
function buildAPI(): void {
  app.use(cors());
  app.set('port', '80');
  app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/resizeimage', async (req: Request, res: Response) => {
    filename = req.query.name;
    width = req.query.width;
    height = req.query.height;
    imgtype = req.query.imgtype;
    fullfilename = `${filename}_${width}_${height}.${imgtype}`;
    // Check if the filename is available
    if (!Check.fileName(filename)) {
      res.status(500).send({ error: 'Image doesnt exist' });
    }
    // Check if the width and height are available
    else if (!Check.widthHeight(width, height)) {
      res.status(500).send({ error: 'Wrong width or height' });
    }
    // Check the type
    else if (!Check.type(imgtype)) {
      res.status(500).send({ error: 'Wrong image type only jpg is allowed' });
    } else if (fileExists.fileExists(dirname, fullfilename)) {
      res.sendFile(path.join(__dirname, `../ProcessedImages/${fullfilename}`));
    } else {
      processImage.processImage(dirname, filename, width, height, imgtype, fullfilename);
      // wait 1 second before sending the file to make sure it's finished
      await sleep.sleep(1000);
      res.sendFile(path.join(__dirname, `../ProcessedImages/${fullfilename}`));
    }
  });

  app.listen(port, () => {
    console.log(`API is running on port: ${port}`);
  });
}

module.exports = { buildAPI };
