import {TestCase} from 'code-altimeter-js'
import {Sequence} from "../../js/Sequence";

const assert = require('assert')

export class TestSequence extends TestCase {
  testSequence() {
    let seq = new Sequence()
    assert(seq.nextID() === '1')
    assert(seq.nextID() === '2')
    assert(seq.nextID() === '3')

    seq = new Sequence('_-_')
    assert(seq.nextID() === '_-_1')
    assert(seq.nextID() === '_-_2')
    assert(seq.nextID() === '_-_3')
  }
}

runTest(TestSequence)
