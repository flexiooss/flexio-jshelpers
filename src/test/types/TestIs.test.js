import {TestCase} from 'code-altimeter-js'
import {
  isArray,
  isBoolean,
  isFunction,
  isIterable,
  isNull,
  isNumber,
  isObject,
  isPrimitive,
  isString,
  isSymbol,
  isUndefined
} from '../../js/is'

const assert = require('assert')

export class TestIs extends TestCase {
  testIsUndefined() {
    assert(isUndefined(undefined) === true)
    assert(isUndefined(0) === false)
    assert(isUndefined(1) === false)
    assert(isUndefined([]) === false)
    assert(isUndefined(null) === false)
    assert(isUndefined('key') === false)
    assert(isUndefined('') === false)
    assert(isUndefined(true) === false)
    assert(isUndefined(false) === false)
    assert(isUndefined(NaN) === false)
    assert(isUndefined({}) === false)
    assert(isUndefined({'key': 1}) === false)
    assert(isUndefined(Symbol('desc')) === false)
    assert(isUndefined(() => {
    }) === false)
  }

  testIsNull() {
    assert(isNull(undefined) === false)
    assert(isNull(0) === false)
    assert(isNull(1) === false)
    assert(isNull([]) === false)
    assert(isNull(null) === true)
    assert(isNull('key') === false)
    assert(isNull('') === false)
    assert(isNull(true) === false)
    assert(isNull(false) === false)
    assert(isNull(NaN) === false)
    assert(isNull({}) === false)
    assert(isNull({'key': 1}) === false)
    assert(isNull(Symbol('desc')) === false)
    assert(isNull(() => {
    }) === false)
  }

  testIsString() {
    assert(isString(undefined) === false)
    assert(isString(0) === false)
    assert(isString(1) === false)
    assert(isString([]) === false)
    assert(isString(null) === false)
    assert(isString('key') === true)
    assert(isString('') === true)
    assert(isString(true) === false)
    assert(isString(false) === false)
    assert(isString(NaN) === false)
    assert(isString({}) === false)
    assert(isString({'key': 1}) === false)
    assert(isString(Symbol('desc')) === false)
    assert(isString(() => {
    }) === false)
  }

  testIsBoolean() {
    assert(isBoolean(undefined) === false)
    assert(isBoolean(0) === false)
    assert(isBoolean(1) === false)
    assert(isBoolean([]) === false)
    assert(isBoolean(null) === false)
    assert(isBoolean('key') === false)
    assert(isBoolean('') === false)
    assert(isBoolean(true) === true)
    assert(isBoolean(false) === true)
    assert(isBoolean(NaN) === false)
    assert(isBoolean({}) === false)
    assert(isBoolean({'key': 1}) === false)
    assert(isBoolean(Symbol('desc')) === false)
    assert(isBoolean(() => {
    }) === false)
  }

  testIsNumber() {
    assert(isNumber(undefined) === false)
    assert(isNumber(0) === true)
    assert(isNumber(1) === true)
    assert(isNumber(-1) === true)
    assert(isNumber(-0.5) === true)
    assert(isNumber([]) === false)
    assert(isNumber(null) === false)
    assert(isNumber('key') === false)
    assert(isNumber('') === false)
    assert(isNumber(true) === false)
    assert(isNumber(false) === false)
    assert(isNumber(NaN) === false)
    assert(isNumber({}) === false)
    assert(isNumber({'key': 1}) === false)
    assert(isNumber(Symbol('desc')) === false)
    assert(isNumber(() => {
    }) === false)
  }

  testIsObject() {
    console.log('p')
    assert(isObject(undefined) === false)
    assert(isObject(0) === false)
    assert(isObject(1) === false)
    assert(isObject([]) === false)
    assert(isObject(null) === false)
    assert(isObject('key') === false)
    assert(isObject('') === false)
    assert(isObject(true) === false)
    assert(isObject(false) === false)
    assert(isObject(NaN) === false)
    assert(isObject({}) === true)
    assert(isObject({'key': 1}) === true)
    assert(isObject(Symbol('desc')) === false)
    assert(isObject(() => {
    }) === false)
  }

  testIsFunction() {
    assert(isFunction(undefined) === false)
    assert(isFunction(0) === false)
    assert(isFunction(1) === false)
    assert(isFunction([]) === false)
    assert(isFunction(null) === false)
    assert(isFunction('key') === false)
    assert(isFunction('') === false)
    assert(isFunction(true) === false)
    assert(isFunction(false) === false)
    assert(isFunction(NaN) === false)
    assert(isFunction({}) === false)
    assert(isFunction({'key': 1}) === false)
    assert(isFunction(Symbol('desc')) === false)
    assert(isFunction(() => {
    }) === true)
  }

  testIsTypePrimitive() {
    assert(isPrimitive(undefined) === true)
    assert(isPrimitive(0) === true)
    assert(isPrimitive(1) === true)
    assert(isPrimitive([]) === false)
    assert(isPrimitive(null) === true)
    assert(isPrimitive('key') === true)
    assert(isPrimitive('') === true)
    assert(isPrimitive(true) === true)
    assert(isPrimitive(false) === true)
    // TODO NaN is a type primitive ?
    // assert(isPrimitive(NaN) === false)
    // TODO object is a type Primitive ? Check the first prototype ?
    // assert(isPrimitive({}) === true)
    // assert(isPrimitive({'key': 1}) === true)
    assert(isPrimitive(Symbol('desc')) === true)
    assert(isPrimitive(() => {
    }) === false)
  }

  testIsIterable() {
    assert(isIterable(undefined) === false)
    assert(isIterable(0) === false)
    assert(isIterable(1) === false)
    assert(isIterable([]) === true)
    assert(isIterable(null) === false)
    assert(isIterable('key') === true)
    assert(isIterable('') === true)
    assert(isIterable(true) === false)
    assert(isIterable(false) === false)
    assert(isIterable(NaN) === false)
    assert(isIterable({}) === false)
    assert(isIterable({'key': 1}) === false)
    assert(isIterable(Symbol('desc')) === false)
    assert(isIterable(() => {
    }) === false)
  }

  testIsSymbol() {
    assert(isSymbol(undefined) === false)
    assert(isSymbol(0) === false)
    assert(isSymbol(1) === false)
    assert(isSymbol([]) === false)
    assert(isSymbol(null) === false)
    assert(isSymbol('key') === false)
    assert(isSymbol('') === false)
    assert(isSymbol(true) === false)
    assert(isSymbol(false) === false)
    assert(isSymbol(NaN) === false)
    assert(isSymbol({}) === false)
    assert(isSymbol({'key': 1}) === false)
    assert(isSymbol(Symbol('desc')) === true)
    assert(isSymbol(() => {
    }) === false)
  }

  testIsArray() {
    assert(isArray(undefined) === false)
    assert(isArray(0) === false)
    assert(isArray(1) === false)
    assert(isArray([]) === true)
    assert(isArray(null) === false)
    assert(isArray('key') === false)
    assert(isArray('') === false)
    assert(isArray(true) === false)
    assert(isArray(false) === false)
    assert(isArray(NaN) === false)
    assert(isArray({}) === false)
    assert(isArray({'key': 1}) === false)
    assert(isArray(Symbol('desc')) === false)
    assert(isArray(() => {
    }) === false)
  }
}

runTest(TestIs)
