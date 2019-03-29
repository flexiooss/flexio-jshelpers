import {sortMap} from '../src/js/MapHelpers'

test('sortMap should sort', () => {
  const map1 = new Map([['10', {v: 10}], ['5', {v: 5}], ['30', {v: 30}], ['20', {v: 20}]])

  const arr1 = []
  map1.forEach((v, k) => {
    arr1.push(v.v)
  })

  expect(arr1).toEqual([10, 5, 30, 20])

  const map2 = sortMap(map1, (a, b) => {
    return a.value.v - b.value.v
  })

  expect(map2).toBeInstanceOf(Map)

  const arr2 = []
  map2.forEach((v, k) => {
    arr2.push(v.v)
  })

  expect(arr2).toEqual([5, 10, 20, 30])
})
