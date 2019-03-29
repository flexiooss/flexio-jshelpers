/**
 *
 * @param {number} time millisecond
 * @return {Promise<any>}
 * @example await sleep(5000)
 * @export
 * @function
 */
export const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}
