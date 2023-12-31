const supertest = require('supertest');
const assert = require('assert');
const { app, server } = require('../app'); // Adjust the path accordingly

describe('Integration Tests', () => {
  after(() => {
    // After all tests, close the server to release the port
    server.close();
  });

  it('should return status 200 for GET /home', async () => {
    const response = await supertest(app).get('/home');
    assert.equal(response.status, 200);
  });

});
