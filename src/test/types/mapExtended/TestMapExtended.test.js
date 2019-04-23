import {TestCase} from 'code-altimeter-js'
import {MapExtended} from '../../../js/mapExtended/MapExtended'

const assert = require('assert')

export class TestMapExtended extends TestCase {
  testMapExtended() {
    let map = new MapExtended()
    let keys = map.keys()
    let entry = keys.next()
    assert(entry.value === undefined && entry.done === true)
    assert(map.size() === 0)

    // Set
    map.set('boat', true)
    map.set('plane', -42)
    assert(map.size() === 2)

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
    assert(map.size() === 1)
    keys = map.keys()
    entry = keys.next()
    assert(entry.value === 'plane' && entry.done === false)
    entry = keys.next()
    assert(entry.value === undefined && entry.done === true)

    // Clear
    map.clear()
    assert(map.size() === 0)
    entry = map.keys().next()
    assert(entry.value === undefined && entry.done === true)
  }
}

runTest(TestMapExtended)
