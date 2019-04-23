import {TestCase} from 'code-altimeter-js'
import {MapExtended} from '../../../js/mapExtended/MapExtended'

const assert = require('assert')

export class TestMapExtended extends TestCase {
  testMapExtended() {
    let map = new MapExtended()
    let keys = map.keys()
    let entry = keys.next()
    assert(entry.value === undefined && entry.done === true)

    map.set('boat', true)
    map.set('plane', -42)

    // Get
    assert(map.get('boat') === true)
    assert(map.get('plane') === -42)

    // Has
    assert(map.has('plane') === true)
    assert(map.has('ship') === false)

    // Keys
    keys = map.keys()
    entry = keys.next()
    assert(entry.value === 'boat' && entry.done === false)
    entry = keys.next()
    assert(entry.value === 'plane' && entry.done === false)

    // Values
    let values = map.values()
    let value = values.next()
    assert(value.value === true && value.done === false)
    value = values.next()
    assert(value.value === -42 && value.done === false)

    // Delete
    map.delete('boat')
    keys = map.keys()
    entry = keys.next()
    assert(entry.value === 'plane' && entry.done === false)
    entry = keys.next()
    assert(entry.value === undefined && entry.done === true)

    // Clear
    map.clear()
    entry = map.keys().next()
    assert(entry.value === undefined && entry.done === true)
  }
}

runTest(TestMapExtended)
