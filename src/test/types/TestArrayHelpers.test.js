import {TestCase} from 'code-altimeter-js'
import {shuffle} from '../../js/arrayHelpers'

const assert = require('assert')

export class TestArrayHelpers extends TestCase {
  testShuffle() {
    assert(shuffle([]).length === 0)

    let array = [1, 2, 3, {}, 'dq']
    let shuffled = shuffle(array)
    assert(shuffled.length === array.length)
    for (let i = 0; i < array.length; i++) {
      assert(shuffled.includes(array[i]) === true)
    }
  }
}

runTest(TestArrayHelpers)
