import {FlexDate, FlexTime, FlexDateTime, FlexZonedDateTime} from '../src/types/FlexDate'

test('test date creation', () => {
    var date = new FlexDate( "1992-10-17" );
    expect(date.toJSON()).toBe( "1992-10-17" );
});

test('test time creation', () => {
    var time = new FlexTime( "04:17:32.527" );
    expect(time.toJSON()).toBe( "04:17:32.527" );

    time = new FlexTime( "04:17:32" );
    expect(time.toJSON()).toBe( "04:17:32" );

    time.date.setMilliseconds( 574 );
    expect(time.toJSON()).toBe( "04:17:32.574" );
});

test('test datetime creation', () => {
    var time = new FlexDateTime( "1992-12-17T04:17:32" );
    expect(time.toJSON()).toBe( "1992-12-17T04:17:32" );

    var time = new FlexDateTime( "1992-10-17T04:17:32Z" );
    expect(time.toJSON()).toBe( "1992-10-17T04:17:32" );

    var time = new FlexDateTime( "1992-10-17T04:17:32.174" );
    expect(time.toJSON()).toBe( "1992-10-17T04:17:32.174" );

    var time = new FlexDateTime( "1992-10-17T04:17:32.174Z" );
    expect(time.toJSON()).toBe( "1992-10-17T04:17:32.174" );
});

test('test tz datetime creation', () => {
    var time = new FlexDateTime( "1992-10-17T04:17:32" );
    expect(time.toJSON()).toBe( "1992-10-17T04:17:32" );

    var time = new FlexDateTime( "1992-10-17T04:17:32Z" );
    expect(time.toJSON()).toBe( "1992-10-17T04:17:32" );

    var time = new FlexDateTime( "1992-10-17T04:17:32.174" );
    expect(time.toJSON()).toBe( "1992-10-17T04:17:32.174" );

    var time = new FlexDateTime( "1992-10-17T04:17:32.174Z" );
    expect(time.toJSON()).toBe( "1992-10-17T04:17:32.174" );

    var time = new FlexZonedDateTime( "1992-10-17T04:17:32+03:00" );
    expect(time.toJSON()).toBe( "1992-10-17T04:17:32+03:00" );
});
