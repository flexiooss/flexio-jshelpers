/**
 *
 * @param {Map} map
 * @param {function(a: {key: *, value: *},b: {key: *, value: *} ){return : boolean }} callback
 * @return {Map}
 */
export const sortMap = (map, callback) => {
  const arrayTemp = []
  const mapRet = new Map()

  map.forEach((v, k) => {
    arrayTemp.push({key: k, value: v})
  })

  arrayTemp.sort((a, b) => {
    return callback(a, b)
  })

  for (const v of arrayTemp) {
    mapRet.set(v.key, v.value)
  }
  return mapRet
}
