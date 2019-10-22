import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isNull } from '@flexio-oss/assert'
import { FlexArray, FlexTime  } from '@flexio-oss/flex-types'
/**
 * @extends {FlexArray<?FlexTime>}
 */
class TimeArray extends FlexArray {
  constructor(...args) {
    super(...args)
  }

  /**
   * @param {number} index
  * @returns {FlexTime}
   */
  get(index) {
    return this[index]
  }

  _validate(element) {
    if (!isNull(element)) {
      assertType(element instanceof FlexTime, 'element should be a FlexTime')
    }
  }

}
export { TimeArray }
