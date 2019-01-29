import {deepKeyAssigner} from "../src/objectHelpers";

test( 'Should assign property with deep path', () => {
    var object= {};
    deepKeyAssigner( object, "toto.tutu.tata.yoyo", "hello" );
    expect( object.toto.tutu.tata.yoyo ).toBe( "hello" );
} );

test( 'Should not reinstanciate existing path member', () => {
    var object= {};
    deepKeyAssigner( object, "toto.tutu", "hello" );
    expect( object.toto.tutu ).toBe( "hello" );
    deepKeyAssigner( object, "toto.tata", "hellu" );
    expect( object.toto.tutu ).toBe( "hello" );
    expect( object.toto.tata ).toBe( "hellu" );
} );

test( 'Should erase existing property', () => {
    var object= {};
    deepKeyAssigner( object, "toto.tutu", "hello" );
    expect( object.toto.tutu ).toBe( "hello" );
    deepKeyAssigner( object, "toto.tutu", "hellu" );
    expect( object.toto.tutu ).toBe( "hellu" );
} );