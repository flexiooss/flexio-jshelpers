import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isNull } from '@flexio-oss/assert'
import { FlexDateTime, FlexArray } from '@flexio-oss/flex-types'
/**
 * @extends {FlexArray<?FlexDateTime>}
 */
class DateTimeArray extends FlexArray {
  constructor(...args) {
    super(...args)
  }

  /**
   * @param {number} index
  * @returns {FlexDateTime}
   */
  get(index) {
    return this[index]
  }

  _validate(element) {
    if (!isNull(element)) {
      assertType(element instanceof FlexDateTime, 'element should be a FlexDateTime')
    }
  }

}
export { DateTimeArray }
