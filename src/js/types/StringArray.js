import {FlexArray} from './FlexArray'
import {isNull, isString} from '../is'
import {assertType} from '../assert'

/**
 * @extends {FlexArray<?string>}
 */
export class StringArray extends FlexArray {
  _validate(v) {
    assertType(isString(v) || isNull(v), 'StringArray: input should be a string or null')
  }
}
