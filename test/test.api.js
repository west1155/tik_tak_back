"use strict";
var data = [];

describe( "An array test on the server", () => {
    before( () => {
        console.log( "before executes once before all tests" );
    } );

    after( () => {
        console.log( "after executes once after all tests" );
    } );

    describe( "sending", () => {
        beforeEach( () => {
            console.log( "beforeEach executes before every test" );
        } );
        it( "lets push an item to array", () => {
            data.push("Privet")
        } );

        it( "Should return Hi from the array", () => {
            data.pop();
        } );
    } );

    describe( "error", () => {
        it( "should return an error", () => {
            assert.throws( data.push, {
                name: "Error",
                message: "it blowed up"
            } );
        } );
    } );
} );