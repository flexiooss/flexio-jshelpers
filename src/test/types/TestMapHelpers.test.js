import {TestCase} from 'code-altimeter-js'
import {sortMap} from '../../js/MapHelpers';

const assert = require('assert')

export class TestMapHelpers extends TestCase {
  testSortMap() {
    let map = new Map()
    map.set(0, 0)
    map.set(1, 15)
    map.set(2, 5)
    map.set(3, 1)
    map.set(4, 27)
    let sorted = sortMap(map, (a, b) => {
      return a.value - b.value
    })

    let keys = sorted.keys()
    assert(keys.next().value === 0 && sorted.get(0) === 0)
    assert(keys.next().value === 3 && sorted.get(3) === 1)
    assert(keys.next().value === 2 && sorted.get(2) === 5)
    assert(keys.next().value === 1 && sorted.get(1) === 15)
    assert(keys.next().value === 4 && sorted.get(4) === 27)
  }
}

runTest(TestMapHelpers)
