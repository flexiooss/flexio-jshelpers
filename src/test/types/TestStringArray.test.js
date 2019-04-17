/* global runTest */
import {StringArray} from '../../js/types/StringArray'
import {TestCase} from 'code-altimeter-js'

const assert = require('assert')

export class TestStringArray extends TestCase {
  testRaiseType() {
    const a = new StringArray()
    assert.throws(() => {
      a.push({})
    })
  }

  testStringOk() {
    const a = new StringArray()
    a.push('toto')
    assert(a.get(0) === 'toto')
  }
}

runTest(TestStringArray)
