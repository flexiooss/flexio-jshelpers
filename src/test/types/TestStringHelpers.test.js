import {TestCase} from 'code-altimeter-js'
import {camelCase, firstUppercase, matchAll2Array, padLeft} from '../../js/stringHelpers'

const assert = require('assert')

export class TestStringHelpers extends TestCase {
  testFirstUppercase() {
    let sentence = firstUppercase('always handle a teleporter.')
    assert(sentence === 'Always handle a teleporter.')
  }

  testCamelCase() {
    let sentence = camelCase('ginger_casserole_has_to_have_a_minced')
    assert(sentence === 'GingerCasseroleHasToHaveAMinced')

    sentence = camelCase('ginger casserole has to have a minced', ' ')
    assert(sentence === 'GingerCasseroleHasToHaveAMinced')

    sentence = camelCase('ginger|casserole|has|to|have|a|minced', '|', false)
    assert(sentence === 'gingerCasseroleHasToHaveAMinced')
  }

  testMatchAll() {
    let base = 'Everything we do is connected with courage: silence, energy, light, living'
    const res1 = matchAll2Array(new RegExp('e', 'g'), base)
    assert(res1.length === 9)
    assert(res1[0].index === 2)
    assert(res1[1].index === 12)

    const res2 = matchAll2Array(new RegExp('li', 'g'), base)
    assert(res2.length === 2)
    assert(res2[0].index === 61)
    assert(res2[1].index === 68)

    const res3 = matchAll2Array(new RegExp('plok', 'g'), base)
    assert(res3 === null)
  }

  testPadLeft() {
    assert(padLeft('123', 10, '0') === '0000000123')
  }
}

runTest(TestStringHelpers)
