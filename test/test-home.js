const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../app'); // Import both app and server

chai.use(chaiHttp);
const expect = chai.expect;

describe('Home Route', () => {
  it('should return status 200 on /home GET', (done) => {
    chai.request(server) // Use the server instance
      .get('/home')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});



