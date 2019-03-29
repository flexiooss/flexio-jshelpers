/* global runTest */
import {FlexDate, FlexTime, FlexDateTime, FlexZonedDateTime} from '../js/types/FlexDate'
import {TestCase} from 'code-altimeter-js'

const assert = require('assert')

export class TestFlexDate extends TestCase {
  testDateCreation() {
    const date = new FlexDate('1992-10-17')
    assert.strictEqual(date.toJSON(), '1992-10-17', 'test date creation')
  }

  testTimeCreation() {
    const time = new FlexTime('04:17:32.527')
    assert.strictEqual(time.toJSON(), '04:17:32.527', 'test time creation')

    const time_2 = new FlexTime('04:17:32')
    assert.strictEqual(time_2.toJSON(), '04:17:32', 'test time creation')

    time_2.date.setMilliseconds(574)
    assert.strictEqual(time_2.toJSON(), '04:17:32.574', 'test time creation')
  }

  testDateTimeCreation() {
    var time = new FlexTime('04:17:32.527')
    assert.strictEqual(time.toJSON(), '04:17:32.527', 'test datetime creation')

    var time = new FlexDateTime('1992-12-17T04:17:32')
    assert.strictEqual(time.toJSON(), '1992-12-17T04:17:32', 'test datetime creation')

    var time = new FlexDateTime('1992-10-17T04:17:32Z')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32', 'test datetime creation')

    var time = new FlexDateTime('1992-10-17T04:17:32.174')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32.174', 'test datetime creation')

    var time = new FlexDateTime('1992-10-17T04:17:32.174Z')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32.174', 'test datetime creation')
  }

  testTzDateTimeCreation(){
    var time = new FlexDateTime('1992-10-17T04:17:32')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32', 'test tz datetime creation')

    var time = new FlexDateTime('1992-10-17T04:17:32Z')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32', 'test tz datetime creation')

    var time = new FlexDateTime('1992-10-17T04:17:32.174')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32.174', 'test tz datetime creation')

    var time = new FlexDateTime('1992-10-17T04:17:32.174Z')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32.174', 'test tz datetime creation')

    var time = new FlexZonedDateTime('1992-10-17T04:17:32+03:00')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32+03:00', 'test tz datetime creation')
  }
}

runTest(TestFlexDate)
