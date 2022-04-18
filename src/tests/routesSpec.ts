export {};

const request = require('supertest');
const express = require('express');

const app = express();

describe('Routes', () => {
  it('Should return 200', () => {
    request(app).get('/').expect(200);
  });
  it('Should be 269', () => {
    request(app).get('/').expect('Content-Length', '269');
  });
  it('Should be 200', () => {
    request(app).get('/resizeimage').expect(200);
  });
});
