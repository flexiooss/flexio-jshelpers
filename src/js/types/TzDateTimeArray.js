import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isNull } from '@flexio-oss/assert'
import { FlexZonedDateTime, FlexArray } from '@flexio-oss/flex-types'
/**
 * @extends {FlexArray<?FlexZonedDateTime>}
 */
class TzDateTimeArray extends FlexArray {
  constructor(...args) {
    super(...args)
  }

  /**
   * @param {number} index
  * @returns {FlexZonedDateTime}
   */
  get(index) {
    return this[index]
  }

  _validate(element) {
    if (!isNull(element)) {
      assertType(element instanceof FlexZonedDateTime, 'element should be a FlexZonedDateTime')
    }
  }

}
export { TzDateTimeArray }
