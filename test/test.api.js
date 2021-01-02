/**
 * API testing example
 * API used
 * @see http://localhost:1111
/**
 * Load the needed libraries
 * Mocha is not here, since it is the test runner
 */
var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:1111/items";

// Create our test case, we need to inform the description
describe("localhost:1111 API test",function(){
    // the it function do the test, in this case, the endpoint /cards, that should return 100 cards max
    it("Should return 100 cards max",function(done){
        request.get(
            {
                url : urlBase + "/cards"
            },
            function(error, response, body){

                // convert the response to json
                var _body = {};
                try{
                    _body = JSON.parse(body);
                }
                catch(e){
                    _body = {};
                }

                // using chai expect function, lets check the result
                expect(response.statusCode).to.equal(200);

                // now, we check if the property cards is avaliable
                if( _body.should.have.property('cards') ){
                    // if true, lets check the length
                    expect(_body.cards).to.have.lengthOf.at.most(100);
                }

                done(); // callback the test runner to indicate the end...
            }
        );
    });

    it("Should receive the card 'Heedless One' ",function(done){
        // lets check the name and artists name
        request.get(
            {
                url : urlBase + "/cards?name=Heedless One"
            },
            function(error, response, body){

                // object 2 json
                var _body = {};
                try{
                    _body = JSON.parse(body);
                }
                catch(e){
                    _body = {};
                }

                // sucesso (200)?
                expect(response.statusCode).to.equal(200);

                // do we have cards?
                if( _body.should.have.property('cards') ){
                    // do we have at least one?
                    expect(_body.cards).to.have.lengthOf.at.least(1);

                    // check the first card
                    if(_body.cards[0].should.have.property('artist')){
                        expect(_body.cards[0].artist).to.equal('Mark Zug');
                    }
                    if(_body.cards[0].should.have.property('name')){
                        expect(_body.cards[0].name).to.equal('Heedless One');
                    }
                }

                done(); // callback
            }
        );
    });
});