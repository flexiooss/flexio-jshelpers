/* global runTest */
import {FetchRequester} from '../../../js/http/FetchRequester/FetchRequester'
import {TestCase} from 'code-altimeter-js'
const assert = require('assert')

export class TestFetchRequester extends TestCase {
  testPath() {
    new Headers()
    // const requester = new FetchRequester().path('https://www.fakeApi.com').get()
    // assert.throws(() => {
    //   const requester = new FetchRequester().path('bibi').get()
    // })
  }
}

runTest(TestFetchRequester)
