/* global runTest */
import {FetchRequester} from '../../../js/http/FetchRequester/FetchRequester'
import {TestCase} from 'code-altimeter-js'
const fetch = require('node-fetch');
global.Headers = fetch.Headers;
const assert = require('assert')
global.Headers = global.Headers || require("fetch-headers");

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
