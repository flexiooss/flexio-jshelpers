import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isNull } from '@flexio-oss/assert'
import { FlexArray, FlexDate } from '@flexio-oss/flex-types'
/**
 * @extends {FlexArray<?FlexDate>}
 */
class DateArray extends FlexArray {
  constructor(...args) {
    super(...args)
  }

  /**
   * @param {number} index
  * @returns {FlexDate}
   */
  get(index) {
    return this[index]
  }

  _validate(element) {
    if (!isNull(element)) {
      assertType(element instanceof FlexDate, 'element should be a FlexDate')
    }
  }

}
export { DateArray }
