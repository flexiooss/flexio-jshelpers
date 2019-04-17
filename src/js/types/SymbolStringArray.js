import {FlexArray} from './FlexArray'
import {isNull, isString, isSymbol} from '../is'
import {assertType} from '../assert'

/**
 * @extends {FlexArray<?(string|Symbol)>}
 */
export class SymbolStringArray extends FlexArray {
  _validate(v) {
    assertType(isString(v) || isNull(v) || isSymbol(v), 'SymbolStringArray: input should be a string or null or Symbol')
  }
}
