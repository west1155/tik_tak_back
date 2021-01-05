var supertest = require('supertest');
var chai = require('chai');
var app = require('../index.js');global.app = app;

global.expect = chai.expect;
global.request = supertest(app);


describe('Task API Routes', function() {
    describe('GET /items', function() {
        it('returns a list of items', function(done) {
            request.get('/items')
                .expect(200)
                .end(function(err, res) {
                    expect(res.body).to.have.lengthOf(0);
                    done(err);
                });
        });
    });
});
