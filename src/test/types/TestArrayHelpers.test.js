import {TestCase} from 'code-altimeter-js'
import {cloneArray, shuffle} from '../../js/arrayHelpers'

const assert = require('assert')

export class TestArrayHelpers extends TestCase {
  testShuffle() {
    assert(shuffle([]).length === 0)

    let array = [1, 2, 3, {}, 'dq']
    let shuffled = shuffle(array)
    assert(shuffled.length === array.length)
    array.forEach((e) => {
      assert(shuffled.includes(e) === true)
    })
  }

  testCloneArray() {
    let array = [1, 2, 3, {}, 'dq']
    let clone = cloneArray(array)

    // Check copy
    assert(clone.length === array.length)
    array.forEach((e) => {
      assert(clone.includes(e) === true)
    })

    // Check not the same var
    array.push(0)
    assert(clone.length === array.length - 1)
  }
}

runTest(TestArrayHelpers)
