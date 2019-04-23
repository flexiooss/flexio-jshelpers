import {TestCase} from 'code-altimeter-js'
import {
  deepFreeze,
  deepKeyAssigner,
  deepKeyResolver,
  deepSeal,
  filterObject, hasProperties,
  maxKey,
  sortObject
} from '../../js/objectHelpers'

const assert = require('assert')

export class TestObjectHelpers extends TestCase {
  testSortObect() {

  }

  testFilterObject() {
    let o = {
      'a': 'plok',
      'b': 45,
      'c': () => {
      },
      'd': 150
    }
    const res = filterObject(o, (value, key, object) => {
      return key === 'a' || value > 100
    })

    assert(Object.entries(res).length === 2)
    assert(res.a === 'plok')
    assert(res.d === 150)
  }

  testDeepFreeze() {
    let o = {
      'a': {
        'a1': 1
      },
      'b': 'plok'
    }

    // Test modification IMPOSSIBLE
    const res = deepFreeze(o)
    try {
      res['a']['a1'] = 5
    } catch (e) {
    }
    assert(res['a']['a1'] === 1)

    // Test deep modification IMPOSSIBLE
    try {
      res['b'] = 'ship'
    } catch (e) {
    }
    assert(res['b'] === 'plok')

    // Test add property IMPOSSIBLE
    try {
      res['c'] = 5
    } catch (e) {
    }
    assert(Object.entries(res).length === 2)
  }

  testDeepSeal() {
    let o = {
      'a': {
        'a1': 1
      },
      'b': 'plok'
    }

    // Test modification POSSIBLE
    const res = deepSeal(o)
    try {
      res['a']['a1'] = 5
    } catch (e) {
    }
    assert(res['a']['a1'] === 5)

    // Test deep modification POSSIBLE
    try {
      res['b'] = 'ship'
    } catch (e) {
    }
    assert(res['b'] === 'ship')

    // Test add property IMPOSSIBLE
    try {
      res['c'] = 5
    } catch (e) {
    }
    assert(Object.entries(res).length === 2)
  }

  testDeepFreezeSeal() {
    let o = {
      'a': {
        'a1': 1
      },
      'b': 'plok'
    }

    // Test modification IMPOSSIBLE
    const res = deepFreeze(o)
    try {
      res['a']['a1'] = 5
    } catch (e) {
    }
    assert(res['a']['a1'] === 1)

    // Test deep modification IMPOSSIBLE
    try {
      res['b'] = 'ship'
    } catch (e) {
    }
    assert(res['b'] === 'plok')

    // Test add property IMPOSSIBLE
    try {
      res['c'] = 5
    } catch (e) {
    }
    assert(Object.entries(res).length === 2)
  }

  testDeepKeyResolver() {
    let o = {
      'a': 1,
      'b': 'plok',
      'c': {
        '42': {
          'x': null,
          'y': true
        }
      }
    }
    assert(deepKeyResolver(o, 'a') === 1)
    try {
      deepKeyResolver(o, 'a.b', '.')
      assert(true === false)
    } catch (e) {
    }
    assert(deepKeyResolver(o, 'c.42.x', '.') === null)
    assert(deepKeyResolver(o, 'c.42.y', '.') === true)
  }

  testDeepKeyAssigner() {
    let o = {
      'a': {
        'a1': 1
      },
      'b': 'plok'
    }

    deepKeyAssigner(o, 'c', 42)
    assert(o['c'] === 42)

    deepKeyAssigner(o, 'a.b', null)
    assert(o['a']['b'] === null)

    deepKeyAssigner(o, 'a.a2.x', false)
    assert(o['a']['a2']['x'] === false)
  }

  testHasProperties() {
    let o = {
      'a': 1,
      'b': 'plok'
    }
    assert(hasProperties(o, ['a']) === true)
    assert(hasProperties(o, ['a', 'b']) === true)
    assert(hasProperties(o, ['a', 'b', 'ab']) === false)
  }
}

runTest(TestObjectHelpers)
